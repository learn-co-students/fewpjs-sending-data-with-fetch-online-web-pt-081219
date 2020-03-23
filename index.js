function submitData(userName, userEmail) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail
    })
  })
  .then(function(response){
    return response.json();
  })
  .then(function(object) {
    let userID = object.id
    let id = document.createElement("p")
    id.innerHTML = userID
    body.appendChild(id)
  })
  .catch(function(error) {
    let msg = document.createElement("p")
    msg.innerHTML = error.message
    body.appendChild(msg)
  })
};
 
const body = document.querySelector("body");