console.log('react-native-mo-versioning postlink');

const fs = require('fs');
const path = require('path');

try {
  const contentPath = path.resolve('android', 'app', 'build.gradle');
  console.log(contentPath);
  let content = fs.readFileSync(contentPath, 'utf8');
  console.log(content);
  fs.writeFileSync(contentPath, content);
} catch (err) {
  console.error('react-native-mo-versioning postlink', err);
}
