export const actions = {
  userLogin: 'USER_LOGIN',
  showSchedule: 'SHOW_SCHEDULE',
  matches: 'MATCHES',
  loadingQuestions: 'LOADING_QUESTIONS',
};

export const actionUserLogin = (userInfo, dispatch) =>
  dispatch({ type: actions.userLogin, payload: userInfo });

export const actionShowSchedule = (isScheduleDivOpen, dispatch) =>
  dispatch({ type: actions.showSchedule, payload: isScheduleDivOpen });

export const actionUpdateMatches = (matches, dispatch) =>
  dispatch({ type: actions.matches, payload: matches });

export const actionLoadingQuestions = (loadingQuestions, dispatch) =>
  dispatch({ type: actions.loadingQuestions, payload: loadingQuestions });
