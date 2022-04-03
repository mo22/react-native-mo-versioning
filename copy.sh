#!/bin/bash
set -e

DIR="$2"
if ! [ -d $DIR/node_modules/react-native-mo-versioning ]; then
  echo "$DIR/node_modules/react-native-mo-versioning not there" 1>&2
  exit 1
fi

if [ "$1" == "from" ]; then
  cp -r $DIR/node_modules/react-native-mo-versioning/ios/ReactNativeMoVersioning ./ios/
  cp -r $DIR/node_modules/react-native-mo-versioning/{readme.md,src} .
  cp -r $DIR/node_modules/react-native-mo-versioning/android/{src,build.gradle} ./android/
fi

if [ "$1" == "to" ]; then
  rsync -a --exclude node_modules --exclude .git --exclude example . $DIR/node_modules/react-native-mo-versioning/
fi
