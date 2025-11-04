# Resend Email Setup Guide

This guide will help you set up Resend to handle contact form submissions.

## Step 1: Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. The free tier includes:
   - 100 emails/day
   - 3,000 emails/month
   - Perfect for contact forms!

## Step 2: Get Your API Key

1. Log in to your Resend dashboard
2. Go to **API Keys** in the left sidebar
3. Click **Create API Key**
4. Give it a name (e.g., "MOEC Website")
5. Select **Full Access** (or at minimum **Sending access**)
6. Copy the API key (you won't be able to see it again!)

## Step 3: Set Up Environment Variables

1. In your project root, create a file named `.env.local`:
   ```bash
   # Windows (PowerShell)
   Copy-Item env.template .env.local

   # Or manually create the file
   ```

2. Open `.env.local` and add your Resend API key:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
   RESEND_FROM_EMAIL=onboarding@resend.dev
   CONTACT_EMAIL_TO=moec@mightyoaks.org
   ```

3. **Important Notes:**
   - The `RESEND_FROM_EMAIL` defaults to `onboarding@resend.dev` for testing
   - To use a custom domain (like noreply@mightyoaks.org), you need to verify your domain in Resend
   - The `CONTACT_EMAIL_TO` is where form submissions will be sent (currently set to moec@mightyoaks.org)

## Step 4: (Optional) Add a Custom Domain

For a more professional setup:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `mightyoaks.org`)
4. Follow the DNS verification steps
5. Once verified, update your `.env.local`:
   ```env
   RESEND_FROM_EMAIL=noreply@mightyoaks.org
   ```

## Step 5: Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to the Contact Us page: [http://localhost:3000/contact-us](http://localhost:3000/contact-us)

3. Fill out and submit the form

4. Check the email at `moec@mightyoaks.org` for the submission

## How It Works

When someone submits the contact form:

1. The form data is sent to `/api/contact`
2. The API route validates the data
3. Resend sends a formatted email to `CONTACT_EMAIL_TO`
4. The email includes:
   - Sender's name and email
   - Phone number (if provided)
   - Subject
   - Message
   - Timestamp
5. You can reply directly to the email, and it will go to the sender's email address

## Email Format

The emails you receive will be nicely formatted with:
- **From:** Sender's name
- **Email:** Sender's email address
- **Phone:** Phone number (if provided)
- **Subject:** Selected subject
- **Message:** The actual message
- **Submitted:** Timestamp of submission

The reply-to address is automatically set to the sender's email, so you can click "Reply" in your email client to respond directly.

## Troubleshooting

### "Email service not configured" error
- Make sure `.env.local` exists in your project root
- Verify that `RESEND_API_KEY` is set correctly
- Restart your development server after changing `.env.local`

### Emails not arriving
- Check your Resend dashboard for errors
- Verify the `CONTACT_EMAIL_TO` address is correct
- Check your spam folder
- Ensure your API key has sending permissions

### "Invalid domain" error
- If using a custom from address, verify the domain in Resend first
- Use `onboarding@resend.dev` for testing

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the environment variables in your hosting platform's dashboard:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `CONTACT_EMAIL_TO`

2. For Vercel:
   - Go to your project → Settings → Environment Variables
   - Add each variable
   - Redeploy your site

3. For custom domains, make sure to verify the domain in Resend

## Rate Limits

Resend free tier limits:
- 100 emails per day
- 3,000 emails per month

If you need more, check Resend's pricing plans.

## Support

- Resend Documentation: [https://resend.com/docs](https://resend.com/docs)
- Resend Support: [https://resend.com/support](https://resend.com/support)

