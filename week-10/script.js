// let me= {
//     name:`John Doe`,
//     sayHi:()=>{
//         console.log(me.name);
//     }
// }

// me.sayHi()

/*Write a function called "checkAge". Given a person's name and age, 
"checkAge" returns one of two messages:"Go home, {insert_name_here}!", 
if they are younger than 21."Welcome, {insert_name_here}!", if they are 21 or older
.Naturally, replace "{insert_name_here}" with the given name. :)
var output = checkAge('Adrian', 22);console.log(output); // --> 
'Welcome, Adrian!'*/ 

// const vero={
//     name='veronica',
//     age=18
// };
// checkAge(person)=>{
//     if (this.age< 21){
//         console.log(`go home, ${this.name}`)
//     } else{
//         console.log(`welcome, ${this.name}`)
//     }
// };
//  checkAge(vero)


let str="I am a hacker";
let count=0;
let countCharacter= (str) =>{
if (str.includes('a')){
    count++
}
}
countCharacter(str)