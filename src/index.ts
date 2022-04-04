import { NativeModules, Platform } from "react-native";

export function getAppVersion(): string {
  console.log(NativeModules.ReactNativeMoVersioning);
  if (Platform.OS === "ios") {
    return NativeModules.ReactNativeMoVersioning.info;
  } else if (Platform.OS === "android") {
    return NativeModules.ReactNativeMoVersioning.buildConfig;
  } else {
    return '';
  }
}

export function getAppBuild(): string {
  return '';
}

export function getAppGitRev(): string | null {
  return null;
}
