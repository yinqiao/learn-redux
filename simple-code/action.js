const action = {
    type: 'READ',
    msg: 'Keep on'
};
store.dispatch(action);


function addToRead(text) {
  return {
    type: 'READ',
    msg: 'Keep on',
    index: 1
  }
}


/*
 * action 类型
 */

export const ADD_READ = 'ADD_READ';
export const TOGGLE = 'TOGGLE'
export const DELETE_READ = 'DELETE_READ'

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */

export function addRead(text) {
  return { type: ADD_READ, text }
}

export function toggle(index) {
  return { type: TOGGLE, index }
}

export function deleteRead(filter) {
  return { type: DELETE_READ, filter }
}