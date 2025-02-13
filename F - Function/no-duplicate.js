/**
 * Problem - 11
 * Remove duplicate data form an array and show unique data only 
 */


const players = ['mushfiq', 'ashraful', 'shuvo', 'mahmudullah','mushfiq', 'ashraful' ];


function noDuplicate(array){
    const unique = [];
    for (const item of array) {
        if(unique.includes(item)===false){
            unique.push(item);
        }
    }
    return unique;
}

const playerList = noDuplicate(players);
console.log(playerList);