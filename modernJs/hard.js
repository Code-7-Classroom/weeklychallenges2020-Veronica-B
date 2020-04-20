    // Do Stuff Here
//     HARD: Create two buttons, one that when clicked turns the background of the body red. The other, when clicked, 
//     turns the body's background color white. Each of the background colors should be defined as class styles and when the buttons 
//     are pushed the body's classList is updated to include the correct class for the background. 
// Create a single function that takes an input className and updates the body's classList to ONLY include that className
let background=document.getElementById("background");
let red=document.getElementById("red");
let white=document.getElementById("white");

console.log(background.classList);
background.classList.add('bg-white','bg-red');
red.addEventListener('click',()=> background.classList.remove('bg-white'));

white.addEventListener('click',()=>background.classList.add('bg-white'));
