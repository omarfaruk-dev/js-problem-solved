/*
Problem - 12

Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output

*/

let places = ["CoxBaazar", "Shajek", "Rangmati"];

places.push("Mohasthangarah"); // added one place
console.log(places);

places.push("Sylhet", "Rajshahi"); // added two places
console.log(places);

places.pop(); // remove last place

console.log(places);