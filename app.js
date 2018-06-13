// Test the EasyHTTP v2 Library
const http = new EasyHTTP();

// Test the GET request
http.get('https://jsonplaceholder.typicode.com/users')
		.then( data => document.getElementById('output').innerHTML = JSON.stringify(data) )
		.catch( err => document.getElementById('output').innerHTML = err );

// Test the POST request
/*const user = {
	"name" : "Susmita Majumder",
	"username" : "susmaju",
	"email" : "susmaju876876@gmail.com"
};

http.post('https://jsonplaceholder.typicode.com/users', user)
		.then( response => document.getElementById('output').innerHTML = JSON.stringify(response) )
		.catch( err => document.getElementById('output').innerHTML = err );*/

// Test the PUT request - for updating the users
/*const updatedDetails = {
	"name" : "Susmita Majumder",
	"username" : "susmaju",
	"email" : "susmaju876876@gmail.com"
};

http.put('https://jsonplaceholder.typicode.com/users/10', updatedDetails)
		.then( data => document.getElementById('output').innerHTML = JSON.stringify(data) )
		.catch( err => document.getElementById('output').innerHTML = err );*/

// Test the DELETE request
/*http.delete('https://jsonplaceholder.typicode.com/users/10')
		.then( response => document.getElementById('output').innerHTML = response )
		.catch( err => document.getElementById('output').innerHTML = err );*/