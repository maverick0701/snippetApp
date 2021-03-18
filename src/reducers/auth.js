import {
  AUTHENTICATE_USER,
  DESTROY_MESSAGES,
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_USER,
} from "../actions/actionTypes";
const initialAuthState = {
  user: {},
  isLoggedIn: false,
  inProgress: false,
  error: null,
};
export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
        inProgress: false,
        error: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    case DESTROY_MESSAGES:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
