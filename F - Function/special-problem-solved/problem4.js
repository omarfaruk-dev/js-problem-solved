function validProposal(person1, person2) {
    if (typeof person1 !== "object" || typeof person2 !== "object") {
        return "Invalid";
    }
    let person1Age = person1.age;
    let person2Age = person2.age;
    let ageDifference = Math.abs(person1Age - person2Age);

    if (person1.gender !== person2.gender && ageDifference <= 7) {
        return true;
    }
    else {
        return false;
    }

}

const person1 = { name: "mitu", gender: "male", age: 32 }
const person2 = "Mizan"


let result = validProposal(person1, person2)

console.log(result);



