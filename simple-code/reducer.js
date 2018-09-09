import { combineReducers, createStore } from 'redux'
let reducer = combineReducers({ visibilityFilter, todos })
let store = createStore(reducer)

const reducer = function (state = [], action) {
  // do something...
  switch (action.type) {
    case 'ADD_READ':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_READ':
      return state.map((articles, index) => {
        if (index === action.index) {
          return Object.assign({}, articles, {
            completed: true
          })
        }
        return articles
      })
    default:
      return state
  }
};


function addReadingBooks(state = [], action) {
   // do something...
   return nextState
 }

 function showReadingBooks(state = [], action) {
   // do something...
   return nextState
 }

 let App = combineReducers({
   addReadingBooks,
   showReadingBooks
 })