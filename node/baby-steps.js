
let total=0;

let addNum = (input)=>{
    
    for (let i=2; i<=input.length-1;i++){
        total=total+parseInt(input[i]);
    }
return total;
}

console.log(addNum(process.argv))

