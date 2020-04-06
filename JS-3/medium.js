//we want cutpizzaslices to like be able to divide.
// //also to print out each person gets ___ slices of pizza
// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));                                                                                                                                                                    
//   // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3)); 
//   // prints "Each person gets 2.67 slices of pizza"

var slice;

function cutPizzaSlices(slice){
    // "Each person gets " + slice + " slices of pizza";
    function divide(shared){

      var slicesperperson=slice/shared;
      return 'Each person gets ' + slicesperperson.toFixed(2) + ' slices of pizza.';

    }
    return divide;
}









var sharePizza = cutPizzaSlices(8);

// console.log(sharePizza);
console.log(sharePizza(2));                                                                                                                                                                    
  // prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3)); 
  // prints "Each person gets 2.67 slices of pizza"
