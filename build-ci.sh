#!/bin/bash
#
# This script will be called from our CI system every time a commit is made to the master branch.
#
# T4G will be built with the `serverType` property in kvstore.js pointing to testmy.good-loop.com.
# The zip file will be moved to /home/winterwell/good-loop-chrome-extension-builds, which can be accessed via 
# t4g-test-builds.good-loop.com. This lets non-technical QA testers use the latest build without
# needing to install NodeJS/NPM on their localy machine.
#
set -euo pipefail

PROJECT_LOCATION_ON_DISK=/home/winterwell/good-loop-chrome-extension

# Pull changes, install dependencies
cd $PROJECT_LOCATION_ON_DISK
git pull
npm i

# Switch `serverType` to "test"
sed -i -E 's/(serverType: ")([a-z]+)/\1test/' src/js/kvstore.js

# Compile
npm run compile

VERSION=$(grep -oP '"version": "\K([0-9\.]+)' extension/manifest.json)
OUTPUT_FILENAME="t4g-$VERSION-`date '+%s'`.zip"
zip -r $OUTPUT_FILENAME extension/

# Move zipfile to the webserver root
mv $OUTPUT_FILENAME $PROJECT_LOCATION_ON_DISK-builds

# Reset serverType to HEAD in case the edit to kvStore blocks future git pulls
git reset --hard HEAD

