const accessToken = ${key};

fetch(
  "https://people.googleapis.com/v1/{id}/personFields=${fields}",
  {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Accept": "application/json"
    }
  }
)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
