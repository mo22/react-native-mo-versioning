import * as plist from 'plist';
import * as fs from 'fs';
import * as path from 'path';
import * as child_process from 'child_process';


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

  const packageJson = JSON.parse(fs.readFileSync('../package.json').toString()) as {
    version: string;
  };

  // get git rev
  let gitRev: string | null = null;
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
    } catch (err) {
      // if git diff --quiet fails, this means the workspace is dirty
      gitRev += '-dirty';
    }
  } catch (err) {
    // ignore, no git?
  }

  // update the version
  {
    const origPlistText = fs.readFileSync(infoPlistPath, 'utf8');
    const origPlist = plist.parse(origPlistText) as plist.PlistObject;
    const newPlist = {
      ...origPlist,
      CFBundleShortVersionString: packageJson.version,
      CFBundleVersion: packageJson.version.split('.')[2],
      ...(gitRev !== null) ? {
        GitRev: gitRev,
      } : {},
    };
    const newPlistText = plist.build(newPlist, { indent: '\t' });
    if (newPlistText !== origPlistText) {
      fs.writeFileSync(infoPlistPath, newPlistText);
    }
  }

}
