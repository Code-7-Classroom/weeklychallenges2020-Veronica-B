const fs = require('fs');

let sum=0;
function Readthis(total){
    fs.readFile(process.argv[2], 'utf8', function readData(err,fileContents){
        str=fileContents;
        str=str.split('\n');

     for (let i=0; i<=str.length-1;i++){
        total++;
    }
   console.log(total)
    } );
}

Readthis(sum-1)
