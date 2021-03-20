export const actions = {
  userLogin: 'USER_LOGIN',
};

export const actionUserLogin = (isLoggedIn, dispatch) =>
  dispatch({ type: actions.userLogin, payload: isLoggedIn });
