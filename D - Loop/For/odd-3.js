/***
Problem - 4

Display sum of all the even numbers from 51 to 85.

 */

//method - 1

let sum = 0;
for (i = 51; i <= 85; i++) {
    if (i % 2 === 0) {
        sum = sum + i;
    }
} console.log("The total number is: ", sum);


//method - 2

let even = 0;
for (j = 52; j <= 85; j +=2) {
    even = even + j;
}
console.log("The total number is: ", even);