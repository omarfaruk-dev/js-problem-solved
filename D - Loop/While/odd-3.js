/***
Problem - 4

Display sum of all the even numbers from 51 to 85.

 */

//method - 1

let i = 51;
let sum = 0;

while (i <= 85) {
    if (i % 2 === 0) {
        sum = sum + i;
    }
    i++;

} console.log(sum);


//method - 2

let j = 52;
let add = 0;

while (j <= 85) {
    add = add + j;
    j+=2;
}
console.log(add);