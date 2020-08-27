
import $ from 'jquery';
import _ from 'lodash';

const LOGTAG = "GL-extension";

console.log(LOGTAG, "Hello :)");

let uOptions = chrome.runtime.getURL('options.html');
let uLogo = chrome.runtime.getURL('img/logo.64.png');

$('body').prepend(
`<div>
	<img src='${uLogo}' />FOO<a href='${uOptions}' class='btn btn-secondary'>Go to options</a>
	Humbug: ${localStorage.getItem("humbug")}
	<iframe src='https://as.good-loop.com' />
</div>`);
