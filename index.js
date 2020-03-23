// Add your code here
function submitData(name, email) {

    let formData = {
        name: name,
        email: email
    };

    // This is just a regular JS object. But how do we know what key's and values to use? Well, it depends on how you want to customize your request. You can find all of the options here https://github.github.io/fetch/#options
    let configObject = {
        method: "POST", // PUT, GET, DELETE etc.
        headers: { // the headers you want to use depends on what "the people who created the application" want you to use here is a link from the Github API where they are telling users the they MUST include the user-agent header https://developer.github.com/v3/#user-agent-required
            "Content-Type": "application/json", // this header tells the server what kind of data is in the body of your request
            "Accept": "application/json" // this header tells the servers what kind of data you are willing to accept from the server
        },
        body: JSON.stringify(formData) // body is ALWAYS where you send data in a request and where you receive data from the server. In this instance you're sending the form data
        // we do not want to send JavaScript to the server, so we use JSON.stringify to convert that data into a string formatted as JSON data
        // JSON is it's own file type. It is NOT JavaScript, even though it looks just like a JS object. 
    };

    return fetch('http://localhost:3000/users', configObject)
        .then(response => response.json())
        .then(object => {
            document.body.innerHTML = object["id"]
        })
        .catch(error => {
            document.body.innerHTML = error.message
        })

}