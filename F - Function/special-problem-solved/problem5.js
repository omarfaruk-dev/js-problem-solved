function  calculateSleepTime(times) {


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
 
return {hour: hour, minute: minute, second: second};


}
const result = calculateSleepTime([1000, 2000, 725]);
console.log(result);