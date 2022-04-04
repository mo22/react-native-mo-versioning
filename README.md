# react-native-mo-versioning

Automatically set IOS and Android version numbers for your project.

## Installation

Install just like your ordinary react-native module.

## Notes

For IOS there is a custom build script phase defined via `react-native.config.js` that updates the project's
`Info.plist` file with the current version number.

For Android TODO.


https://github.com/mo22/react-native-mo-versioning
https://github.com/react-native-community/cli/blob/master/docs/dependencies.md

```

for ios:

VERSION="$( cat ../package.json | jq -r .version )"
BUILD="$( echo $VERSION | cut -d . -f 3 )"
GITREV="$( git rev-parse --short head )$( git diff --quiet || echo '-dirty' )"
/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString '$VERSION'" "$SRCROOT/$INFOPLIST_FILE"
/usr/libexec/PlistBuddy -c "Set :CFBundleVersion $BUILD" "$SRCROOT/$INFOPLIST_FILE"
/usr/libexec/PlistBuddy -c "Set :GitRev $GITREV" "$SRCROOT/$INFOPLIST_FILE"

for android:

need to modify app/build.gradle:

apply from: "../../node_modules/react-native-mo-versioning/react-native-mo-versioning.gradle"




```
