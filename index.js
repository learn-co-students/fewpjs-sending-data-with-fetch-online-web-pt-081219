// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };
//
// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };
//
// fetch("http://localhost:3000/dogs", configObj)
//   .then(resp => resp.json());
//   .then(object => console.log(object))
//   .catch(error => {
//     alert('Bad things! Ragnarök!')
//     console.log(error.message)
//   } );



  function submitData(username, email) {
    let userData = {
      username: username,
      email: email
    };

    let userObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };

    return fetch("http://localhost:3000/users", userObj)
      .then(resp => resp.json());
      .then(obj => addElement(obj));
      .catch(error => addError(error))
  };

  function addError(error) {
    let msg = document.createElement("p");
    msg.innerText = error.message;
    msg.style.color = "red";
    document.body.appendChild(msg)
  }

  function addElement(object) {
    username = document.createElement("h3");
    email = document.createElement("p");
    username.innerText = object.username;
    email.innerText = object.email;
    document.body.appendChild(username);
    document.body.appendChild(email);
  }
