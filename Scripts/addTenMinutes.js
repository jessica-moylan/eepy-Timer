function addTenMinutes() {
    chrome.storage.local.get().then((result) => {
        let currentExtensionSeconds = result["sleepTimeExtensionSeconds"];
        let newExtensionSeconds = currentExtensionSeconds + 600;
        chrome.storage.local.set({"sleepTimeExtensionSeconds": newExtensionSeconds});
    })
    console.log("Added 10 minutes to sleep time");
}

document.getElementById("addTenMinutes").addEventListener("click", addTenMinutes);