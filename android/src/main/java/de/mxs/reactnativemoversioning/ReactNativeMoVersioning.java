package de.mxs.reactnativemoversioning;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;

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
        final Map<String, Object> buildConfig = new HashMap<>();
        try {
            final String packageName = getReactApplicationContext().getApplicationContext().getPackageName();
            final Class<?> clazz = Class.forName(packageName + ".BuildConfig");
            for (final Field field: clazz.getDeclaredFields()) {
                try {
                    buildConfig.put(field.getName(), field.get(null));
                } catch (IllegalAccessException e) {
                    // ignored
                }
            }
        } catch (ClassNotFoundException e) {
            // ignored
        }
        return new HashMap<String,Object>() {{
            put("buildConfig", buildConfig);
        }};
    }

}
