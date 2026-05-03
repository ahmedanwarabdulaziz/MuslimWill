const fs = require('fs');
let contact = fs.readFileSync('e:/CONV/MW/app/contact/page.tsx', 'utf8');
contact = contact.replace(/<TrackedButton variant="primary" size="md" eventName="book_call_pane_click" eventParams=\{\{ location: 'contact_page' \}\}>/g, '<TrackedButton href="#book" variant="primary" size="md" eventName="book_call_pane_click" eventParams={{ location: \'contact_page\' }}>');
fs.writeFileSync('e:/CONV/MW/app/contact/page.tsx', contact, 'utf8');
console.log('Done!');
