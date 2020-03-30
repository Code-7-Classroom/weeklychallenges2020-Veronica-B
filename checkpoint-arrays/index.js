var drinks= ['water', 'coffee', 'tea'];
var foods=['apple', 'sandwich', 'chips'];
//0 1 2 3 4 5 so water then apple then coffee etc
var meals=[drinks[0],foods[0],drinks[1],foods[1],drinks[2],foods[2]];


//reversed so now water is at the end instead of the beginning
console.log(meals[5], meals[4], meals[3], meals[2],  meals[1], meals[0])