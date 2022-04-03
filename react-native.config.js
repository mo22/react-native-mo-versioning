module.exports = {
  dependency: {
    platforms: {
      android: {
        packageImportPath: 'import io.invertase.firebase.app.ReactNativeFirebaseAppPackage;',
      },
      // https://github.com/react-native-community/cli/blob/master/docs/dependencies.md
      ios: {
        scriptPhases: [
          {
            name: '[react-native-mo-versioning] Set Version',
            path: './ios-set-version.sh',
            execution_position: 'before_compile',
            input_files: ['$(BUILT_PRODUCTS_DIR)/$(INFOPLIST_PATH)'],
          },
        ],
      },
    },
  },
};
