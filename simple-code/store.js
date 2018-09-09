import { createStore } from 'redux'
import readApp from './reducer'
let store = createStore(readApp)

console.log(store.getState())
/* 输出
{
  status: 'learning',
  todos: [
    {
      text: 'learn store',
      completed: true,
    },
    {
      text: 'learn action',
      completed: false
    },
    {
      text: 'learn reducer',
      completed: false
    }
  ]
}
*／

// 打印初始状态
console.log(store.getState())

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)