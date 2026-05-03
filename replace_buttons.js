const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath, callback);
    } else if (fullPath.endsWith('.tsx')) {
      callback(fullPath);
    }
  });
}

walk('e:/CONV/MW/app', (file) => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('Start Your Will')) {
    let newContent = content.replace(/<TrackedButton([^>]*?)variant=["']primary["']([^>]*?)>([^<]*?)Start Your Will([^<]*?)<\/TrackedButton>/g, '<TrackedButton$1variant="secondary"$2>$3Start Your Will$4</TrackedButton>');
    
    newContent = newContent.replace(/<TrackedButton(?![^>]*?variant=)([^>]*?)>([^<]*?)Start Your Will([^<]*?)<\/TrackedButton>/g, '<TrackedButton variant="secondary"$1>$2Start Your Will$3</TrackedButton>');

    if (content !== newContent) {
      fs.writeFileSync(file, newContent, 'utf8');
      console.log('Updated ' + file);
    }
  }
});
