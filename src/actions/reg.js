import { ApiUrls } from "../helper/urls";
import { getFormBody, getFormSent } from "../helper/utils";
import { SIGN_UP_FAILED, SIGN_UP_START, SIGN_UP_SUCESS } from "./actionTypes";

export function startLogin() {
  return {
    type: SIGN_UP_START,
  };
}

export function successReg() {
  return {
    type: SIGN_UP_SUCESS,
    message: null,
  };
}
export function failReg(message) {
  return {
    type: SIGN_UP_FAILED,
    message: message,
  };
}
export default function userCreation(email, password, confirm_password, Name) {
  return function (dispatch) {
    dispatch(startLogin());
    let url = ApiUrls.register();
    fetch(url, getFormSent({ email, password, confirm_password, Name }))
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          return dispatch(successReg());
        }
        return dispatch(failReg(data.message));
      });
  };
}

/*{
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password, confirm_password, Name }),
    }*/
