/*
### Task-5 
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`

*/

function odd_event(n){
    return (n%2 == 0)? "Even" : "Odd";
}

const number1 = 4;
const number2 = 5;
console.log(odd_event(number1));
console.log(odd_event(number2));