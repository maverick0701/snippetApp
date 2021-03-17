import { ApiUrls } from "../helper/urls";
import { getFormBody } from "../helper/utils";
import { LOGIN_START } from "./actionTypes";

export function loginStart() {
  return {
    type: LOGIN_START,
  };
}

export function Login(email, password) {
  return (dispatch) => {
    const url = ApiUrls.login();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    });
  };
}
