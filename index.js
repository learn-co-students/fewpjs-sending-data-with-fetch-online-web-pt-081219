function submitData(userName, userEmail) {

  let formData = {
    name: userName,
    email: userEmail
  }

  const url = "http://localhost:3000/users"

  let configReq = {
      method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }

  return fetch(url, configReq)
    .then(response => response.json())
    .then(data => {
      document.body.innerText = data["id"]
    })
    .catch(error => {
      document.body.innerText = error.message
    })
    
}
