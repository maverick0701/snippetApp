export function getFormBody(params) {
  let form = [];
  for (let field in params) {
    let encodedKey = encodeURIComponent(field);
    let encodedValue = encodeURIComponent(params[field]);
    form.push(encodedKey + "=" + encodedValue);
  }
  return form.join("&");
}

export function getFormSent(params) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: getFormBody(params),
  };
}
