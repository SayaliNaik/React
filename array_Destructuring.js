

//with a destructured object, the name and university is seperated
let uniStudent = student =>{
	let {name, university} = student;
	console.log(`${name} from ${university}`);
}

uniStudent({
	name:'Sayali',
	university:'CSU Chico'
});






// let uniStudent = student =>{
// 	console.log(`${student.name} from ${student.university}`);
// }

// uniStudent({
// 	name:'Sayali',
// 	university:'CSU Chico'
// });