const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: undefined,
  port: 465,
  secure: true,
  auth: {
    user: undefined,
    pass: undefined
  }
});

transporter.sendMail({
  from: 'info@themuslimwill.com',
  to: 'info@themuslimwill.com',
  subject: 'Test',
  text: 'Test'
}).catch(console.error);
