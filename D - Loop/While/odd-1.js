/***
Problem - 2

Find all the odd numbers from 61 to 100.

 */

//method-1
let i = 61;
let oddNum = 0;
while(i <=100){
    
    if(i % 2 ===1){
        console.log(i);
    }
    i++;
}
//---------------------------

//method-2
let j = 61;
let Num = 0;
while(j <=100){
    console.log(j);
    j+=2;
}