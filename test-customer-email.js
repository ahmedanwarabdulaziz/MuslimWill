const nodemailer = require('nodemailer');

async function testCustomerEmail() {
  const customerEmail = 'test@example.com'; // We will just see if it is accepted by SMTP
  const fromAddress = 'Muslim Will <info@themuslimwill.com>';
  const replyTo = 'info@themuslimwill.com';

  const transporter = nodemailer.createTransport({
    host: 'mail.themuslimwill.com',
    port: 465,
    secure: true,
    auth: {
      user: 'info@themuslimwill.com',
      pass: 'Tagsac2024!'
    },
    // Adding debug logging
    debug: true,
    logger: true
  });

  try {
    const info = await transporter.sendMail({
      from: fromAddress,
      to: customerEmail,
      replyTo: replyTo,
      subject: 'Test Customer Auto Reply',
      html: '<p>This is a test</p>'
    });
    console.log('Customer auto-reply accepted by SMTP server. Message ID:', info.messageId);
    process.exit(0);
  } catch (error) {
    console.error('Failed to send customer auto-reply:', error);
    process.exit(1);
  }
}

testCustomerEmail();
