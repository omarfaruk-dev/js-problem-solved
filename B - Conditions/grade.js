/*
Problem - 3


Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A+: 80-100
    A:  70-79
    A-: 60-69
    B: 50-59
    C: 40-49
    D: 33 -39
    F: 0-32

*/ 

let marks = 79;

if (marks >=80 && marks <=100) {
    console.log("You got A+");
}
else if (marks >=70 && marks <=79) {
    console.log("You got A");
}
else if (marks >=60 && marks <=69) {
    console.log("You got A-");
}
else if (marks >=50 && marks <=59) {
    console.log("You got B");
}
else if (marks >=40 && marks <=49) {
    console.log("You got C");
}
else if (marks >=33 && marks <=39) {
    console.log("You got D");
}
else if (marks >=0 && marks <=32) {
    console.log("You got F");
}
else {
    console.log("You are not a student");
}



