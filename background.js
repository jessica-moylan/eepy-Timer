let timeRemaining = Number.MAX_VALUE;
let bedtime = Math.round(new Date("2023/02/03 23:00:00").getTime()/1000)

// Define a function to get the current time
function getCurrentTime() {
   return Date.now() / 1000;  // Return Unix time in seconds
}

// Define a function to update the time every second
function updateTime() {
    for (let i= 0; i < 60; i++) {
        setInterval( function() {
                timeRemaining--;
            }
        )
    }
    timeRemaining = bedtime - getCurrentTime();
}

// Call the updateTime function when the window loads
/*
window.onload = function() {
    updateTime;
}
*/