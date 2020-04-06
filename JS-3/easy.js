
//I want Today excerise to be printed out from function and be allowed to write whatever sport in it.
// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

function exercise(sport){
   var s ="Today's exercise: " + sport; //s is not available outside of this function, which makes a private variable.  
   function returnFunction(){
   return s ;
   }
   return returnFunction;
};

// console.log(exercise())// prints Today's exercise: undefined
// console.log(exercise('running')) // prints Today's exercise: running




var run = exercise('running');
console.log(run()); // prints "Today's exercise: running"
// console.log(run()); // prints error type something 
var swim = exercise('swimming');
console.log(swim());
// console.log(swim()); // prints error type something 
