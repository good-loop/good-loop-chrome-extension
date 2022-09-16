#!/usr/bin/bash
set -euo pipefail

VERSION=$(grep -oP '"version": "\K([0-9\.]+)' extension/manifest.json)
SERVER_TYPE=$(grep -oP 'serverType: "\K\w+' src/js/kvstore.js)
OUTPUT_FILENAME="tabs-for-good-chrome-$VERSION.zip"
NPM_MAJOR_VERSION=$(npm -v | cut -d. -f1)

# Fix bug seen on 15/09/22 when Dan was trying to build the extension using a newer
# version of Node/NPM.
if (( $NPM_MAJOR_VERSION > 8 )); then
    export NODE_OPTIONS=--openssl-legacy-provider
fi

bold=$(tput bold)
normal=$(tput sgr0)

printf "${bold}Version: ${normal}$VERSION\n"
printf "${bold}serverType: ${normal}$SERVER_TYPE\n\n"

# If serverType is NOT set to 'production' in src/js/kvstore.js, then show a warning
# and force the user to press a key to continue. It may be a hassle, but we don't want
# to risk pushing a version of the extension with the value set to anything other than
# production to the Chrome Store (which happened 15/09/22).
if [ "$SERVER_TYPE" != "production" ]; then
    printf "\e[31m${bold}WARNING serverType is NOT set to production in src/js/kvstore.js.\e[0m\n"
    printf "\e[31m${bold}Do NOT publish this version of the extension on the Chrome store.\e[0m\n\n"
    read -p "Press any key to continue"
fi

npm run compile && zip -r $OUTPUT_FILENAME extension/

printf "Build successful.\nPackage location: ${bold}$OUTPUT_FILENAME\n"