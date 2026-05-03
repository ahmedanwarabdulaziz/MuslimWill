const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory() && !fullPath.includes('node_modules') && !fullPath.includes('.next')) {
      walk(fullPath, callback);
    } else if (fullPath.endsWith('.tsx')) {
      callback(fullPath);
    }
  });
}

const issues = [];

function checkFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  const buttonRegex = /<(Button|TrackedButton)[^>]*>/g;
  let match;
  while ((match = buttonRegex.exec(content)) !== null) {
    const btnTag = match[0];
    const hasHref = btnTag.includes('href=');
    const hasOnClick = btnTag.includes('onClick=');
    const hasTypeSubmit = btnTag.includes('type="submit"') || btnTag.includes("type='submit'");
    if (!hasHref && !hasOnClick && !hasTypeSubmit) {
      issues.push({ file, btnTag });
    }
  }
}

walk('e:/CONV/MW/app', checkFile);
walk('e:/CONV/MW/components', checkFile);

if (issues.length > 0) {
  console.log('Buttons with no obvious action (href/onClick/submit):');
  issues.forEach(i => console.log(i.file + ' -> ' + i.btnTag));
} else {
  console.log('All buttons have an href, onClick, or are submit buttons!');
}
