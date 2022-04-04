#!/bin/sh
set -e

# this is run by xcode as build script phase set up via react-native.config.js
# the working directory is the ios project base directory

# this will check the parent folders for the installed version...
# node -e 'require("react-native-mo-versioning/lib/ios-set-version.js")'

# jq is not always installed.
VERSION="$( cat ../package.json | jq -r .version )"
BUILD="$( echo $VERSION | cut -d . -f 3 )"
GITREV="$( git rev-parse --short head )$( git diff --quiet || echo '-dirty' )"

/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString '$VERSION'" "$SRCROOT/$INFOPLIST_FILE"
/usr/libexec/PlistBuddy -c "Set :CFBundleVersion $BUILD" "$SRCROOT/$INFOPLIST_FILE"

/usr/libexec/PlistBuddy -c "Set :GitRev $GITREV" "$SRCROOT/$INFOPLIST_FILE" || \
  /usr/libexec/PlistBuddy -c "Add :GitRev string $GITREV" "$SRCROOT/$INFOPLIST_FILE"
