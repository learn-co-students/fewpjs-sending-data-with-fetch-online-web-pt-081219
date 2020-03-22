// Add your code here



function submitData(name, email){



  let formData = {
    name: name,
    email: email
  };

  let configObj = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log("This is doing things")
    console.log(object.name);
    const thing = document.createElement('h2');
    thing.innerHTML = object.id;
    document.body.appendChild(thing);

  })
  .catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
    const thing = document.createElement('h2');
    thing.innerHTML = error.message;
    document.body.appendChild(thing);
  });
};

