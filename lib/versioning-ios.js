"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const child_process = require("child_process");
const plist = require('simple-plist'); // broken typings?
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
    // get git rev
    let gitRev = null;
    try {
        gitRev = child_process.execSync('git rev-parse --short HEAD', {
            cwd: '../',
            encoding: 'utf8',
        }).trim();
        try {
            child_process.execSync('git diff --quiet', {
                cwd: '../',
                encoding: 'utf8',
            }).trim();
        }
        catch (err) {
            // if git diff --quiet fails, this means the workspace is dirty
            gitRev += '-dirty';
        }
    }
    catch (err) {
        // ignore, no git?
    }
    // update the version
    {
        const origPlistText = fs.readFileSync(infoPlistPath);
        const origPlist = plist.parse(origPlistText);
        const newPlist = {
            ...origPlist,
            CFBundleShortVersionString: packageJson.version,
            CFBundleVersion: packageJson.version.split('.')[2],
            ...(gitRev !== null) ? {
                GitRev: gitRev,
            } : {},
        };
        // const newPlistText = Buffer.from(plist.stringify(newPlist), 'utf-8');
        const newPlistText = plist.bplistCreator(newPlist);
        if (newPlistText.toString('base64') !== origPlistText.toString('base64')) {
            fs.writeFileSync(infoPlistPath, newPlistText);
        }
    }
}
//# sourceMappingURL=versioning-ios.js.map