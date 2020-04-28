// MEDIUM: Create a node application that will read all of the planets in 
// the solar system from a text file and print them to the console.
// Text file: mercury, venus, earth, mars, jupiter, saturn ,uranus, neptune, 
// pluto (I still believe in you pluto) 

const fs = require('fs');

let buf=fs.readFileSync('planets.txt');

let str = buf.toString();
str=str.split('\n');

console.log(str)
