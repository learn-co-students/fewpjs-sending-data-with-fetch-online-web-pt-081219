// Add your code here
function submitData(userName, userEmail) {
    const body = document.getElementsByTagName("body")[0];

    let formData = {
        name: userName,
        email: userEmail
    };

    let configObj = {
        method: "POST",
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
        const h1 = document.createElement("h1");
        h1.innerHTML = object.id;
        body.appendChild(h1);
    })
    .catch(function(error) {
        const h3 = document.createElement("h3");
        h3.innerHTML = error.message;
        body.appendChild(h3);
    });
}