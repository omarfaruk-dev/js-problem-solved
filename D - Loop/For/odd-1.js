/***
Problem - 2

Find all the odd numbers from 61 to 100.

 */

for (let i = 61; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

//method-2
for (let j = 61; j <= 100; j+=2) {
        console.log(j);
}