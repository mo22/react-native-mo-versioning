#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif

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

