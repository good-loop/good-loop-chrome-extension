/**
 * This code gets injected into the web page.
 */

console.log("HELLO FROM THE PAGE :)", document);

// document.body.appendChil(
// `<div id='glext' style='width:100%; height:${h}; background:white; border:1px solid #333; z-index:2000;'>
// 	<div style='float:right; width:64px;overflow:hidden;'>		
// 		<a href='${MYGL}'><img src='${MYGL}/img/logo/LogoMark/logo.64.png' /></a>
// 	</div>
// 	<iframe src='${MYGL}/banner.html' style='float:right; height:${h}; width:calc(100vw - 100px);' />
// </div>`);

// TODO -- inject CMP code
// (function() {
//     'use strict'; 
//     console.warn("Installing my __tcfapi and __cmp on", window);

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

console.warn("window.__cmp", window.__cmp, unsafeWindow);
//     // Your code here...
// })();
