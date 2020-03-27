var input= parseInt(prompt("Enter a number from 1-12"));

var month= null;
if (input>= 1 && input<=12){
switch (input){
    case 1: 
    month="Januray";
    console.log(input + " is the month of " + month);
    break;

    case 2: 
    month="Feburay";
    console.log(input + " is the month of " + month);
    break;

    case 3: 
    month="March";
    console.log(input + " is the month of " + month);
    break;

    case 4: 
    month="April";
    console.log(input + " is the month of " + month);
    break;

    case 5: 
    month="May";
    console.log(input + " is the month of " + month);
    break;

    case 6: 
    month="June";
    console.log(input + " is the month of " + month);
    break;

    case 7: 
    month="July";
    console.log(input + " is the month of " + month);
    break;

    case 8: 
    month="August";
    console.log(input + " is the month of " + month);
    break;
    
    case 9: 
    month="September";
    console.log(input + " is the month of " + month);
    break;

    case 10: 
    month="October";
    console.log(input + " is the month of " + month);
    break;

    case 11: 
    month="November";
    console.log(input + " is the month of " + month);
    break;

    case 12: 
    month="December";
    console.log(input + " is the month of " + month);
    break;

}} else {
    console.log("You did not follow directions, and have entered an invalid number")
}

