/**
 * Problem - 3
* Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 * 
 */

function make_avg(inputNumber) {
    let sum = 0;
    let len = inputNumber.length;
    for (const number of inputNumber) {
        sum = (sum + number) / len;
    }
    console.log(sum, len);
    return len;
    // const numOfElement = inputNumber.length;
   
}

let inputInteger = make_avg([2, 4, 9, 12, 25]);

// console.log(inputInteger);