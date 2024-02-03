// Initialize global variables

let secondsRemaining = getSecondsUntilMidnight();
chrome.storage.local.set({ "secondsRemaining": secondsRemaining }).then(() => {
    console.log("Value is set");
});

// Set interval to update and print remaining seconds every second
setInterval(updateAndPrintSecondsRemaining, 1000);

function updateAndPrintSecondsRemaining() {
    // Decrement secondsRemaining
    secondsRemaining--;

    // Print remaining seconds.
    // Change this to do something else as we progress.
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


//define tab moving function
function moveRandomTab(){
    chrome.tabs.query({},function(tabs){
        tabPos = Math.floor(Math.random()*tabs.length());
        newTabPos = Math.floor(Math.random()*tabs.length());
        moveTab(tabs[tabPos],newTabPos);
    });
}


//Code taken from https://github.com/mohnish/rearrange-tabs/blob/main/rearrange.js

function moveTab(id, pos) {
    chrome.tabs.move(id, { index: pos });
}
  
function moveTabs(tabs) {
    for (let [id, pos] of tabs) {
      moveTab(id, pos);
    }
}


