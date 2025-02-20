/**
 * Problem - 2
* Find specific product name without object. 
 * 
 */


const gadgets = [
    { id: 1, name: 'Samsung Z Fold', price: 120000 },
    { id: 2, name: 'iPhone 15 Pro', price: 150000 },
    { id: 3, name: 'Sony Xperia Z', price: 30000 },
    { id: 4, name: 'HP Laptop elitbook', price: 85000 },
    { id: 5, name: 'HP Laptop', price: 85000 },
    { id: 6, name: 'Apple MacBook Pro', price: 220000 }
];

function searchProduct(products, search) {
    const filteredProducts = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            filteredProducts.push(product);
        }
    }
    
    const productNames = [];
    for (const product of filteredProducts) {
        productNames.push(product.name);
    }
    
    return productNames;
}

const result = searchProduct(gadgets, 'mac');
console.log(result);
