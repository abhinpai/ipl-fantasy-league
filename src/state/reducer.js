import { actions } from './action';

export const initialData = {
  isLoggedIn: false,
  isScheduleDivOpen: false,
  matches: [],
  leaderboard: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.userLogin:
      return { ...state, isLoggedIn: action.payload };
    case actions.showSchedule:
      return { ...state, isScheduleDivOpen: action.payload };
    case actions.matches:
      return { ...state, matches: action.payload };
    default:
      return state;
  }
};

export default reducer;
