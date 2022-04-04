import { NativeModules, Platform } from "react-native";
console.log('react-native-mo-versioning', NativeModules.ReactNativeMoVersioning);
export function getAppVersion() {
    if (Platform.OS === "ios") {
        return NativeModules.ReactNativeMoVersioning.info.CFBundleShortVersionString;
    }
    else if (Platform.OS === "android") {
        return NativeModules.ReactNativeMoVersioning.buildConfig.VERSION_NAME;
    }
    else {
        return '';
    }
}
export function getAppBuild() {
    if (Platform.OS === "ios") {
        return NativeModules.ReactNativeMoVersioning.info.CFBundleVersion; // to int?
    }
    else if (Platform.OS === "android") {
        return NativeModules.ReactNativeMoVersioning.buildConfig.VERSION_CODE;
    }
    else {
        return '';
    }
}
export function getAppGitRev() {
    if (Platform.OS === "ios") {
        return NativeModules.ReactNativeMoVersioning.info.GitRev ?? null;
    }
    else if (Platform.OS === "android") {
        return NativeModules.ReactNativeMoVersioning.buildConfig.GIT_REV ?? null;
    }
    else {
        return '';
    }
}
//# sourceMappingURL=index.js.map