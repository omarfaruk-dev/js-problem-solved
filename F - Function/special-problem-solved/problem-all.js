function calculateVAT(price) {
    if (typeof price !== "number" || price < 0) {
        return "Invalid";
    }
    else {
        let productVat = price * 7.5 / 100;
        return productVat;
    }
}



function validContact(contact) {

    if (contact.length === 11 && contact.startsWith("01" && !contact.includes(" "))) {
        return true;
    }
    else if (typeof contact !== "string") {
        return "Invalid";
    }
    else {
        return false;
    }
}


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



function validProposal(person1, person2) {
    if (typeof person1 !== "object" || typeof person2 !== "object") {
        return "Invalid";
    }
    let person1Age = person1.age;
    let person2Age = person2.age;
    let ageDifference = Math.abs(person1Age - person2Age);

    if (person1.gender !== person2.gender && ageDifference <= 7) {
        return true;
    }
    else {
        return false;
    }

}



function calculateSleepTime(times) {


    let totalTime = 0;
    for (const time of times) {
        totalTime = totalTime + time;
        if (typeof time !== "number") {
            return "Invalid";
        }
    }

    const hour = Math.floor(totalTime / 3600);
    const minute = Math.floor((totalTime % 3600) / 60);
    const second = totalTime % 60;

    return { hour: hour, minute: minute, second: second };


}