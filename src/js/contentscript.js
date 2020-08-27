
import $ from 'jquery';
// import _ from 'lodash';

const LOGTAG = "GL-extension";

console.log(LOGTAG, "Hello :)");

// let uOptions = chrome.runtime.getURL('options.html'); doesnt work
let uLogo = chrome.extension.getURL('/img/logo.64.png'); //chrome.runtime.getURL('img/logo.64.png');
let uLogo2 = chrome.extension.getURL('img/logo.64.png');

let h='100px';

$('body').append(
`<div style='position:fixed; bottom:0; left:0; right:0; height:${h}; background:black;'>
	<a href='https://my.good-loop.com'><img src='' /></a>
	<iframe src='https://as.good-loop.com' style='${h}; width:80vw;' />
</div>`);
