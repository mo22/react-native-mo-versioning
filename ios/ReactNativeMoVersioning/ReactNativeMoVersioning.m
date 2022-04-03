#import <React/RCTBridgeModule.h>

@interface ReactNativeMoVersioning : NSObject <RCTBridgeModule>
@end

@implementation ReactNativeMoVersioning

RCT_EXPORT_MODULE()

- (dispatch_queue_t)methodQueue {
    return dispatch_get_main_queue();
}

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

- (NSDictionary *)constantsToExport {
    return @{
        @"infoDictionary": [[NSBundle mainBundle] infoDictionary]
    };
}

@end
