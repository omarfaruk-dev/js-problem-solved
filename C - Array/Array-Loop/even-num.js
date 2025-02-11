/*
Problem - 2

Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

*/

// using for loop

const numbers = [12, 98, 5, 41, 23, 78, 46];

// let evenNumber = [];
// let oddNumber = [];

// for (i = 0; i < numbers.length; i++) {
//     const newNumber = numbers[i];
//     if (newNumber % 2 == 0) {  // even number
//         evenNumber.push(newNumber);
//     }
//     else {
//         oddNumber.push(newNumber); //odd number
//     }
// }
// console.log(oddNumber);


//using while loop

let evenNumber = [];
let oddNumber = [];

let i = 0;

while (i < numbers.length) {
    const newNumber = numbers[i];
    if (newNumber % 2 == 0) {  // even number
        evenNumber.push(newNumber);
    }
    else {
        oddNumber.push(newNumber); //odd number
    }
    i++;
}
console.log("Even Number is: ", evenNumber);
console.log("Odd Number is: ", oddNumber);


