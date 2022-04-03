#import <React/RCTBridgeModule.h>

@interface ReactNativeMoVersioning : NSObject <RCTBridgeModule>

@end

@implementation ReactNativeMoVersioning

RCT_EXPORT_MODULE()

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

- (dispatch_queue_t)methodQueue {
    return dispatch_get_main_queue();
}

- (NSDictionary*)constantsToExport {
    return @{
        @"infoDictionary": [[NSBundle mainBundle] infoDictionary],
    };
}

@end

