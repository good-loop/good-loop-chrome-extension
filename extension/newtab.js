
let url;
// Get options
if (kvstore) {
	url = kvstore.get("tabUrl");
}
if ( ! url) {
	url = "https://testmy.good-loop.com/newtab.html";
	kvstore.set("tabUrl", url);
} 

console.log("urk",url);
// console.log("contentscript Chrome storage",chrome.storage);
// console.log("contentscript Local storage",window.localStorage && window.localStorage.getItem("GLtestOption"));

// console.log("Local storage - GET 2", window.localStorage.getItem("GLtestOption2", ":)"));

// window.localStorage.setItem("GLtestOption2", ":)");
// console.log("Local storage - set 2");

document.getElementById('tab').setAttribute('src', url);
