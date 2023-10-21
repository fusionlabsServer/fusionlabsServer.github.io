// JavaScript File to connect with 'Server.js'


// Glitch Server API
const apiUrl = 'https://usersdatabase.glitch.me'; 

var btn = document.getElementById("btn")
var select = document.getElementById("function")

btn.onclick = function() {
    var selectedFunction = select.value
    
    if (selectedFunction === 'getUsers') {
        fetch(apiUrl + '/users')
            .then(response => response.json())
            .then(users => document.getElementById("output").textContent = JSON.stringify(users, null, 2))
    } 
    else if (selectedFunction === 'getUser') {
        const userId = document.getElementById("userId").value
        fetch(apiUrl + `/users/${userId}`)
            .then(response => response.json())
            .then(user => document.getElementById("output").textContent = JSON.stringify(user, null, 2))
    } 
    else if (selectedFunction === 'deleteUser') {
        const userId = document.getElementById("userId").value
        fetch(apiUrl + `/users/${userId}`)
            .then(response => response.json())
            .then(users => document.getElementById("output").textContent = JSON.stringify(users, null, 2))
    } 
    else if (selectedFunction === 'addUser') {
        const name = document.getElementById("name").value
        const age = document.getElementById("age").value
        fetch(apiUrl + '/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, age })
        })
        .then(response => response.json())
        .then(newUser => document.getElementById("output").textContent = JSON.stringify(newUser, null, 2))
    }
}
