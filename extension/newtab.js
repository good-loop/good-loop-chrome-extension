
let url = kvstore.get("tabUrl");

// if ( ! url) {
// 	url = ;
// 	kvstore.set("tabUrl", url);
// }

console.log("urk",url);

let serverType = kvstore.get("serverType");
document.querySelector("#serverToggle option[value=" + serverType + "]").setAttribute("selected", "selected");
// console.log("contentscript Chrome storage",chrome.storage);
// console.log("contentscript Local storage",window.localStorage && window.localStorage.getItem("GLtestOption"));

// console.log("Local storage - GET 2", window.localStorage.getItem("GLtestOption2", ":)"));

// window.localStorage.setItem("GLtestOption2", ":)");
// console.log("Local storage - set 2");

document.getElementById('tab').setAttribute('src', url);

const reloadTab = () => {
    serverType = document.getElementById('serverToggle').value;
    let urlConfig = {
        prod:{
            prefix:"",
            protocol:"https"
        },
        test:{
            prefix:"test",
            protocol:"https"
        },
        local:{
            prefix:"local",
            protocol:"http"
        }
    }[serverType];

    url = urlConfig.protocol + "://" + urlConfig.prefix + "my.good-loop.com/newtab.html";
    console.log("Reloading page on " + serverType);
    kvstore.set("tabUrl", url);
    kvstore.set("serverType", serverType);
    document.getElementById('tab').setAttribute('src', url);
};

document.getElementById('serverToggle').addEventListener('change', reloadTab);
