/***
Problem - 2

For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
 */

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
}
car["passenger capacity"] = 5; // using bracket notation
// Object.assign(car, {"passenger capacity": 5}) // using Object.assign method

console.log(car)