/***
Problem - 5

Find all the even numbers from 78 to 98.

 */

//method - 1
for (let i = 78; i <= 98; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//method - 2
for (let j = 78; j <= 98; j+=2) {
        console.log(j);
}