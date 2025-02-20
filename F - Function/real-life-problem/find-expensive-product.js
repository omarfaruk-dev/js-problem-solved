/**
 * Problem - 1
* Find height price product form object that's containing with array.
 * 
 */

const gadgets = [
    { id: 1, name: 'Samsung Z Fold', price: 1200000 },
    { id: 2, name: 'iPhone 15 Pro', price: 150000 },
    { id: 3, name: 'Sony Xperia Z', price: 30000 },
    { id: 4, name: 'HP Laptop', price: 85000 },
    { id: 5, name: 'Apple MacBook Pro', price: 220000 }
];


function expensiveProduct(products){
    let heightRatedProduct = products[0];
    for (const product of products) {
        if(product.price > heightRatedProduct.price ){
            heightRatedProduct = product;
        }
    }
    return heightRatedProduct;
}


const result = expensiveProduct(gadgets);
console.log(result);