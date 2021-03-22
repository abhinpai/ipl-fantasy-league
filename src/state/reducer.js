import { localStorageKeys } from '../utils/constants';
import { actions } from './action';

export const initialData = {
  isScheduleDivOpen: false,
  matches: [],
  lodingQuestions: false,
  leaderboard: [],
  loggedsUser: localStorage.getItem(localStorageKeys.user)
    ? JSON.parse(localStorage.getItem(localStorageKeys.user))
    : {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.userLogin:
      return { ...state, loggedsUser: action.payload };
    case actions.showSchedule:
      return { ...state, isScheduleDivOpen: action.payload };
    case actions.matches:
      return { ...state, matches: action.payload };
    case actions.loadingQuestions:
      return { ...state, lodingQuestions: action.payload };
    default:
      return state;
  }
};

export default reducer;
