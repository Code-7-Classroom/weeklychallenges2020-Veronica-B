// EASY: Using ES6 syntax, write a function that takes in an array of numbers and 
//outputs the maximum number.
// Input: [1, 2, 3]  Output: 3
// Input: [3, 6, 4, 5, 2, 1]  Output: 6
// Input: [3, 3, 3]  Output: 3

let numArray= [1,2,7,3];
let greatNum=0;


let maxNum= (numArray)=>{
for (let i of numArray){
    if (numArray[i]>greatNum){
        greatNum=numArray[i];  
    } 
}
 return greatNum;
}

console.log(maxNum(numArray))