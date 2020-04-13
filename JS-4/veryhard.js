// VERY HARD: You are given coins of different denominations and a total amount 
// of money amount. Write a function to compute the fewest number of coins that you 
// need to make up that amount. If that amount of money cannot be made up by any 
// combination of the coins, return -1.

// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  
// Use functions, arrays and logical operators.  Do not have anyone give you the 
// answer or solve this problem for you. 
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Note: You may assume that you have an infinite number of each kind of coin.


let coinsArray=[7,3,5];
const target=8;
let reset=0;
let amount=target;
let numofcoins=0;
let i=0;

coinsArray.sort(function(a, b){return b-a})
//the array will now be descending order no matter what numbers are inserted

//I want to subtract -5 to the amount
let sentence= (numofcoins, coinsArrays, t)=>{
    console.log(`i ran ${numofcoins} with ${coinsArrays[t]}`)
}


let coinsamount= (coinsArrays, numofcoins)=> {
    for (let i=0; i<=coinsArrays.length-1;i++)
        if (amount-coinsArrays[i]>=0 && amount!== -1){
            while (amount-coinsArrays[i]>=0 && amount!== -1){
           amount= amount-coinsArrays[i];
           numofcoins++;
           if (amount===0){
           sentence(numofcoins, coinsArrays,i);
           }
            }
            if (amount>0) { 
                numofcoins=0;
                amount=target;
                for (let e=1; e<=coinsArrays.length-1;e++)
                if (amount-coinsArrays[e]>=0 && amount!== -1){
                    while (amount-coinsArrays[e]>=0 && amount!== -1){
                   amount= amount-coinsArrays[e];
                   numofcoins++;
                   if (amount===0){
                    sentence(numofcoins, coinsArrays,e);
                    }
                }
                if (amount>0) { 
                    numofcoins=0;
                    amount=target;
                    for (let p=2; p<=coinsArrays.length-1;p++)
                        if (amount-coinsArrays[p]>=0 && amount!== -1){
                            while (amount-coinsArrays[p]>=0 && amount!== -1){
                            amount= amount-coinsArrays[p];
                         numofcoins++;
                         if (amount===0){
                        sentence(numofcoins, coinsArrays,p);
                        }
                    }}}}
                }
                
            }
        }
     

// if (amount<0){
//     numofcoins=-1;
// }




coinsamount(coinsArray,numofcoins);