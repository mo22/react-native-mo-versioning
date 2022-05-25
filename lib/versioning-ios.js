"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plist = require("plist");
const fs = require("fs");
const path = require("path");
if (require.main === module) {
    if (!process.env.TARGET_BUILD_DIR) {
        throw new Error(`TARGET_BUILD_DIR missing`);
    }
    if (!process.env.INFOPLIST_PATH) {
        throw new Error(`INFOPLIST_PATH missing`);
    }
    const infoPlistPath = path.join(process.env.TARGET_BUILD_DIR, process.env.INFOPLIST_PATH);
    if (!fs.existsSync(infoPlistPath)) {
        throw new Error(`infoPlistPath not found: ${infoPlistPath}`);
    }
    const packageJson = JSON.parse(fs.readFileSync('../package.json').toString());
    console.log('packageJson', packageJson);
    // update the version
    {
        const origPlistText = fs.readFileSync(infoPlistPath, 'utf8');
        const origPlist = plist.parse(origPlistText);
        const newPlist = {
            ...origPlist,
            CFBundleShortVersionString: packageJson.version,
            CFBundleVersion: parseInt(packageJson.version.split('.')[2]),
        };
        const newPlistText = plist.build(newPlist, { indent: '\t' });
        if (newPlistText !== origPlistText) {
            fs.writeFileSync(infoPlistPath, newPlistText);
        }
    }
    // also include git revision?
}
//# sourceMappingURL=versioning-ios.js.map