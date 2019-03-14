// //Method 1- Not using the arrow function
// function greeting(message){
// 	return alert(`${message} everyone`);
// }
// greeting('Hello');

// //Method 2-Using the arrow function 
// let greeting = (message) => alert(`${message} everyone`);
// greeting('Hello');

// //let functionname = (parameter) => functionality

// //Using conditional statements,
// //throw err is condition is not met


let createBlog = (title,body) =>{
	if (!title){
		throw new Error('A title is required');
	}

	if (!body){
		throw new Error('A body is required');
	}

	return alert(`${title} - ${body}`);

}

createBlog('titleOfBlog','blog body');