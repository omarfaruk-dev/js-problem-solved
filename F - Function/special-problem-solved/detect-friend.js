function  isBestFriend( f1 , f2 ) {
    if(typeof f1 !== "object" || typeof f2 !== "object"){
        return "Invalid";
    }


}

const f1 = { name: "hashem", roll: 1, bestFriend: 2 };
const f2 = { name: "kashem", roll: 2, bestFriend: 1 };

let result = isBestFriend(f1, f2);

console.log(result);
