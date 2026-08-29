const nodemailer = require('nodemailer'); 
const transporter = nodemailer.createTransport({
  host: 'mail.themuslimwill.com', 
  port: 465, 
  secure: true, 
  auth: {
    user: 'info@themuslimwill.com', 
    pass: 'Tagsac2024!'
  }
}); 
transporter.verify((error, success) => { 
  if (error) { 
    console.error('Error:', error); 
    process.exit(1);
  } else { 
    console.log('Server is ready to take our messages'); 
    process.exit(0);
  } 
});
