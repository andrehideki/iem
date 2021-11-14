export function deleteRequest(url) {
  return fetch(url, {
    method: 'DELETE'
  });
}