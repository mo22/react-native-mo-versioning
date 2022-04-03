package de.mxs.reactnativemoversioning;

import android.app.Activity;
import android.content.ContentResolver;
import android.content.Context;
import android.database.ContentObserver;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.os.Build;
import android.os.Handler;
import android.os.PowerManager;
import android.provider.Settings;
import android.util.Log;
import android.view.WindowManager;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import javax.annotation.Nonnull;

public class ReactNativeMoVersioning extends ReactContextBaseJavaModule {

    ReactNativeMoVersioning(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public @Nonnull
    String getName() {
        return "ReactNativeMoVersioning";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        try {
          Class clazz = Class.forName(getReactApplicationContext().getApplicationContext().getPackageName() + ".BuildConfig");
          Field[] fields = clazz.getDeclaredFields();
          for(Field f: fields) {
            try {
              constants.put(f.getName(), f.get(null));
            }
            catch (IllegalAccessException e) {
            }
          }
        }
        catch (ClassNotFoundException e) {
        }
        return constants;
    }

}
