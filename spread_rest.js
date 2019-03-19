//Spread operator with array

var vowels = ['A','E','I']
var consonants = ['B','Z']

var allLetters =[...vowels,...consonants];
console.log(allLetters);

/////////////////////////////////////////////

//Spread operator with object

var day={
	breakfast:'toast',
	lunch:'rice'
}

var night={
	dinner:'salad'
}

var picnic={...day,...night}
console.log(picnic)

//Rest


