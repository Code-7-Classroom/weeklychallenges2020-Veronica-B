/*HARD: Given the information below for Tom and Jerry. 
Tom - 	height:  9in   	mass: 8 lbs
Jerry - 	height: 10cm 	mass: 45 g
Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
    BMI = mass / height ^2 = mass / (height * height)
Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s.
 Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. 
 Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).*/

//height and then mass
 var tom= [9, 8];

 var jerry= [10, 45];
var ans= null;


function BMI (height, mass){

    var BMI = mass / (height * height)
return BMI
}

var tomBMI=BMI(tom[0], tom[1])



var jerryBMI=BMI(jerry[0], jerry[1])



if (tomBMI>jerryBMI){
    ans= true;
    console.log("Is Tom’s BMI higher than Jerry’s? " + ans)
} else{
    ans= false;
    console.log("Is Tom’s BMI higher than Jerry’s? " + ans)
}