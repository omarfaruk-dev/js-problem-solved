/*
Problem - 6

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk


*/ 

const ticketPrice = 600;
let age = 20;
let isStudent = true;

if (age < 10) {
    console.log("Free")
}
else if (isStudent) {
    console.log(ticketPrice * 0.5) // 50% discount
}
else if (age >= 60){
    console.log(ticketPrice * 0.85) // 85% discount
}
else {
    console.log("Ticket price is: " + ticketPrice);
}