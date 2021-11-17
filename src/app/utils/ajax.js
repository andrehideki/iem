export function deleteRequest(url) {
  return fetch(url, {
    method: 'DELETE'
  });
}

export function getRequest(url, params) {
  const queryParams = Object.keys(params)
    .map(key => `${key}=${convertToParamValue(params[key])}`)
    .join('&');
  return fetch(`${url}?${queryParams}`);
}

function convertToParamValue(value) {
  if (value instanceof Date) {
    value = value.toISOString().substring(0, 10);
  }
  return String(value);
}