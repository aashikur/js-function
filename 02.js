// create a funciton that will return only Even num 
// create a funciton that will return only sum of odd num 

// Function Return only Even Num
function onlyEven(n){
    const m = [];
    for(const i of n){
        if(i%2 === 0) {
            m.push(i);
        }
    }
    return m;
}

// Function that only return Sum of Odd
function sumOdd(n){
    let s = 0;
    for(const i of n){
        if (i%2 !== 0){
            s+=i;
        }
    }
    return s;
}

const array = [22,33,22,4,5,7,2];
console.log(onlyEven(array));
console.log(sumOdd(array));

