// VERY HARD: Write a function that takes in a string and outputs the *first* occurrence of a character that does 
// not repeat itself in that string. Output the first character in a string that is unique.
// Input: “the quick brown fox jumps over the calm kitten quietly”  Output: “b”
// Input: “this hat is the greatest!”  Output: “g”
// Input: “what a wonderful day it has been!”  Output: “o”

let input= 'the quick brown fox jumps over the calm kitten quietly';
//Make into a array
input=input.split("");
//returns array with each letter as it's own index 
// console.log(input);




let char=input[0];

input.shift(0)

let noRepeat= input=>{
    //e will be the second letter of the sentence
    for(let e=0; e<=input.length-1;e++){
        if (char===input[e]){
            //this is to remove the other repeats in the sentence, so if its not the same as char it will stay,
            // but letters the same as char is filtered out
            input=input.filter(letter=>!(letter===char))
            //goes to the next letter of the sentnce
            char=input[0];
            //removes the first letter of the array, so it won't be recounted in the loop
            input.shift(0);
            //starts the loop over 
            e=0;
    }
}
console.log(char);
}


noRepeat(input);