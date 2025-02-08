/*
Problem - 14

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
*/

let numbers = 12;
let personName = "Amar";
let bookShelf = [];
let isRich = true;
let fruitsBox = ["Banana", "Apple", "Orange"];


console.log(Array.isArray(numbers));
console.log(Array.isArray(personName));
console.log(Array.isArray(bookShelf));
console.log(Array.isArray(isRich));