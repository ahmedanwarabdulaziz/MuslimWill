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

function processFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  content = content.replace(/<(TrackedButton|Button)(?![^>]*?href=)([^>]*?)>([^<]*?)Start Your Will([^<]*?)<\/\1>/g, '<$1 href="https://app.themuslimwill.com/Account/Register"$2>$3Start Your Will$4</$1>');

  // if some already have href, we need to overwrite it, but the user didn't specify that there are any. Let's just do a blanket replace if href is already there to be safe.
  content = content.replace(/<(TrackedButton|Button)([^>]*?)href=["'][^"']*?["']([^>]*?)>([^<]*?)Start Your Will([^<]*?)<\/\1>/g, '<$1$2href="https://app.themuslimwill.com/Account/Register"$3>$4Start Your Will$5</$1>');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  }
}

walk('e:/CONV/MW/app', processFile);
walk('e:/CONV/MW/components', processFile);
