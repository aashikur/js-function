// write a function to write a all number sum of array

function sumNum(num){
    let sum = 0; 
    for(const i of num){
        sum+=i;
    }
    return sum;
}


const arr = [12,33,45,66];

const result = sumNum(arr);
console.log("sum of the array: ", result);