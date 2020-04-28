const fs = require('fs');

let buf=fs.readFileSync(process.argv[2]);

let str = buf.toString();
str=str.split('\n');
let total=0;


for (let i=0; i<=str.length-1;i++){
    total++;
}
console.log(total-1)