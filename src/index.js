import React from 'react'
import ReactDOM from 'react-dom'
import {
  createStore,
  applyMiddleware
} from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import Counter from './components/Counter'
import counter from './reducers/counter'
import mySaga from './sagas'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware, logger)
) // createStore接受3个参数：reducer, preloadedState, enhancer

// then run the saga
sagaMiddleware.run(mySaga)

const rootEl = document.getElementById('root')
// 打印初始状态
console.log(store.getState().result)
// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
const render = () => ReactDOM.render(
  <Counter
    value={store.getState().result}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    onSomeButtonClicked= {() => 
      store.dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId: 'test'}})
    }
  />,
  rootEl
)

render()
store.subscribe(render)