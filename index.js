// function greeting(message){
// 	return alert(`${message} everyone`);
// }

// greeting('Hello');

// let greeting = (message) => alert(`${message} everyone`);
// greeting('Hello');


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