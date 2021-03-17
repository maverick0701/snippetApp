import { UPDATE_POSTS } from "./actionTypes";
import { ApiUrls } from "../helper/urls";
export function fetchPosts() {
  return function (dispatch) {
    const url = ApiUrls.fetchPosts();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.posts);
        return dispatch(updatePosts(data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
