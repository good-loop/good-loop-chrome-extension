# good-loop-chrome-extension

A chrome browser extension for Good-Loop and My-Loop

# Test builds

Test builds can be downloaded from: https://t4g-test-builds.good-loop.com/

To install from a local git checkout:

1. `npm i`, `npm run compile` (or `watch.sh`)
2. Put <chrome://extensions/> in your browser
3. ...Switch on Developer Mode (it's a toggle in the top-right)
4. ...Click on "Load Unpacked"
5. ...Pick the `good-loop-chrome-extension/extension` folder to load.

You can test it by opening a new tab.

It should also nobble annoying consent scripts :)

Publish here: https://chrome.google.com/webstore/devconsole/
Login as officer@good-loop.com

Using this info: https://docs.google.com/document/d/1xtsh4ukGgKZ9MAliNY3CAdLVa-SBSLN_TS6BjnRL1Fo


## Edge Version
https://microsoftedge.microsoft.com/addons/detail/goodloop-tabs-for-good/affgfbmpcboljigkpdeamhieippkglkn

Created using login-by-github by Dan W
Publish here: https://partner.microsoft.com/en-us/dashboard/microsoftedge/ab92e36f-896e-4356-b3b1-9d874276aa44/packages

To build, you may need to run this in the command line:

export NODE_OPTIONS=--openssl-legacy-provider

sudo apt install jq


## Future Work

Cross-browser - see: 
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
