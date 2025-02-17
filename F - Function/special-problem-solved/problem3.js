// function willSuccess(marks) {

//     // let passedSubject = marks[0];
//     for (let mark of marks) {
//         if(mark >= 50){
//             passedSubject.push(marks[i]);
//         }

//     }
//     return true;
// }

// const result = willSuccess([55, 75, 41, 33, 0, 87, 91, 30]);
// console.log(result);


function willSuccess(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let totalPass = 0;
    let totalFail = 0;

    for (const mark of marks) {

        if (typeof mark !== "number") {
            return "Invalid";
        }

        if (mark >= 50) {
            totalPass++;
        } else {
            totalFail++;
        }
    }

    return totalPass > totalFail;
}

let result = willSuccess([5, 50, 80]);

console.log(result);