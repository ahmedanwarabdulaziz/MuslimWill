const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath, callback);
    } else if (fullPath.endsWith('.tsx')) {
      callback(fullPath);
    }
  });
}

const directories = ['e:/CONV/MW/app', 'e:/CONV/MW/components'];

directories.forEach(dir => {
  walk(dir, (file) => {
    if (file.replace(/\\/g, '/').endsWith('components/ui/Header.tsx')) {
      return; // Skip Header.tsx
    }
    
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('Start Your Will')) {
      // Replace any variant with variant="secondary"
      let newContent = content.replace(/<(TrackedButton|Button)([^>]*?)variant=["'][^"']*["']([^>]*?)>([^<]*?)Start Your Will([^<]*?)<\/\1>/g, '<$1$2variant="secondary"$3>$4Start Your Will$5</$1>');
      
      // Add variant="secondary" if no variant is present
      newContent = newContent.replace(/<(TrackedButton|Button)(?![^>]*?variant=)([^>]*?)>([^<]*?)Start Your Will([^<]*?)<\/\1>/g, '<$1 variant="secondary"$2>$3Start Your Will$4</$1>');

      if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Updated ' + file);
      }
    }
  });
});
