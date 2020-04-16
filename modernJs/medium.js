// MEDIUM: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2

let total=0;
let numArray=[1,4];

let average= (numArray)=>{
   
    for (let num of numArray){
        total=total+num;
    }
   console.log(total/numArray.length)
}


average(numArray);
