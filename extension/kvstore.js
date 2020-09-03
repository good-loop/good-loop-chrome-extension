
const kvstore = {};
window.kvstore = kvstore;

/**
 * 
 * @param {string} key 
 * @param {?Object} callback to match chrome.storage.get
 * @returns {?string} value
 */
kvstore.get = (key, callback) => {
	// map??
	let val = window.localStorage.getItem(key);	
	console.log("kvstore get",key,val);
	if (callback) {
		let options = {};
		options[key] = val;
		callback(options);
	}
	return val;
};


/**
 * 
 * @param {?Object} callback to match chrome.storage.get
 */
kvstore.set = (key, value, callback) => {
	console.log("kvstore SET",key,value);
	window.localStorage.setItem(key, value);	
	if (callback) {		
		callback();
	}
};


