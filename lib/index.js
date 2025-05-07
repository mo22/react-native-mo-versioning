"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppVersion = getAppVersion;
exports.getAppBuild = getAppBuild;
exports.getAppGitRev = getAppGitRev;
const react_native_1 = require("react-native");
// console.log('react-native-mo-versioning', NativeModules.ReactNativeMoVersioning);
function getAppVersion() {
    if (react_native_1.Platform.OS === "ios") {
        return react_native_1.NativeModules.ReactNativeMoVersioning.infoDictionary.CFBundleShortVersionString ?? '';
    }
    else if (react_native_1.Platform.OS === "android") {
        return react_native_1.NativeModules.ReactNativeMoVersioning.buildConfig.VERSION_NAME ?? '';
    }
    else {
        return '';
    }
}
function getAppBuild() {
    if (react_native_1.Platform.OS === "ios") {
        return parseInt(react_native_1.NativeModules.ReactNativeMoVersioning.infoDictionary.CFBundleVersion ?? '0');
    }
    else if (react_native_1.Platform.OS === "android") {
        return parseInt(react_native_1.NativeModules.ReactNativeMoVersioning.buildConfig.VERSION_CODE ?? '0');
    }
    else {
        return 0;
    }
}
function getAppGitRev() {
    if (react_native_1.Platform.OS === "ios") {
        return react_native_1.NativeModules.ReactNativeMoVersioning.infoDictionary.GitRev ?? null;
    }
    else if (react_native_1.Platform.OS === "android") {
        return react_native_1.NativeModules.ReactNativeMoVersioning.buildConfig.GIT_REV ?? null;
    }
    else {
        return '';
    }
}
//# sourceMappingURL=index.js.map