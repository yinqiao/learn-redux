export const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_USER:
      return state.merge({
        'user': action.data,
        'error': null,
        'token': null,
      });
    case LOGIN_USER_SUCCESS:
      return state.merge({
        'token': action.data,
        'error': null
      });
    case LOGIN_USER_FAILURE:
      return state.merge({
        'token': null,
        'error': action.data
      });
    default:
      return state
  }
};