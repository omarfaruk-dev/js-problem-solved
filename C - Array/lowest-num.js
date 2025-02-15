/*
Problem - 16

Find the lowest number in the array below.
const numbers = [167, 190, 120, 165, 137];

*/
 // Solution - 1 
const numbers = [167, 190, 120, 165, 137];

// let lowestNum = numbers[0];

// for(let i = 0; i<numbers.length;i++){
//    let element = numbers[i]
//    element = lowestNum[i]
//    if(lowestNum < element[i]){
//     lowestNum.push(element);
//    }
// }

// console.log(lowestNum);


 // Solution - 2

 let minNumber = numbers[0];

 for (i = 0; i<numbers.length; i++){
    if(numbers[i] < minNumber){
        minNumber = numbers[i]
    }
 }
 console.log("The lowest number is: ", minNumber);