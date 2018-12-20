export function getData(url) {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(response => response.json())
    .then(response => response.result)
    .catch((error) => {
      throw error;
    });
}