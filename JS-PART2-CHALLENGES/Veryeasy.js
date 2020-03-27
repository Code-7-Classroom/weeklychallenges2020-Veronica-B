function min (num1, num2){
    if (num1>num2 ) {
      
        return num2;
    } else if (num2>num1){
       
        return num1;
    } else {
       num1="Both numbers are equaled to each other"
       return num1;
    }
}

var num1=3;
var num2=6;

ans=min(num1, num2)
console.log(ans)