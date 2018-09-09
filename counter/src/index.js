import React from 'react'
import ReactDOM from 'react-dom'
import {
  createStore,
  applyMiddleware
} from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import logger from 'redux-logger'

const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
) // createStore接受3个参数：reducer, preloadedState, enhancer
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
  />,
  rootEl
)

render()
store.subscribe(render)