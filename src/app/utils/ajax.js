export function deleteRequest(url) {
  return fetch(url, {
    method: 'DELETE'
  });
}

export function getRequest(url, params) {
  if (!params) {
    return fetch(url);
  }
  return fetch(`${url}?${Object.keys(params).map(key => `${key}=${convertToParamValue(params[key])}`).join('&')}`);
}

function convertToParamValue(value) {
  if (value instanceof Date) {
    value = value.toISOString().substring(0, 10);
  }
  return String(value);
}