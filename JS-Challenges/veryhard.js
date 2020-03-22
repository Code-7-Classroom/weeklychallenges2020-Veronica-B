function add(num1, num2){
    return num1+num2;  
}

function subtract(num1, num2){
    return num1-num2;   
}

function multiply(num1, num2){
    return  num1*num2; 
}

function divide(num1, num2){
    return  num1/num2;
}



var num1=  parseInt(prompt("Enter your first number"));
var operator= prompt("Enter an operator");
var num2=  parseInt(prompt("Enter your second number"));
var ans



switch (operator){
    case "+":
    ans=add(num1, num2);
    console.log(num1 + "+" + num2 + "=" + ans);
    break;

    case "-":
    ans=subtract(num1, num2);
    console.log(num1 + "-" + num2 + "=" + ans);
    break;

    case "*":
    ans=multiply(num1, num2);
    console.log(num1 + "*" + num2 + "=" + ans);
    break;

    case "/":
    ans=divide(num1, num2);
    console.log(num1 + "/" + num2 + "=" + ans);
    break;
}

