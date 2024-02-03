let secondsRemaining = Number.MAX_VALUE;

// Placeholder to test code
let bedtime = Math.round(new Date("2024/02/03 23:00:00").getTime()/1000)

// Define a function to get the current time
function getCurrentTime() {
   return Date.now() / 1000;  // Return Unix time in seconds
}

// Define a function to update the time every second
function updateTime() {
    for (let i= 0; i < 60; i++) {
        setInterval( function() {
                secondsRemaining--;
            }
        )
    }
    secondsRemaining = bedtime - getCurrentTime();
}

setInterval( function() {
    updateTime()
    console.log(secondsRemaining)
}, 1000)
