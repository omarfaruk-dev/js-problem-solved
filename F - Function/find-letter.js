/**
 * Problem - 12
 * Find H from all words.
 */



function findHena(list) {
    let temp = [];
    
    for (let i = 0; i < list.length; i++) {
        let partriName = list[i];
        if (partriName.includes("h")) {
            temp.push(partriName);
        }
        
    }
    return temp;
}



const patriList = ["rahima", "borsha", "arjina", "sarjina", "hena"];

const result = findHena(patriList);

console.log(result);