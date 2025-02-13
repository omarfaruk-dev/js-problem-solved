/**
 * Problem - 4
 * Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 * 
 */

function count_zero(string_num) {
    let count = 0;
    for (const num of string_num) {
        if (num === 0) {
            count++;
        }
    }
    return count;
}

let str = count_zero("1011010011");
console.log(count);