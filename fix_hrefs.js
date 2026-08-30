const fs = require('fs');

let page = fs.readFileSync('e:/CONV/MW/app/page.tsx', 'utf8');
page = page.replace('<TrackedButton size="lg" variant="outline" className={styles.invertedOutline} eventName="how_it_works_click" eventParams={{ location: \'home_hero\' }}>See How It Works</TrackedButton>', '<TrackedButton href="/how-it-works" size="lg" variant="outline" className={styles.invertedOutline} eventName="how_it_works_click" eventParams={{ location: \'home_hero\' }}>See How It Works</TrackedButton>');
page = page.replace('<TrackedButton variant="primary" size="lg" eventName="faq_click" eventParams={{ location: \'home_faq\' }}>View Full FAQ</TrackedButton>', '<TrackedButton href="/faq" variant="primary" size="lg" eventName="faq_click" eventParams={{ location: \'home_faq\' }}>View Full FAQ</TrackedButton>');
page = page.replace('<TrackedButton size="lg" variant="outlineLight" className={styles.ctaButtonOutline} eventName="book_call_click" eventParams={{ location: \'home_final_cta\' }}>Book a Call</TrackedButton>', '<TrackedButton href="/contact" size="lg" variant="outlineLight" className={styles.ctaButtonOutline} eventName="book_call_click" eventParams={{ location: \'home_final_cta\' }}>Book a Call</TrackedButton>');
fs.writeFileSync('e:/CONV/MW/app/page.tsx', page, 'utf8');

let contact = fs.readFileSync('e:/CONV/MW/app/contact/page.tsx', 'utf8');
contact = contact.replace('<TrackedButton variant="primary" size="md" eventName="book_call_pane_click" eventParams={{ location: \'contact_page\' }}>\n                  Book a Call\n                </TrackedButton>', '<TrackedButton href="#book" variant="primary" size="md" eventName="book_call_pane_click" eventParams={{ location: \'contact_page\' }}>\n                  Book a Call\n                </TrackedButton>');
fs.writeFileSync('e:/CONV/MW/app/contact/page.tsx', contact, 'utf8');

let pricing = fs.readFileSync('e:/CONV/MW/app/pricing/page.tsx', 'utf8');
pricing = pricing.replace('<TrackedButton variant="primary" size="lg" style={{ width: \'100%\' }} eventName="start_will_couples_click" eventParams={{ location: \'pricing_cards\' }}>Start As A Couple</TrackedButton>', '<TrackedButton href="https://app.themuslimwill.com/Account/Register" variant="primary" size="lg" style={{ width: \'100%\' }} eventName="start_will_couples_click" eventParams={{ location: \'pricing_cards\' }}>Start As A Couple</TrackedButton>');
pricing = pricing.replace('<TrackedButton size="lg" variant="outlineLight" className={sharedStyles.ctaButtonOutline} eventName="book_call_click" eventParams={{ location: \'pricing_final_cta\' }}>See How It Works</TrackedButton>', '<TrackedButton href="/how-it-works" size="lg" variant="outlineLight" className={sharedStyles.ctaButtonOutline} eventName="book_call_click" eventParams={{ location: \'pricing_final_cta\' }}>See How It Works</TrackedButton>');
fs.writeFileSync('e:/CONV/MW/app/pricing/page.tsx', pricing, 'utf8');

console.log('Fixed missing hrefs!');
