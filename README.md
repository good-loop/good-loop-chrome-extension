# good-loop-chrome-extension

A chrome browser extension for Good-Loop and My-Loop

## Sunset

See <https://developer.chrome.com/blog/resuming-the-transition-to-mv3>

Due to Google Chrome's transition to Manifest V3, we are no longer able to support this extension. This extension is now deprecated and will no longer be updated. 

Current users of this extension will receive a notification of discontinuation. They will be able to continue using the extension until Google finally phases out Manifest V2 support. The current estimated date for this is June 2024.

## How this extension works

This extension is simply a wrapper for the Good-Loop My-Loop websites. It will redirect the browser's new tab page to a HTML page that contains an iframe to <https://my.good-loop.com/newtab.html>. This allows us the develop and update the new tab page without having to update the extension itself.

Thus code of Tabs for Good is separated into this repository and the `my-loop` repository.

## Test builds

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

To build, 
You may need to run this in the command line:

export NODE_OPTIONS=--openssl-legacy-provider

sudo apt install jq

Build as for Chrome.

## Future Work

Cross-browser - see: 
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
