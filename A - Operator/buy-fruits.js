/*
Problem - 1

You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.
*/ 
let myMoney = 1000;
let orangePrice = 300;
let applePrice = 400;
let fruitsPrice = orangePrice + applePrice;

let returnMoney = myMoney - fruitsPrice;

console.log(returnMoney);
