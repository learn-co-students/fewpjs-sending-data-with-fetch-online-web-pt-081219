
function submitData(name, email) {
    let userData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    }

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response){
        return response.json();
    })
    .then(function(obj){
        addToDOM(obj)
    })
    .catch(function(error){
        showError(error)
    });
}

function addToDOM(object){
    document.body.innerHTML = object["id"]
    let h3 = document.createElement("h3")
    let p = document.createElement("p")
    
    h3.innerText = object.name
    p.innerText = object.email
    document.body.appendChild(h3);
    document.body.appendChild(p);
}

function showError(error){
    let msg = document.createElement("p");
    msg.innerHTML = error.message;
    msg.style.color = "red";
    document.body.appendChild(msg);
}


