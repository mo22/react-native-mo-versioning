# react-native-mo-versioning

Automatically set IOS and Android version numbers for your project.

## Installation

Install just like your ordinary react-native module.

## Notes

For IOS there is a custom build script phase defined via `react-native.config.js` that updates the project's
`Info.plist` file with the current version number.

For Android you either have to manually trigger the linking script:

```sh
node node_modules/react-native-mo-versioning/link.js link
```

or edit the `android/app/build.gradle` and add the following line at the end:

```groovy
apply from: "../../node_modules/react-native-mo-versioning/gradle-set-version.gradle"
```
