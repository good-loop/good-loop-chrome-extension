// The exact chrome.storage code from Google's tutorial (with storage permission) is failing.
// BUT local storage is working :)

// Saves options to chrome.storage
function save_options(e) {
	console.log("save_options", e);
	// let $form = document.getElementById('optionsform');
	// console.log("Chrome storage",chrome.storage);
	// console.log("Local storage",window.localStorage.getItem("GLtestOption"));
	// console.log("Local storage 2",window.localStorage.getItem("GLtestOption2"));

	let $inputs = document.getElementsByClassName('gloption');	
	for(let i=0; i<$inputs.length; i++) {
		let $input = $inputs[i];
		let key = $input.name;
		let v = $input.value;
		kvstore.set(key, v);
	}
	// chrome.storage is unset!	
	// const options = {
	// 	favoriteColor: color,
	// 	likesColor: likesColor
	// };
	// chrome.storage.sync.set(options, function () {
	// 	console.log("Options saved", options);
	// 	// Update status to let user know options were saved.
	// 	var status = document.getElementById('status');
	// 	status.textContent = 'Options saved.';
	// 	setTimeout(function () {
	// 		status.textContent = '';
	// 	}, 750);
	// });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
	let $inputs = document.getElementsByClassName('gloption');	
	for(let i=0; i<$inputs.length; i++) {
		let $input = $inputs[i];
		let key = $input.name;
		let v = kvstore.get(key);
		$input.value = v;
		$input.onChange = save_options;
	}
	// 	// chrome.storage is unset!	
	// // Use default value color = 'red' and likesColor = true.
	// chrome.storage.sync.get({
	// 	favoriteColor: 'red',
	// 	likesColor: true
	// }, function (items) {
	// 	console.log("Options loaded", items);
	// 	document.getElementById('color').value = items.favoriteColor;
	// 	document.getElementById('like').checked = items.likesColor;
	// });
}

document.addEventListener('DOMContentLoaded', kvstore.restore_options);
document.getElementById('save').addEventListener('click', save_options);