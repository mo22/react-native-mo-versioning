#!/bin/sh
set -e

# this is run by xcode as build script phase set up via react-native.config.js
# the working directory is the ios project base directory

function plist_set() { # [plist-path] [key] [type] [value]
  if [ "$3" == "delete" ]; then
    /usr/libexec/PlistBuddy -c "Delete $2" "$1"
  else
    /usr/libexec/PlistBuddy -c "Set $2 $4" "$1" || \
      /usr/libexec/PlistBuddy -c "Add $2 $3 $4" "$1"
  fi
}

VERSION="$( node -e "console.log(require('../package.json').version)" )"
# or via multiply?
BUILD="$( echo $VERSION | cut -d . -f 3 )"
plist_set "$SRCROOT/$INFOPLIST_FILE" :CFBundleShortVersionString string "$VERSION"
plist_set "$SRCROOT/$INFOPLIST_FILE" :CFBundleVersion string "$BUILD"

if git status &>/dev/null; then
  GITREV="$( git rev-parse --short head )$( git diff --quiet || echo '-dirty' )"
  plist_set "$SRCROOT/$INFOPLIST_FILE" :GitRev string "$GITREV"
fi

# this will check the parent folders for the installed version...
# node -e 'require("react-native-mo-versioning/lib/ios-set-version.js")'
