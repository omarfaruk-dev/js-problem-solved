/**
 * Problem - 9
 * Calculate average of Odd numbers from an array using function.
 */

function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            odds.push(number);
        }
    }
    // now need to sum of odds numbers
    let sum = 0;
    for (const number of odds) {
        sum = sum + number;

    }
    const count = odds.length;
    const avg = sum / count;
    return avg;
}


const numbers = [5, 7, 8, 12, 16];
const avg = oddAverage(numbers);
console.log("Average number is: ", avg);