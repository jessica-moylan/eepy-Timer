function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;

    let formattedHours = String(hours).padStart(2, '0');
    let formattedMinutes = String(minutes).padStart(2, '0');
    let formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;
}

let timerElement = document.querySelector(".time1");

setInterval( function() {
    chrome.storage.local.get().then((result) => {
        let seconds = result["secondsRemaining"];
        timerElement.innerHTML = formatTime(seconds);
    })
}, 1000)