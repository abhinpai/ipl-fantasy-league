export const actions = {
  userLogin: 'USER_LOGIN',
  showSchedule: 'SHOW_SCHEDULE',
};

export const actionUserLogin = (isLoggedIn, dispatch) =>
  dispatch({ type: actions.userLogin, payload: isLoggedIn });

export const actionShowSchedule = (isScheduleDivOpen, dispatch) =>
  dispatch({ type: actions.showSchedule, payload: isScheduleDivOpen });
