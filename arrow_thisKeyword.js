let animals = {
	//add property
	pets:['dogs','cats','rabbits'],
	//add method
	printWithDash:function(){
		setTimeout(()=>console.log(this.pets.join('*')),3000);
	}
};

animals.printWithDash();