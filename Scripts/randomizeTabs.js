chrome.storage.local.get().then((result) => {
    let secondsRemaining = result["secondsRemaining"];
    console.log("Value currently is " + secondsRemaining);
    if (secondsRemaining < 25000) {
        randomizeTabs();
    }
});

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