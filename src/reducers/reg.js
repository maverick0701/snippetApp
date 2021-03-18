import {
  SIGN_UP_FAILED,
  SIGN_UP_START,
  SIGN_UP_SUCESS,
} from "../actions/actionTypes";

let initialRegState = {
  inProgress: false,
  error: null,
};

export default reg((state = initialRegState), action);
{
  switch (action.type) {
    case SIGN_UP_START:
      return {
        ...state,
        inProgress: true,
      };
    case SIGN_UP_FAILED:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    case SIGN_UP_SUCESS:
      return {
        ...state,
        inProgress: false,
        error: null,
      };
    default:
      return state;
  }
}
