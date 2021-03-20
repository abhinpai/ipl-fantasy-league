import {actions} from './action';

export const initialData = {
  isLoggedIn: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.userLogin:
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};

export default reducer;
