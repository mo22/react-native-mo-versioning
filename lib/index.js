import { NativeModules, Platform } from "react-native";
export function getAppVersion() {
    console.log(NativeModules.ReactNativeMoVersioning);
    if (Platform.OS === "ios") {
        return NativeModules.ReactNativeMoVersioning.info;
    }
    else if (Platform.OS === "android") {
        return NativeModules.ReactNativeMoVersioning.buildConfig;
    }
    else {
        return '';
    }
}
export function getAppBuild() {
    return '';
}
export function getAppGitRev() {
    return null;
}
//# sourceMappingURL=index.js.map