/***
Problem - 3

Display sum of all the odd numbers from 91 to 129.

 */

//method - 1

let sum = 0;
for (i = 91; i <= 129; i++) {
    if (i % 2 === 1) {
        sum = sum + i;

    }
} console.log("The total number is: ", sum);


//method - 2

// let odd = 0;
// for (j = 91; j <= 129; j += 2) {
//     odd = odd + j;
// } console.log("The total number is: ", odd);