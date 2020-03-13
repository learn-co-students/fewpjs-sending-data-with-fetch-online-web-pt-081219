// addEventListener('DOMContentLoaded', () => {
// fetch("http://localhost:3000/dogs")
// .then(function(response) {
//     return response.json()
// })
// .then(function(json) {
//     let dog1 = json[0]
//     console.log(dog1['dogName'])
// })
// })
// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
   
//   // method: "POST" is missing from the object below
//   let configObj = {
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
   
//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     })
//     .catch(function(error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });
// let formData = {
//     name: "Steve",
//     email: "steve@steve.com"
// };

// let configObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// };

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(function(response) {
              return response.json()
            })
            .then(function(object) {
                document.body.innerHTML = object[ "id" ]
            })
            .catch(function(error) {
                document.body.innerHTML = error.message
            });
};

// document.addEventListener("DOMContentLoaded", () => {
//     submitData();
// });

