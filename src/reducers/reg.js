import {
  DESTROY_MESSAGES,
  SIGN_UP_FAILED,
  SIGN_UP_START,
  SIGN_UP_SUCESS,
} from "../actions/actionTypes";

let initialRegState = {
  inProgress: false,
  message: null,
};

export default function reg(state = initialRegState, action) {
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
        message: action.message,
      };
    case SIGN_UP_SUCESS:
      return {
        ...state,
        inProgress: false,
        message: "successfully registered",
      };
    case DESTROY_MESSAGES:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
}
