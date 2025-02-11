/*
Problem - 1

Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']

*/

// Method 1: very easy
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

console.log(colors.reverse());


// Method 1: using for of

// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// const reverseColor = [];

// for (const color of colors) {
//         reverseColor.unshift(color);
// }
// console.log(reverseColor);

// Method 2: using for loop

// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// const reverseColor =[];

// for (let i =0; i<colors.length; i++){
//     const element = colors[i];
//     reverseColor.unshift(element);
// }
// console.log(reverseColor);


// Method 3: using for loop Decrement


const reverseColor = [];
for(let i = colors.length -1;i>=0; i--){
    const element = colors[i];
    reverseColor.push(element);
}   
console.log(reverseColor);