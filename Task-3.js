/*
### Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

*/

function make_avg(a,s){
    let sum  = 0;
    for(const i of a){
        sum+=i;
    }
    
    
    return (Number.isInteger(sum/s)? sum/s : (sum/s).toFixed(2));
}

const array = [2,4,1];
console.log(make_avg(array,array.length));

// // Check if num is integer or Float
// let m = 3.3;
// let n = 3;

// console.log(m, Number.isInteger(m));

// Number.isInteger()
// () ? : ;
// toFixed();