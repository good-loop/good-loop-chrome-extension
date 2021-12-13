#!/usr/bin/bash

VERSION=$(jq .version extension/manifest.json | tr -d '"')

npm run compile && zip -r tabs-for-good-chrome-$VERSION.zip extension/
