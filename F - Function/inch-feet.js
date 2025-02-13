/**
 * Problem - 6
 * Inch to feet calculator
 */

//method - 1

function inchToFeet (inch){
    const feet = inch / 12;
    return feet;
}
// const height = inchToFeet(75);
// console.log(height);

// Alternative - Advanced

function inchToFeet (inch){
    const feetFraction = inch / 12;
    const feet = parseInt(feetFraction);
    const inchRemaining = inch % 12;

    const result = `${feet} ft ${inchRemaining} inch.`
    
    return result;
}

const height = inchToFeet(75);

console.log(height);