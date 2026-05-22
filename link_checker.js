const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const validInternalRoutes = new Set([
  '/',
  '/about',
  '/about/ahmed-gohar',
  '/about/dr-yasser-aboutaha',
  '/about/mohamed-aly',
  '/about/sulayman-al-murayr',
  '/c/ahmed',
  '/charitable-legacy',
  '/contact',
  '/faq',
  '/for-charities',
  '/how-it-works',
  '/legal-islamic-compliance',
  '/pricing',
]);

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

const links = new Set();

function processFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  const regex = /href=["'](.*?)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    links.add(match[1]);
  }
}

walk('e:/CONV/MW/app', processFile);
walk('e:/CONV/MW/components', processFile);

async function checkUrl(url) {
  if (url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('#')) return { url, status: 'Ignored', isBroken: false };
  if (url.startsWith('/')) {
    // Split anchor if present
    const baseRoute = url.split('#')[0];
    const isBroken = !validInternalRoutes.has(baseRoute);
    return { url, status: isBroken ? 'Not Found' : 'Valid', isBroken, internal: true };
  }
  if (url.startsWith('http')) {
    return new Promise((resolve) => {
      const client = url.startsWith('https') ? https : http;
      const req = client.get(url, (res) => {
        const isBroken = res.statusCode >= 400;
        resolve({ url, status: res.statusCode, isBroken, internal: false });
      }).on('error', (err) => {
        resolve({ url, status: err.message, isBroken: true, internal: false });
      });
      req.setTimeout(5000, () => {
        req.abort();
        resolve({ url, status: 'Timeout', isBroken: true, internal: false });
      });
    });
  }
  return { url, status: 'Unknown format', isBroken: true, internal: false };
}

async function run() {
  console.log(`Found ${links.size} unique links. Checking...`);
  const results = [];
  for (const url of links) {
    // Some URLs might be dynamic like `${siteUrl}/Images/12.jpeg`
    if (url.includes('${')) {
      results.push({ url, status: 'Dynamic/Template', isBroken: false, internal: false });
      continue;
    }
    const res = await checkUrl(url);
    results.push(res);
  }
  
  const broken = results.filter(r => r.isBroken);
  fs.writeFileSync('e:/CONV/MW/broken_links.json', JSON.stringify(broken, null, 2));
  console.log(`Found ${broken.length} broken links.`);
}

run();
