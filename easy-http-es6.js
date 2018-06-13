/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Saumya Majumder
 * @license GPL
 * 
**/

class EasyHTTP {
	// Make a HTTP GET request
	get(url) {
		// Return a promise so the data can be fetched Asynchronously
		return new Promise((resolve, reject) => {
			fetch(url)
				.then((response) => {
					// Check if response.ok is true then proceed else throw error
					if(response.ok) {
						return response.json();
					} else {
						throw new Error(`Network Error Happened. HTTP ERROR CODE: ${response.status}`);
					}
				})
				.then( data => resolve( data ) )
				.catch( err => reject( err ) );
		});
	}

	// Make a HTTP POST request
	post(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method : "POST",
				headers : {
					'Content-type' : 'application/json'
				},
				body : JSON.stringify(data)
			})
			.then( response => {
				if(response.ok) {
					return response.json();
				} else {
					throw new Error(`Network Error Happened. HTTP ERROR CODE: ${response.status}`);
				}
			})
			.then( data => resolve(data) )
			.catch( err => reject(err) )
		});
	}

	// Make a HTTP PUT request
	put(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'PUT',
				headers: {
					'Content-type' : 'application/json'
				},
				body: JSON.stringify(data)
			})
			.then(response => {
				if(response.ok) {
					return response.json();
				} else {
					throw new Error(`Network Error Happened. HTTP ERROR CODE: ${response.status}`);
				}
			})
			.then( data => resolve(data) )
			.catch( err => reject(err) );
		});
	}

	// Make a HTTP DELETE request
	delete(url) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'DELETE'
			})
			.then( response => {
				if(response.ok) {
					return new Promise( (resolve) => {
						resolve('Resource Deleted...!');
					} );
				} else {
					throw new Error(`Network Error Happened. HTTP ERROR CODE: ${response.status}`);
				}
			})
			.then( data => resolve(data) )
			.catch( err => reject(err) );
		});
	}
}