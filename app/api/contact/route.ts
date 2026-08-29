import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Basic spam protection (honeypot)
    if (data._gotcha) {
      return NextResponse.json({ success: true }, { status: 200 }); // silently accept but ignore
    }

    const { type, ...fields } = data;
    console.log('Received form submission. Type:', type, 'Email:', fields.email);

    const transporter = nodemailer.createTransport({
      pool: true,
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const fromAddress = process.env.MAIL_FROM || '"Muslim Will" <info@themuslimwill.com>';
    const replyTo = process.env.MAIL_REPLY_TO || 'info@themuslimwill.com';
    
    const isPartnership = type === 'partnership';
    const adminTo = isPartnership 
      ? (process.env.PARTNERSHIP_TO_EMAIL || 'info@themuslimwill.com')
      : (process.env.CONTACT_TO_EMAIL || 'info@themuslimwill.com');

    // Admin notification
    let adminSubject = '';
    let adminHtml = '';
    
    // Customer auto-reply
    let customerEmail = fields.email;
    let customerSubject = '';
    let customerHtml = '';
    const signature = 'The Muslim Will Team';

    const createEmailHtml = (title: string, content: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 0; background-color: #f9f9f9;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); overflow: hidden;">
          <tr>
            <td style="padding: 30px 40px; border-bottom: 1px solid #f0f0f0; text-align: center;">
              <h1 style="margin: 0; font-size: 26px; font-weight: 700; color: #0b4b36; letter-spacing: -0.5px;">Muslim Will</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px;">
              ${content}
            </td>
          </tr>
          <tr>
            <td style="padding: 30px 40px; background-color: #fcfcfc; border-top: 1px solid #f0f0f0; text-align: center;">
              <p style="margin: 0; font-size: 14px; color: #888888; line-height: 1.8;">
                <strong>Muslim Will</strong><br>
                <a href="mailto:info@themuslimwill.com" style="color: #0b4b36; text-decoration: none;">info@themuslimwill.com</a><br>
                +1-877-416-WILL
              </p>
            </td>
          </tr>
        </table>
        <p style="text-align: center; font-size: 12px; color: #bbbbbb; margin-top: 20px;">
          This is an automated message. Please do not reply directly to this email unless providing further information for your inquiry.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    if (isPartnership) {
      adminSubject = `[Partnership Inquiry] ${fields.organizationName || 'Unknown Org'} - ${fields.contactName || 'Unknown Contact'}`;
      adminHtml = `
        <h3>New Partnership Inquiry</h3>
        <p><strong>Organization Name:</strong> ${fields.organizationName}</p>
        <p><strong>Contact Name:</strong> ${fields.contactName}</p>
        <p><strong>Role / Title:</strong> ${fields.role}</p>
        <p><strong>Email:</strong> ${fields.email}</p>
        <p><strong>Phone:</strong> ${fields.phone}</p>
        <p><strong>Organization Type:</strong> ${fields.orgType}</p>
        <p><strong>Website:</strong> ${fields.website || 'N/A'}</p>
        <p><strong>Location:</strong> ${fields.location}</p>
        <p><strong>Audience Size:</strong> ${fields.audienceSize}</p>
        <p><strong>Interest Type:</strong> ${fields.interestType}</p>
        <p><strong>Message:</strong><br/>${fields.message}</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `;

      customerSubject = 'We received your partnership inquiry | Muslim Will';
      const pBody = `
        <h2 style="margin-top: 0; font-size: 20px; color: #111111;">Partnership Inquiry Received</h2>
        <p style="font-size: 16px; color: #444444;">Dear ${fields.contactName},</p>
        <p style="font-size: 16px; color: #444444;">Thank you for reaching out on behalf of <strong>${fields.organizationName}</strong>. We have successfully received your partnership inquiry.</p>
        <p style="font-size: 16px; color: #444444;">Our team will carefully review your details. A member of the Muslim Will team will follow up with you shortly to discuss how we can support your community and explore potential collaboration.</p>
        <p style="font-size: 16px; color: #444444;">If you have any additional information or immediate questions, feel free to reply directly to this email at <a href="mailto:info@themuslimwill.com" style="color: #0b4b36; text-decoration: underline;">info@themuslimwill.com</a>.</p>
        <br/>
        <p style="font-size: 16px; color: #444444; margin-bottom: 0;">Warm regards,</p>
        <p style="font-size: 16px; color: #111111; font-weight: 600; margin-top: 5px;">${signature}</p>
      `;
      customerHtml = createEmailHtml(customerSubject, pBody);
    } else {
      adminSubject = `[Contact Form] New inquiry from ${fields.fullName || 'Unknown'}`;
      adminHtml = `
        <h3>New General Inquiry</h3>
        <p><strong>Full Name:</strong> ${fields.fullName}</p>
        <p><strong>Email:</strong> ${fields.email}</p>
        <p><strong>Phone:</strong> ${fields.phone}</p>
        <p><strong>Province / Region:</strong> ${fields.province}</p>
        <p><strong>Country:</strong> ${fields.country}</p>
        <p><strong>Reason for Contact:</strong> ${fields.reason}</p>
        <p><strong>Message:</strong><br/>${fields.message}</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `;

      customerSubject = 'We received your message | Muslim Will';
      const gBody = `
        <h2 style="margin-top: 0; font-size: 20px; color: #111111;">We've Received Your Message</h2>
        <p style="font-size: 16px; color: #444444;">Dear ${fields.fullName},</p>
        <p style="font-size: 16px; color: #444444;">Thank you for contacting Muslim Will. This email is to confirm that we have successfully received your message.</p>
        <p style="font-size: 16px; color: #444444;">Our team is reviewing your inquiry and will get back to you as soon as possible.</p>
        <p style="font-size: 16px; color: #444444;">If you have any additional information to share or further questions in the meantime, feel free to reply directly to this email at <a href="mailto:info@themuslimwill.com" style="color: #0b4b36; text-decoration: underline;">info@themuslimwill.com</a>.</p>
        <br/>
        <p style="font-size: 16px; color: #444444; margin-bottom: 0;">Warm regards,</p>
        <p style="font-size: 16px; color: #111111; font-weight: 600; margin-top: 5px;">${signature}</p>
      `;
      customerHtml = createEmailHtml(customerSubject, gBody);
    }
    
    // Wrap admin HTML in the same robust template to prevent email clients from stripping raw tags
    adminHtml = createEmailHtml(adminSubject, adminHtml);

    // Send emails sequentially to prevent connection reset issues with basic SMTP servers
    try {
      console.log('Attempting to send Admin notification to:', adminTo);
      await transporter.sendMail({
        from: fromAddress,
        to: adminTo,
        bcc: 'ahmedanwarabdulaziz@gmail.com',
        replyTo: customerEmail,
        subject: adminSubject,
        html: adminHtml,
      });
      console.log('Admin notification sent successfully.');
    } catch (err) {
      console.error('Admin notification failed:', err);
      throw err; // Re-throw to trigger the 500 response since admin MUST receive it
    }

    if (customerEmail) {
      try {
        console.log('Attempting to send customer auto-reply to:', customerEmail);
        const info = await transporter.sendMail({
          from: fromAddress,
          to: customerEmail,
          bcc: 'ahmedanwarabdulaziz@gmail.com',
          replyTo: replyTo,
          subject: customerSubject,
          html: customerHtml,
        });
        console.log('Customer auto-reply accepted by SMTP server. Message ID:', info.messageId);
      } catch (custErr) {
        console.error('Failed to send customer auto-reply:', custErr);
        // Don't throw, so UI still succeeds if only customer email fails
      }
    } else {
      console.log('No customer email provided, skipping auto-reply.');
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
