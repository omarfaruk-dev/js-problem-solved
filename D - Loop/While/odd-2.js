/***
Problem - 3

Display sum of all the odd numbers from 91 to 129.

 */

//method - 1

let i = 91;
let sum = 0;
while (i <= 129) {
    if (i % 2 === 1) {
        sum = sum + i;
    }
    i++
} 
console.log("The total number is: ", sum);


//method - 2

let j = 91;
let odd = 0;

while (j <= 129) {
    odd = odd + j;
    j += 2;
    
}
console.log("The total number is: ", odd);