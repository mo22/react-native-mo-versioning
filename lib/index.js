"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppGitRev = exports.getAppBuild = exports.getAppVersion = void 0;
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
exports.getAppVersion = getAppVersion;
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
exports.getAppBuild = getAppBuild;
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
exports.getAppGitRev = getAppGitRev;
//# sourceMappingURL=index.js.map