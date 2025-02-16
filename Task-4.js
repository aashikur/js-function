/*
### Task-4  
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/

function count_zero(s){
    let cnt = 0;
    const ss = s.split('');
    for(const i of ss){
        if(i == 0 || i == 1){
            if(i == 0) cnt++;
        }
        else {
            return NaN;
        }
    }
    return cnt;
}

const binary_string = "010101010101";

console.log(count_zero(binary_string));