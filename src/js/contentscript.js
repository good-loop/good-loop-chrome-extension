
import $ from 'jquery';
import {addScript} from './base/utils/miscutils';

// import _ from 'lodash';

const LOGTAG = "GL-extension";

console.log(LOGTAG, "Hello :)", window, document);

// let uOptions = chrome.runtime.getURL('options.html'); doesnt work
let uLogo = chrome.extension.getURL('/img/logo.64.png'); //chrome.runtime.getURL('img/logo.64.png');
let uLogo2 = chrome.extension.getURL('img/logo.64.png');

let h='100px';

let MYGL = 'https://testmy.good-loop.com';

// TODO -- inject CMP code
// (function() {
//     'use strict'; 
//     console.warn("Installing my __tcfapi and __cmp on", window);
  
//   let fn = function(...args) {
//         console.warn("My CMP", args);
//     };
    
//  Object.defineProperty(unsafeWindow, "__tcfapi",
// { value : fn,
// writable: false,
// enumerable: false,
// configurable: false}
// );
  
//   Object.defineProperty(unsafeWindow, "__cmp",
// { value : fn,
// writable: false,
// enumerable: false,
// configurable: false}
// );
  
//  console.warn("window.__cmp", unsafeWindow.__cmp, unsafeWindow);
//     // Your code here...
// })();


// window.rmglext = () => {
// 	document.getElementById("glext").remove();
// };
// console.log("window.rmglext", window.rmglext, window);

// to inject the code needed to hide this
// https://stackoverflow.com/questions/9515704/insert-code-into-the-page-context-using-a-content-script
// <button onClick='rmglext'>X</button><br>
// $('body').append(
// `<div id='glext' style='width:100%; height:${h}; background:white; border:1px solid #333; z-index:2000;'>
// 	<div style='float:right; width:64px;overflow:hidden;'>		
// 		<a href='${MYGL}'><img src='${MYGL}/img/logo/LogoMark/logo.64.png' /></a>
// 	</div>
// 	<iframe src='${MYGL}/banner.html' style='float:right; height:${h}; width:calc(100vw - 100px);' />
// </div>`);

function injectScript(func) {
    let actualCode = '(' + func + ')();'
	let script = document.createElement('script');
	script.textContent = actualCode;
	(document.head||document.documentElement).appendChild(script);
	script.remove();
};

// TODO CMP functions (as seen on a fandom.com page)
// getConsentData undefined callback
// ping 2 callback
// getTCData 2 callback [91]


injectScript(function() {
	console.log("HELLO FROM THE PAGE :)", window, document);

	let fn = function (...args) {
		console.warn("My CMP", args);
	};

	Object.defineProperty(window, "__tcfapi",
		{
			value: fn,
			writable: false,
			enumerable: false,
			configurable: false
		}
	);

	Object.defineProperty(window, "__cmp",
		{
			value: fn,
			writable: false,
			enumerable: false,
			configurable: false
		}
	);

	console.warn("Good-Loop CMP set: window.__cmp", window.__cmp, window.__tcfapi);
});

// TODO: add "script.js" to web_accessible_resources in manifest.json
let uInject = chrome.runtime.getURL('inject.js');
// addScript(uInject, {}); gives bundle-debug.js:39036 GET chrome-extension://nnfmfpopejpaniphkkmaeegcpnmmmhlh/inject.js net::ERR_FILE_NOT_FOUND

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
