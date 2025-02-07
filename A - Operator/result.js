/*
Problem - 2

Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.
*/ 

let mathematics = 75.25;
    biology = 65;
    chemistry = 80;
    physics = 35.45;
    bangla = 99.50;

let totalMarks = mathematics + biology + chemistry + physics + bangla;
let averageMarks = totalMarks / 5;

console.log(averageMarks.toFixed(2));