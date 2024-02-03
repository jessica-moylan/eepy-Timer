// Initialize global variables
let secondsRemaining = getSecondsUntilMidnight();

// Set interval to update and print remaining seconds every second
setInterval(updateAndPrintSecondsRemaining, 1000);

function updateAndPrintSecondsRemaining() {
    // Decrement secondsRemaining
    secondsRemaining--;

    // Print remaining seconds
    console.log("Seconds until midnight:", secondsRemaining);

    // Resync with the internal clock every 60 seconds
    if (secondsRemaining <= 0 || secondsRemaining % 60 === 0) {
        secondsRemaining = getSecondsUntilMidnight();
    }
}

function getSecondsUntilMidnight() {
    // Get current time
    let now = new Date();

    // Calculate time until midnight
    let midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0); // Set to midnight of the next day

    // Calculate difference in milliseconds and convert to seconds
    let diffMilliseconds = midnight - now;
    return Math.floor(diffMilliseconds / 1000);
}