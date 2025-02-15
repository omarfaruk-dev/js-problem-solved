/*
Problem - 19

Find the friend with the largest name.
const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

*/

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

let largeName = names[0];

for(let i=0; i<names.length; i++){
    if (names[i].length > largeName.length){
        largeName = names[i]
    }
}

console.log(largeName);
