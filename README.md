# react-native-mo-versioning

Automatically set IOS and Android version numbers for your project.

## Installation

Install just like your ordinary react-native module.

## Notes

```

for ios:

VERSION="$( cat ../package.json | jq -r .version )"
BUILD="$( echo $VERSION | cut -d . -f 3 )"
GITREV="$( git rev-parse --short head )$( git diff --quiet || echo '-dirty' )"
/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString '$VERSION'" "$SRCROOT/$INFOPLIST_FILE"
/usr/libexec/PlistBuddy -c "Set :CFBundleVersion $BUILD" "$SRCROOT/$INFOPLIST_FILE"
/usr/libexec/PlistBuddy -c "Set :GitRev $GITREV" "$SRCROOT/$INFOPLIST_FILE"



```
