/*
Problem - 10

Find a book name from an array, then make a ternary statement. 
*/

let books =["Js Programming", "core programming", "JS - All you need to know", "OOP programming","concept of js"];



// console.log(books.includes("core programming"));

//Ternary

let booksIncludes = books.includes("Js Programming") ? "Available" : "No books in this shelf";

console.log(booksIncludes);