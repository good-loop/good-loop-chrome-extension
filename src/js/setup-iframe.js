
import kvstore from './kvstore'; 

// For bookmarks API
const browser = chrome;

// Timeout setting to determine no internet
const iframeTimeout = 10000;

let iframeLoadFlag = false;

// Allow iframe contents to tell us when it's loaded correctly
window.addEventListener("message", event => {
    if (event.origin.includes('my.good-loop.com')
        && event.data === "iframeLoaded") {
        iframeLoadFlag = true;
        // console.log("iframeLoaded");
        // Hide all popups
        document.getElementById('loading').classList.remove('show');
        document.getElementById('no-internet').classList.remove('show');

    } else if (event.origin.includes('my.good-loop.com')
        && event.data === "give-me-bookmarks") {
            const targetWindow = document.getElementById("tab").contentWindow;
            browser.bookmarks.getChildren('1', (bookmarksList) => {
                targetWindow.postMessage(bookmarksList, tabUrl);
            });
    }
});

console.log("Can find URL in kvstore?", kvstore.get("tabUrl"));
const tabUrl = kvstore.get("tabUrl") || "https://my.good-loop.com/newtab.html";

// Inject iframe after bg element
document.addEventListener("DOMContentLoaded", e => {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('id', 'tab');
    iframe.setAttribute('class', 'iframe');
    iframe.setAttribute('sandbox', "allow-forms allow-scripts allow-top-navigation allow-same-origin allow-popups");
    iframe.setAttribute('allowtransparency', 'true');
    // url
    iframe.setAttribute('src', tabUrl);

    const loadingPopup = document.getElementById('loading');
    const offlinePopup = document.getElementById('no-internet');
    document.body.insertBefore(iframe, loadingPopup);

    //chrome.downloads.download({url:"https://superfungibletoken.com/sft.jpg", 
        //filename:"ADownloadTestHehe.jpg"});

    setTimeout(() => {
        if (!iframeLoadFlag) {
            // Tell the user there's a problem - can still be removed if iframe loads later
            loadingPopup.classList.remove('show');
            offlinePopup.classList.add('show');
        }
    }, iframeTimeout);
});