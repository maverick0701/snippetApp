export function fetchPosts() {
  return function (dispatch) {
    const url = "http://localhost:8000/api/v1/posts/";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
  };
}

export function updatePosts(posts) {
  return {
    type: "update posts",
    posts,
  };
}
