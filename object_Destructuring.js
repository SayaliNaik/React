let thingsToDo ={
	morning:"Exercise",//here we have used default values
	afternoon:"Work",
	evening:"Code",
	night:["Sleep","Dream"]
}

let {morning, afternoon} =thingsToDo;
morning ="Run"; //how changed the default value to assign a new value
console.log(morning,'-', afternoon)