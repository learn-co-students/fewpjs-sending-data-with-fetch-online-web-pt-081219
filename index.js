// Add your code here

function submitData(name, email){
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({name, email})
  };
  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
          return response.json();
     })
     .then(function(object) {
       document.body.innerHTML = `<h1> ${object.id}</h1>`;
     })
     .catch(function(error) {
        document.body.innerHTML = `<h1> ${error.message} </h1>`;
       console.log(error.message);
      });
    };
