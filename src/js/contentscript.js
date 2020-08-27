
import $ from 'jquery';
// import _ from 'lodash';

const LOGTAG = "GL-extension";

console.log(LOGTAG, "Hello :)");

// let uOptions = chrome.runtime.getURL('options.html'); doesnt work
let uLogo = chrome.extension.getURL('/img/logo.64.png'); //chrome.runtime.getURL('img/logo.64.png');
let uLogo2 = chrome.extension.getURL('img/logo.64.png');

let h='100px';

let MYGL = 'https://testmy.good-loop.com';

// window.rmglext = () => {
// 	document.getElementById("glext").remove();
// };
// console.log("window.rmglext", window.rmglext, window);

// to inject the code needed to hide this
// https://stackoverflow.com/questions/9515704/insert-code-into-the-page-context-using-a-content-script
// <button onClick='rmglext'>X</button><br>
$('body').append(
`<div id='glext' style='width:100%; height:${h}; background:white; border:1px solid #333; z-index:2000;'>
	<div style='float:right; width:64px;overflow:hidden;'>		
		<a href='${MYGL}'><img src='${MYGL}/img/logo/LogoMark/logo.64.png' /></a>
	</div>
	<iframe src='${MYGL}/#banner' style='float:right; height:${h}; width:calc(100vw - 100px);' />
</div>`);

function storeSet(key,val,callback) {
	chrome.extension.sendMessage({action:"setstorage"}, function(response){
		console.log("storage is ", response);  
		if (callback) callback(response[key]);
	 });
	// chrome.storage.local.set({key: val}, function() {
	// 	console.log(LOGTAG, key+' is set to ' + val);
	// });
};
function storeGet(key, callback) {
	chrome.extension.sendMessage({action:"getstorage"}, function(response){
		console.log("storage is ", response);  
		callback(response[key]);
	 });
	// return chrome.storage.local.get(['key'], callback);
};
// Needs
// chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
// 	if (request.action == "focusWindow"){
// 	  sendResponse({myVar: localStorage.myStorage});
// 	}
//   });
// console.log("Get stored animal", storeGet("animal", console.log));
// console.log("Store animal=badger", storeSet("animal","badger"));
