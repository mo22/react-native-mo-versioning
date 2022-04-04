'use strict';

const type = process.argv[2];
console.log(`react-native-mo-versioning link ${type}`);
console.log(process.env);
process.exit(0);

const fs = require('fs');
const path = require('path');

function removeLineContaining(str, search) {
  const lines = str.split('\n');
  const newLines = lines.filter(line => !line.includes(search));
  return newLines.join('\n');
}

function addLineAfterLine(str, search, append) {
  const lines = str.split('\n');
  const newLines = lines.map(line => {
    if (line.includes(search)) {
      return line + '\n' + append;
    }
    return line;
  });
  return newLines.join('\n');
}

try {
  const requiredContent = 'apply from: "../../node_modules/react-native-mo-versioning/gradle-set-version.gradle"';
  const insertAfterLine = 'cli-platform-android/native_modules.gradle';
  const contentPath = path.resolve('android', 'app', 'build.gradle');
  let content = fs.readFileSync(contentPath, 'utf8');
  if (type == 'postlink') {
    if (content.indexOf(requiredContent) === -1) {
      content = addLineAfterLine(content, insertAfterLine, requiredContent);
      fs.writeFileSync(contentPath, content);
    }
  } else if (type == 'postunlink') {
    if (content.indexOf(requiredContent) !== -1) {
      content = removeLineContaining(content, requiredContent);
      fs.writeFileSync(contentPath, content);
    }
  }
} catch (err) {
  console.error('react-native-mo-versioning postlink', err);
}
