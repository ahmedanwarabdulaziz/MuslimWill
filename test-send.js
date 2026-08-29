const nodemailer = require('nodemailer');

async function testSend() {
  try {
    const transporter = nodemailer.createTransport({
      host: 'mail.themuslimwill.com',
      port: 465,
      secure: true,
      auth: {
        user: 'info@themuslimwill.com',
        pass: 'Tagsac2024!'
      }
    });

    const info = await transporter.sendMail({
      from: '"Muslim Will" <info@themuslimwill.com>',
      to: 'info@themuslimwill.com',
      subject: 'SMTP Test',
      text: 'This is a test email to verify SMTP functionality.'
    });

    console.log('Message sent successfully. Message ID:', info.messageId);
    process.exit(0);
  } catch (error) {
    console.error('Failed to send email:', error);
    process.exit(1);
  }
}

testSend();
