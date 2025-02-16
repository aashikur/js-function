/*
### Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

*/

function operation(n){
    if(n%2 === 0)
        return n/2;
        return n*2;
}

const x = 55;
const y = 10;

console.log(operation(x));
console.log(operation(y));