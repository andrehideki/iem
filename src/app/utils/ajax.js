export function deleteRequest(url) {
  return fetch(url, {
    method: 'DELETE'
  })
  .then(data => data.json());
}