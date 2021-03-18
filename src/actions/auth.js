import { ApiUrls } from "../helper/urls";
import { getFormBody } from "../helper/utils";
import {
  AUTHENTICATE_USER,
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_USER,
} from "./actionTypes";

export function loginStart() {
  return {
    type: LOGIN_START,
  };
}
export function loginError(message) {
  return {
    type: LOGIN_FAILED,
    error: message,
  };
}
export function loginSucess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}
export function createSession(email, password) {
  return (dispatch) => {
    dispatch(loginStart());
    const url = ApiUrls.login();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("token", data.data.token);
          return dispatch(loginSucess(data.data.user));
        }
        dispatch(loginError(data.message));
      });
  };
}

export function authUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logout() {
  return {
    type: LOGOUT_USER,
  };
}
