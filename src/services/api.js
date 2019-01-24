export function getData(url) {
  return fetch(url, {
    "Content-Type": "application/json",
  })
    .then(response => response.json())
    .then(response => response.products)
    .catch((error) => {
      throw error;
    });
}