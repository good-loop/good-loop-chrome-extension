
import $ from 'jquery';
import {addScript} from './base/utils/miscutils';
// load the kvstore options manager
import _kvstore from '../../extension/kvstore';

// import _ from 'lodash';

const LOGTAG = "GL-extension";

console.log(LOGTAG, "Hello :)", window, document);
console.log(LOGTAG, "CMP?", kvstore.get("cmp"));

// // let uOptions = chrome.runtime.getURL('options.html'); doesnt work
// let uLogo = chrome.extension.getURL('/img/logo.64.png'); //chrome.runtime.getURL('img/logo.64.png');
// let uLogo2 = chrome.extension.getURL('img/logo.64.png');

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

if ( ! kvstore.get("cmp")) {
	console.warn("My CMP is OFF!");	
} else {
	// Setup My CMP
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
}

// this didn't work
// TODO: add "script.js" to web_accessible_resources in manifest.json
// let uInject = chrome.runtime.getURL('inject.js');
// addScript(uInject, {}); gives bundle-debug.js:39036 GET chrome-extension://nnfmfpopejpaniphkkmaeegcpnmmmhlh/inject.js net::ERR_FILE_NOT_FOUND
