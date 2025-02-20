/**
 * Problem - 2
* Find those products that price starts form 10000 to 30000
 * 
 */

const gadgets = [
    { id: 1, name: 'Samsung Z Fold', price: 1200000 },
    { id: 2, name: 'iPhone 15 Pro', price: 15000 },
    { id: 3, name: 'Sony Xperia Z', price: 30000 },
    { id: 4, name: 'HP Laptop', price: 85000 },
    { id: 5, name: 'Apple MacBook Pro', price: 220000 }
];


function priceRange(products){
    let lowestAndHeight = [];
    for (const product of products) {
        if(product.price >=10000 && product.price <=30000 ){
            lowestAndHeight.push(product);
        }
    }
    return lowestAndHeight;
}


const result = priceRange(gadgets);
console.log(result);