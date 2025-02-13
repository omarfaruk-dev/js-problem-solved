/**
 * Problem - 8
 * Leap year checker
 */

function isLeapYear (year){
    if(year % 4 ===0 && year % 100 !==0){
        return true;
    }
    else if(year % 100 ===0 && year % 400===0){
        return true;
    }
    else {
        return false;
    }
}

const checkLeapYear = isLeapYear(2400);

console.log(checkLeapYear);
