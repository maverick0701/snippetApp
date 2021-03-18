export function getFormBody(params) {
  let form = [];
  for (let field in params) {
    let encodedKey = encodeURIComponent(field);
    let encodedValue = encodeURIComponent(params[field]);
    form.push(encodedKey + "=" + encodedValue);
  }
  return form.join("&");
}
