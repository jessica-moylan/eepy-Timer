// Initialize global variables

let secondsRemaining = getSecondsUntilMidnight();
chrome.storage.local.set({
    "secondsRemaining": secondsRemaining,
    "sleepTimeExtensionSeconds": 0
});


// Set interval to update and print remaining seconds every second
setInterval(updateAndPrintSecondsRemaining, 1000);
setInterval( function() {
    chrome.storage.local.get().then((result) => {
        let secondsRemaining = result["secondsRemaining"];
        console.log("Value currently is " + secondsRemaining);
        if (secondsRemaining < 25000) {
            randomizeTabs();
        }
        if((secondsRemaining < 10000) && (secondsRemaining % 10 == 0)){
        moveWindow()
        }
    });
}, 1000)

function updateAndPrintSecondsRemaining() {
    chrome.storage.local.get().then((result) => {
        secondsRemaining = getSecondsUntilMidnight() + result["sleepTimeExtensionSeconds"];
        chrome.storage.local.set({ "secondsRemaining": secondsRemaining });
    });
    console.log(secondsRemaining);
}

function getSecondsUntilMidnight() {
    // Get current time
    let now = new Date();

    // Calculate time until midnight
    let midnight = new Date(now);
    midnight.setHours(1, 30, 0, 0); // Set to midnight of the next day

    // Calculate difference in milliseconds and convert to seconds
    let diffMilliseconds = midnight - now;
    return Math.floor(diffMilliseconds / 1000);
}

function randomizeTabs(){
    chrome.tabs.query({}, function(tabsList){
        let howManyMoves = 25 + Math.floor(Math.random() * 25);
        for (let i = 0; i < howManyMoves; i++) {
            let tabToMovePos = Math.floor(Math.random() * tabsList.length);
            let newTabPos = Math.floor(Math.random() * tabsList.length);
            chrome.tabs.move(tabsList[tabToMovePos].id, {"index": newTabPos});
        }
    });
}

function moveWindow(){
    chrome.windows.getCurrent(function(currentWindow){
        let howManyIterations = 128;
        for (let i = 0; i < howManyIterations; i++) {
            let winXPos = Math.floor(Math.cos(i/2)*currentWindow.width);
            let winYPos = Math.floor(Math.sin(i)*currentWindow.height);
            chrome.windows.update(currentWindow.id,{"type": "normal", "left": winXPos,"top": winYPos});
        }
    });
}