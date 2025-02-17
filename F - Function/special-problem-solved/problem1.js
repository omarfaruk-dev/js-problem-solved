function calculateVAT(price) {
    if (typeof price !== "number" || price < 0) {
        return "Invalid";
    }
    else {
        let productVat = price * 7.5 / 100;
        return productVat;
    }
}

let result = calculateVAT(500);
console.log(result);