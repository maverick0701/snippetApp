import { ApiUrls } from "../helper/urls";
import { getFormBody } from "../helper/utils";
import { UPDATE_SUCCESS, UPDATE_FAILED } from "./actionTypes";

export function updateSuccess(user) {
  return {
    type: UPDATE_SUCCESS,
    user,
  };
}

export function updateFailed(message) {
  return {
    type: UPDATE_FAILED,
    message,
  };
}

export function updateUser(obj) {
  return function (dispatch) {
    const urls = "http://localhost:8000/api/v1/users/update";
    fetch(urls, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: getFormBody(obj),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.removeItem("token");
          localStorage.setItem("token", data.token);
          return dispatch(updateSuccess(data.user));
        }
        return dispatch(updateFailed(data.message));
      });
  };
}
