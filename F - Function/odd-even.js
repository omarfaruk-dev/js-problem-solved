/**
 * Problem - 5
 * Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return *   Even. * If odd return Odd
 * 
 */


function oddEven(number) {

    if (number % 2 === 0) {
        ;
        return "Even";
    }
    else {
        return "Odd";
    }
   

}
let output = oddEven(10);

console.log(output);