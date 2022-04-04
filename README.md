# react-native-mo-versioning

Automatically set IOS and Android version numbers for your project.

## Installation

Install just like your ordinary react-native module.

## Notes

For IOS there is a custom build script phase defined via `react-native.config.js` that updates the project's
`Info.plist` file with the current version number.

For Android `link.js postlink` triggered via `package.json`/`rnpm` will update the `android/app/build.gradle` file
and include the `gradle-set-version.gradle` file.
