// Initialize global variables


let secondsRemaining = getSecondsUntilMidnight();
chrome.storage.local.set({
    "secondsRemaining": secondsRemaining,
    "sleepTimeExtensionSeconds": 0
});

// Set interval to update and print remaining seconds every second
setInterval(updateAndPrintSecondsRemaining, 1000);

setInterval(() => {
    chrome.storage.local.get(["secondsRemaining", "sleepTimeExtensionSeconds"], (result) => {
        let secondsRemaining = result["secondsRemaining"];
        let pause = Math.floor(Math.random() * (175+1-1) + 1)
        console.log("Value currently is " + secondsRemaining);
        if(secondsRemaining > 25000){
            if(pause == 1){
                giveTips1();
                if(secondsRemaining < 15000){
                    giveTips2() 
                }else{
                    giveTips3()
                }
            }
        } else if(secondsRemaining > 800){
            randomizeTabs()
        } else if (secondsRemaining > 300){
            moveWindow()
        }else{
            removeTabs()
        }
    });
}, 1000)


function giveTips1(){
    // Array of tip options (file names or paths to HTML files)
    const tips = [
        "HowToStayHealthy/drinkWater1.html",
        "HowToStayHealthy/excersise.html",
        "HowToStayHealthy/getYourSleep1.html",
        "HowToStayHealthy/happy.html",
        "HowToStayHealthy/helloFriends.html",
        "HowToStayHealthy/studyBreak.html",
        "HowToStayHealthy/taxes.html"
    ];

    // Randomly select a tip
    const randomIndex = Math.floor(Math.random() * tips.length);
    const selectedTip = tips[randomIndex];

    // Create a new window with the selected tip as the content
    chrome.windows.create({
        type: "popup",
        url: selectedTip,
        width: 310,
        height: 430
    });
}
function giveTips2(){
    // Array of tip options (file names or paths to HTML files)
    const tips = [
        "HowToStayHealthy/drinkWater1.html",
        "HowToStayHealthy/drinkWater2.html",
        "HowToStayHealthy/drinkWater2.html",
        "HowToStayHealthy/excersise.html",
        "HowToStayHealthy/getYourSleep1.html",
        "HowToStayHealthy/getYourSleep2.html",
        "HowToStayHealthy/getYourSleep2.html",
        "HowToStayHealthy/happy.html",
        "HowToStayHealthy/helloFriends.html",
        "HowToStayHealthy/studyBreak.html",
        "HowToStayHealthy/taxes.html"
    ];

    // Randomly select a tip
    const randomIndex = Math.floor(Math.random() * tips.length);
    const selectedTip = tips[randomIndex];

    // Create a new window with the selected tip as the content
    chrome.windows.create({
        type: "popup",
        url: selectedTip,
        width: 310,
        height: 430
    });
}

function giveTips3(){
    // Array of tip options (file names or paths to HTML files)
    const tips = [
        "HowToStayHealthy/drinkWater2.html",
        "HowToStayHealthy/drinkWater3.html",
        "HowToStayHealthy/drinkWater3.html",
        "HowToStayHealthy/excersise.html",
        "HowToStayHealthy/getYourSleep2.html",
        "HowToStayHealthy/getYourSleep3.html",
        "HowToStayHealthy/getYourSleep3.html",
        "HowToStayHealthy/happy.html",
        "HowToStayHealthy/studyBreak.html",
        "HowToStayHealthy/taxes.html"
    ];

    // Randomly select a tip
    const randomIndex = Math.floor(Math.random() * tips.length);
    const selectedTip = tips[randomIndex];

    // Create a new window with the selected tip as the content
    chrome.windows.create({
        type: "popup",
        url: selectedTip,
        width: 310,
        height: 430
    });
}

function updateAndPrintSecondsRemaining() {
    chrome.storage.local.get(["sleepTimeExtensionSeconds"], (result) => {
        secondsRemaining = getSecondsUntilMidnight() + result["sleepTimeExtensionSeconds"];
        chrome.storage.local.set({ "secondsRemaining": secondsRemaining });
        console.log(secondsRemaining);
    });
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
<<<<<<< HEAD
    
            let height = 1080;
            let width = 1920;
        
            let howManyIterations = Math.floor(Math.random()*32)+128;
            
            for (let i = 0; i < howManyIterations; i++) {
                let winXPos = (Math.floor((Math.cos(i/8)+1)*width/8));
                let winYPos = (Math.floor((Math.sin(i/4)+1)*height/8));
                setTimeout(windowLoop(winXPos,winYPos),100);
            }
=======
    let height = 1080;
    let width = 1920;
>>>>>>> 1f5e1fb9a36d79facf1d79ada70ca222aae951a3

    let howManyIterations = 128;
    
    for (let i = 0; i < howManyIterations; i++) {
        let winXPos = (Math.floor((Math.cos(i/8)+1)*width/8));
        let winYPos = (Math.floor((Math.sin(i/4)+1)*height/8));
        setTimeout(windowLoop(winXPos,winYPos),100);
    }
}

function windowLoop(winXPos, winYPos){
    chrome.windows.getCurrent(function(currentWindow){ 
        chrome.windows.update(currentWindow.id,{"state": "normal", "left": winXPos,"top": winYPos, "width":960, "height":540, "focused" : true})
    });
}