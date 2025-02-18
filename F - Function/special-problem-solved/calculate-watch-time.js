function calculateWatchTime(times) {

    let totalTime = 0;
    for (const time of times) {
        totalTime = totalTime + time;
        if (typeof time !== "number") {
            return "Invalid";
        }
    }
    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor((totalTime % 3600) / 60);
    const seconds = totalTime % 60;
    return { hour: hours, minute: minutes, second: seconds };
}
const result = calculateWatchTime([100, 3800, "90" ]
);
console.log(result);