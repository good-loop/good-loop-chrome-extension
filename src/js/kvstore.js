
const kvstore = {};
window.kvstore = kvstore;

const DEFAULTS = {
	serverType: "local", // Change this during dev, but always reset to "production"
	cmp: true
};

DEFAULTS.tabUrl = {
	production: "https://my.good-loop.com/newtab.html",
	test: "https://testmy.good-loop.com/newtab.html",
	local: "https://localmy.good-loop.com/newtab.html"
}[DEFAULTS.serverType];

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


kvstore.setupDefaults = () => {
	console.log("setupDefaults");
	Object.keys(DEFAULTS).forEach(k => {
		// TODO: Undisable for production
		//if ( ! kvstore.get(k)) {
			kvstore.set(k, DEFAULTS[k]);
		//}
	});
};

kvstore.setupDefaults();

export default kvstore;
