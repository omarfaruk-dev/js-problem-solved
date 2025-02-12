/***
Problem - 8

FInd the max number from this array using for loop
const numbers = [12, 45, 78, 23, 89, 56, 99, 34];

 */
const numbers = [12, 45, 78, 23, 89, 56, 99, 999];

// let maxNumber = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > maxNumber) {
//         maxNumber = numbers[i];
//     }
// }
// console.log(maxNumber);


//alternative method
console.log(Math.max(...numbers)) // max number
console.log(Math.min(...numbers)) // min number