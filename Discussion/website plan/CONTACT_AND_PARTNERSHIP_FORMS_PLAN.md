# Contact And Partnership Forms Plan

## Purpose

This plan gives Antigravity a clear execution brief for adding:

1. a general `Contact Us` form for users and families
2. a separate `Partnership Inquiry` form for charities, masajid, and organizations

These forms should not be treated as a minor UI addition.
They are conversion infrastructure.

The current site already gives users:

- start your will
- book a call
- email and phone contact

But it is still missing:

- a low-friction question form for regular users
- a structured lead-capture form for partner organizations

## Strategic Goal

The forms should help Muslim Will capture two different types of intent:

### A. General Contact Intent

People who want to:

- ask a question
- clarify if the service fits them
- ask about jurisdiction
- ask about process or pricing
- request help before starting

### B. Partnership Intent

Organizations that want to:

- explore a charity partnership
- explore a masjid referral relationship
- request a co-branded legacy-giving pathway
- book an organizational conversation

## High-Level Recommendation

Build one shared form system with two variants:

1. `general`
2. `partnership`

That means:

- one shared UI pattern
- one shared validation approach
- one shared success/error state system
- one shared submission pipeline
- different field sets
- different email routing
- different internal subject tagging

## Pages To Update

### 1. Contact Page

**File**

- `app/contact/page.tsx`

**Goal**

Convert the current contact page from mostly directional copy into a real lead-capture page.

**Implementation**

Add a full `Contact Us` form below the current explanation or alongside it on desktop.

### 2. For Charities / Partnerships Page

**File**

- `app/for-charities/page.tsx`

**Goal**

Turn the current partnership CTA into a structured inquiry path for organizations.

**Implementation**

Add a dedicated `Partnership Inquiry` form near the final CTA or directly below the partnership explanation.

## Recommended Component Structure

Antigravity should build these as reusable components, not page-specific one-offs.

### Suggested Components

- `components/forms/InquiryForm.tsx`
- `components/forms/FormField.tsx`
- `components/forms/FormSuccess.tsx`
- `components/forms/FormError.tsx`

### Suggested Backend / Submission Path

- `app/api/contact/route.ts`

This route can accept a `type` field:

- `general`
- `partnership`

And then route the email, subject, and auto-response accordingly.

## Form Variant 1: Contact Us

### Recommended Heading

`Send Us A Message`

### Supporting Copy

`If you have a question about Muslim Will, our process, pricing, or whether the service fits your situation, send us a message and our team will get back to you.`

### Recommended Fields

1. Full name
2. Email address
3. Phone number
4. Province / region
5. Country
6. Reason for contact
7. Message

### Recommended `Reason for contact` options

- General question
- Pricing question
- Process question
- Legal / jurisdiction question
- Charity / bequest question
- Technical issue
- Other

### Optional Fields

- Preferred contact method
- Best time to reach you

## Form Variant 2: Partnership Inquiry

### Recommended Heading

`Request Partnership Information`

### Supporting Copy

`If you represent a charity, masjid, foundation, or community organization and want to explore a partnership with Muslim Will, send your details below and our team will follow up.`

### Recommended Fields

1. Organization name
2. Contact person full name
3. Role / title
4. Email address
5. Phone number
6. Organization type
7. Website
8. City / province / country
9. Estimated audience or community size
10. Partnership interest type
11. Message

### Recommended `Organization type` options

- Charity
- Masjid
- Foundation
- Community organization
- School / institute
- Other

### Recommended `Partnership interest type` options

- Legacy giving partnership
- Co-branded referral path
- Community education session
- Jumaa / workshop inquiry
- Strategic partnership
- Other

## UX Requirements

Antigravity should implement these behaviors on both forms:

1. clear inline validation
2. disabled submit state while sending
3. visible success message
4. visible error message
5. mobile-friendly spacing and inputs
6. accessible labels and error text
7. clear privacy reassurance near submit

## Messaging Near Submit Button

Recommended short trust line:

`We use your information only to respond to your inquiry and coordinate next steps.`

## Submit Buttons

### Contact form

`Send Message`

### Partnership form

`Request Partnership Info`

## Success States

### Contact form success

`Your message has been sent. Our team will review it and get back to you soon.`

### Partnership form success

`Your partnership inquiry has been received. A member of the Muslim Will team will follow up with you soon.`

## Email Routing Plan

Use different routing logic for the two forms.

### General Contact

Recommended destination:

- `info@themuslimwill.com`

### Partnership Inquiry

Recommended destination:

- `info@themuslimwill.com`

## Email Behavior To Implement

Each form submission should trigger:

### 1. Internal admin email

Sent to Muslim Will team inbox.

### 2. Customer confirmation email

Sent to the person who submitted the form.

This means every form should generate two emails:

- admin notification
- customer auto-reply

## Confirmed Muslim Will Email Decisions

These choices are now confirmed and Antigravity should implement them exactly as follows:

- Sending mailbox: `info@themuslimwill.com`
- General contact destination: `info@themuslimwill.com`
- Partnership inquiry destination: `info@themuslimwill.com`
- Sender display name: `Mslim Will`
- Email format: `HTML`
- Email signature name: `Msulim ewill team`
- SMTP host: `mail.themuslimwill.com`
- SMTP port: `465`
- SMTP security: `SSL/TLS`

Important implementation rule:

- the mailbox password must not be written into markdown files or committed to the repository
- it must be added only in `.env.local` or deployment secrets at setup time

## Suggested Email Subject Lines

### Admin subjects

For general:

- `[Contact Form] New inquiry from {{full_name}}`

For partnership:

- `[Partnership Inquiry] {{organization_name}} - {{contact_name}}`

### Customer auto-reply subjects

For general:

- `We received your message | Muslim Will`

For partnership:

- `We received your partnership inquiry | Muslim Will`

## Suggested Email Content Direction

### General auto-reply

Short, warm, professional.

Example direction:

- thank them
- confirm receipt
- say team will review and reply
- include Muslim Will contact details

### Partnership auto-reply

Short, professional, organization-aware.

Example direction:

- thank them for their interest
- confirm inquiry received
- say a team member will follow up
- include Muslim Will contact email/contact

## Confirmed Email Voice And Signature

Antigravity should use these approved values in the outbound email system:

- From name: `Mslim Will`
- HTML email: `Yes`
- Signature: `Msulim ewill team`

## Required Email Outputs

### 1. Admin notification for general contact

Send to:

- `info@themuslimwill.com`

Subject:

- `[Contact Form] New inquiry from {{full_name}}`

Include:

- full name
- email
- phone
- province / region
- country
- reason for contact
- message
- submission timestamp

### 2. Admin notification for partnership inquiry

Send to:

- `info@themuslimwill.com`

Subject:

- `[Partnership Inquiry] {{organization_name}} - {{contact_name}}`

Include:

- organization name
- contact name
- role / title
- email
- phone
- organization type
- website
- city / province / country
- estimated audience or community size
- partnership interest type
- message
- submission timestamp

### 3. Customer auto-reply for general contact

From:

- `Mslim Will <info@themuslimwill.com>`

Subject:

- `We received your message | Muslim Will`

Body direction:

- thank the user for contacting Muslim Will
- confirm the message was received
- explain that the team will review and reply
- include `info@themuslimwill.com`
- include `+1-877-416-WILL` if desired in footer
- close with:
  - `Msulim ewill team`

### 4. Customer auto-reply for partnership inquiry

From:

- `Mslim Will <info@themuslimwill.com>`

Subject:

- `We received your partnership inquiry | Muslim Will`

Body direction:

- thank the organization for reaching out
- confirm the inquiry was received
- explain that the team will review and follow up
- include `info@themuslimwill.com`
- include `+1-877-416-WILL` if desired in footer
- close with:
  - `Msulim ewill team`

## Security And Spam Protection

Antigravity should include at least basic protection:

1. honeypot field or equivalent anti-spam measure
2. server-side validation
3. email sanitization
4. rate limiting if feasible
5. no exposing SMTP credentials in client code

## Styling Direction

The forms should match the site's premium trust-first visual direction:

- clean cards
- generous spacing
- no cheap contact-plugin look
- strong readability
- calm success/error states
- mobile-first usability

For desktop:

- one-column form is acceptable
- two-column rows may be used for some related fields
- keep the layout simple and serious

## File Areas Likely Needed

### Frontend

- `app/contact/page.tsx`
- `app/contact/contact.module.css`
- `app/for-charities/page.tsx`
- `app/for-charities/charities.module.css`
- new shared form components under `components/forms/`

### Backend

- `app/api/contact/route.ts`

### Environment

- `.env.local`

## Environment Variables Recommended

If Antigravity implements SMTP-based sending, these are the likely environment variables:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `MAIL_FROM`
- `MAIL_REPLY_TO`
- `CONTACT_TO_EMAIL`
- `PARTNERSHIP_TO_EMAIL`

## Confirmed Environment Configuration

Antigravity should use this exact server-side configuration pattern:

```env
SMTP_HOST=mail.themuslimwill.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@themuslimwill.com
SMTP_PASS=SET_IN_ENV_ONLY
MAIL_FROM="Mslim Will <info@themuslimwill.com>"
MAIL_REPLY_TO=info@themuslimwill.com
CONTACT_TO_EMAIL=info@themuslimwill.com
PARTNERSHIP_TO_EMAIL=info@themuslimwill.com
```

Notes:

- `SMTP_PASS` must be entered only in `.env.local` or deployment secrets
- do not hardcode it in source files
- do not commit `.env.local`

## Credentials Needed From Client

To connect the forms to email sending, we need these details from you:

### Required for sending admin notifications and auto-replies

1. SMTP host
2. SMTP port
3. SMTP encryption mode
4. SMTP username
5. SMTP password
6. default sender email
7. destination email for general contact submissions
8. destination email for partnership submissions
9. reply-to email, if different

### Based on your screenshot, the current likely settings are

- SMTP host: `mail.themuslimwill.com`
- SMTP port: `465`
- SMTP security: `SSL/TLS`
- Username: `info@themuslimwill.com`

### Important note

For form sending, we do **not** need IMAP or POP3 unless the team also wants inbox sync behavior.  
SMTP is the main requirement for outbound email.

## Exact Credentials / Access To Provide

Please provide or confirm:

1. Email account to send from
   - example: `info@themuslimwill.com`
2. Password for that mailbox
3. SMTP server
   - likely `mail.themuslimwill.com`
4. SMTP port
   - likely `465`
5. Whether SSL/TLS is required
   - likely yes
6. Destination inbox for general contact forms
   - example: `info@themuslimwill.com`
7. Destination inbox for partnership forms
   - `info@themuslimwill.com`
8. The sender name you want users to see
   - `Mslim Will`
9. Whether HTML emails are approved
   - `yes`
10. Email signature name
   - `Msulim ewill team`

## Recommended Credential Setup

Best practice is:

1. use one mailbox for sending
2. optionally use separate destination inboxes for routing
3. keep credentials only in server environment variables
4. never hardcode credentials in the repo

### Recommended starting setup

- Sending mailbox: `info@themuslimwill.com`
- General form destination: `info@themuslimwill.com`
- Partnership form destination: `info@themuslimwill.com`
- Sender name: `Mslim Will`
- Email format: `HTML`
- Signature name: `Msulim ewill team`

## Optional Better Setup

If you want cleaner routing later, you can create:

- `info@themuslimwill.com`
- `partnerships@themuslimwill.com`
- `noreply@themuslimwill.com`

Then use:

- `noreply@themuslimwill.com` for customer confirmations
- `info@themuslimwill.com` for regular inquiries
- `partnerships@themuslimwill.com` for organization inquiries

## Execution Order For Antigravity

### Phase 1: UX and content

1. design the contact form layout
2. design the partnership form layout
3. finalize field labels and success messages

### Phase 2: build shared system

1. create reusable form component
2. add validation
3. add submission state

### Phase 3: backend integration

1. create API route
2. wire SMTP sending
3. send admin notification email
4. send customer confirmation email
5. use HTML email templates
6. use sender name `Mslim Will`
7. use signature `Msulim ewill team`

### Phase 4: routing and QA

1. test contact submission
2. test partnership submission
3. verify inbox delivery
4. verify customer confirmation email
5. test on mobile

## Success Criteria

This implementation is successful if:

1. users can contact Muslim Will without needing to call or manually draft an email
2. organizations can submit structured partnership requests
3. the team receives clean, readable lead emails
4. the submitter receives a confirmation email
5. the forms feel premium and trustworthy, not generic
6. the routing is clean and future-ready

## Final Guidance For Antigravity

These forms should feel like part of the Muslim Will trust system, not just support utilities.

The general contact form should feel:

- welcoming
- simple
- reassuring

The partnership form should feel:

- structured
- professional
- institution-ready

The implementation should preserve the current brand tone:

- calm
- clear
- premium
- accountable
