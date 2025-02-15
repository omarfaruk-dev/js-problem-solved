/***
Problem - 3

Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
 */

const student = {
    name: "Asraf Hakimi",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

let physicsMarks = student.physics.marks; //dot notation
let physicsMark = student["physics"]["marks"];  //bracket notation

console.log(physicsMarks);
console.log(physicsMark);


