

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
    };

    function renderObj(object) {
        const body = document.querySelector('body');
        
        const p = document.createElement('p')
        p.innerHTML = `<p>id:${object.id}</strong></p>`
        body.appendChild(p)

        console.log(object);
    };

    function renderError(error) {
        const body = document.querySelector('body');
        const p = document.createElement('p')
        p.innerHTML = `<p style="color:red;"><strong>${error.message}</strong></p>`
        body.appendChild(p);
        console.log(error.message);
    };


    return fetch("http://localhost:3000/users", configObj)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            renderObj(object);
        })
        .catch(function (error) {
            alert("Bad things! Ragnarők!");
            renderError(error);
        });


};