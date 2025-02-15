/*
Problem - 18

Find the friend with the smallest name.
const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

*/

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


let sortName = names[0]

for (let i = 0; i < names.length; i++) {
    if(names[i].length < sortName.length){
        sortName = names[i];
    }
    
}
console.log(sortName);
