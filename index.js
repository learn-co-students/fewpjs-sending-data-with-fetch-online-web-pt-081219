const body = document.querySelector('body')

function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    function renderObj(object) {
        const div = document.createElement('div');
        div.innerHTML = `<p> ID:${object.id} </p>`;
        body.appendChild(div);

        console.log(object);
    }

    function renderError(error) {
        const div = document.createElement('div');
        div.innerHTML = `<p> ${error.message} </p>`;
        body.appendChild(div);
        console.log(error.message);
    }

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object){
            renderObj(object);
        })
        .catch(function(error){
            alert("Bad things! Ragnarők!");
            renderError(error);
        })
}