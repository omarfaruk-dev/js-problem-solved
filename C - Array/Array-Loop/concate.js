/*
Problem - 3

Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'

*/

var names = ['Tom', 'Tim', 'Tin', 'Tik']

let together = "";

for (const name of names) {
   together += name + "";
}

// console.log('"' +together+'"');
console.log(`"${together}"`);