/**
 * Problem - 10
 * Calculate average of Even numbers from an array using function.
 */
function evenAverage(numbers){
    evens = [];
    for (const number of numbers) {
        if(number % 2 ===0){
            evens.push(number);
        }
    }
    let sum = 0;
    for (const number of evens) {
        sum = sum+number;
    }
    const count = evens.length;
    const avg = sum / count;
    
    return avg;
}


const numbers = [5, 7, 8, 12, 16];
const avg = evenAverage(numbers);
console.log("Average number is: ", avg);