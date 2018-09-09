export default (state = { result: 0 }, action) => {
  let result = state.result
  switch (action.type) {
    case 'INCREMENT':
      result += 1
      break
    case 'DECREMENT':
      result -= 1
      break
    default:
      result = result
      break
  }
  return {
    result
  }
}