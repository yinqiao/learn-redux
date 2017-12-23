import { createStore } from 'redux';
// store
const store = createStore(reducer); // 容器
// state
const state = stroe.getState(); // 所有数据， 一个 State 对应一个 View

// let store = createStore(todoApp, window.STATE_FROM_SERVER) // 传入默认值

// View -> Action/ -> State


// action
const action = {
	type: 'ADD_TODO',
	payload: 'learn Redux'
};

// action creator
function addTodo(type, payload) {
	return {
		type: type,
		payload: payload
	}
};

const actionCreated = addTodo('ADD_TODO', 'learn Redux')

// store.dispatch(); store.dispatch方法会触发 Reducer 的自动执行
store.dispatch({
	type: 'ADD_TODO',
	payload: 'learn Redux'
});
store.dispatch(actionCreated);
store.dispatch(addTodo('ADD_TODO', 'learn Redux'));

// Reducer Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。
// 纯函数:只要是同样的输入，必定得到同样的输出
const defaultState = 0;
function reducer(state = defaultState, action) {
	switch (action.type) {
		case 'ADD':
			return state + action.payload;
			break;
		default:
			return state;
			break;
	}
}

const state = reducer(1, {
	type: 'ADD',
	payload: 2
});

// 支持对数组的操作
const actions = [
  { type: 'ADD', payload: 0 },
  { type: 'ADD', payload: 1 },
  { type: 'ADD', payload: 2 }
];
const total = actions.reduce(reducer, 0); // 3

// store.subscribe()
// store.subscribe(listener);
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
unsubscribe(); // 调用这个函数就可以解除监听


// store.getState();
// stroe.dispatch();
// store.subscribe();

// let { subscribe, dispatch, getState } = createStore(reducer);


// createStore 的简单实现, 注意观察起实现思路
const createStore = (reducer) => {
	let state;
	let listeners = [];

	const getState = () => state;

	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach(listener => listener());
	};

	const subscribe = (listener) => {
		listeners.push(listener);
		return () => {
			listeners = listeners.filter( l => l != listener);
		}
	}

	dispatch({});

	return { getState, dispatch, subscribe };
};


// Reducers 拆分
import { combineReducers } from 'redux';
// return 的是 一个对象，可以赋值给state
const chatReducer = (state = defaultState, action = {}) => {
  return {
    chatLog: chatLog(state.chatLog, action),
    statusMessage: statusMessage(state.statusMessage, action),
    userName: userName(state.userName, action)
  }
};

const chatReducer = combineReducers({
  chatLog,
  statusMessage,
  userName
})

const reducer = combineReducers({
  a: doSomethingWithA,
  b: processB,
  c: c
})

// 等同于
function reducer(state = {}, action) {
  return {
    a: doSomethingWithA(state.a, action),
    b: processB(state.b, action),
    c: c(state.c, action)
  }
}





// 工作流程：

store.dispatch(action);

==>

自动调用 reducer

==>

store.subscribe(listener);

==> 

listener 可以通过 store.getState() 得到当前状态





