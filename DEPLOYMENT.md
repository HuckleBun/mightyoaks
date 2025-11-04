# Deployment Guide

This guide will help you deploy your Mighty Oaks Enrichment Center website to various hosting platforms.

## Quick Deploy Options

### 1. Vercel (Recommended - Free for personal/small projects)

Vercel is created by the Next.js team and offers the best integration.

**Steps:**

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Sign up with your Git provider
4. Click "New Project"
5. Import your repository
6. Vercel will auto-detect Next.js - just click "Deploy"
7. Your site will be live in minutes!

**Custom Domain:**

- Go to your project settings in Vercel
- Add your custom domain (e.g., mightyoaks.org)
- Follow DNS configuration instructions

### 2. Netlify (Alternative free option)

**Steps:**

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy!

### 3. Self-Hosted (VPS/Dedicated Server)

**Requirements:**

- Node.js 18+ installed
- Process manager (PM2 recommended)
- Nginx or Apache for reverse proxy

**Steps:**

1. **Build the application:**

```bash
npm install
npm run build
```

2. **Install PM2:**

```bash
npm install -g pm2
```

3. **Start the application:**

```bash
pm2 start npm --name "moec-web" -- start
pm2 save
pm2 startup
```

4. **Configure Nginx (reverse proxy):**

```nginx
server {
    listen 80;
    server_name mightyoaks.org www.mightyoaks.org;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

5. **Set up SSL with Let's Encrypt:**

```bash
sudo certbot --nginx -d mightyoaks.org -d www.mightyoaks.org
```

## Environment Variables

If you need to add environment variables (for API keys, email services, etc.):

1. Create `.env.local` file in your project root:

```env
# Email Service
EMAIL_API_KEY=your_api_key_here
EMAIL_FROM=info@mightyoaks.org

# Other settings
NEXT_PUBLIC_SITE_URL=https://mightyoaks.org
```

2. **For Vercel/Netlify:**
   - Add environment variables in the project settings dashboard
   - Prefix public variables with `NEXT_PUBLIC_`

## Email Service Setup

To enable the contact form to send actual emails:

### Option 1: Resend (Recommended - Simple and affordable)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Install the package:

```bash
npm install resend
```

4. Update `app/api/contact/route.ts`:

```typescript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();

  await resend.emails.send({
    from: "noreply@mightyoaks.org",
    to: "info@mightyoaks.org",
    subject: `Contact Form: ${data.subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
```

### Option 2: SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create an API key
3. Install: `npm install @sendgrid/mail`
4. Follow similar pattern to Resend example above

### Option 3: AWS SES

Best for high volume, requires AWS account setup.

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify mobile responsiveness
- [ ] Test contact form submission
- [ ] Check that navigation works on all pages
- [ ] Set up custom domain
- [ ] Configure SSL certificate
- [ ] Set up email notifications
- [ ] Add Google Analytics (optional)
- [ ] Test performance with Lighthouse
- [ ] Set up monitoring/uptime alerts

## Performance Optimization

Next.js automatically optimizes your site, but you can enhance it further:

1. **Add images to `public/` folder** and use Next.js `<Image>` component
2. **Enable caching** in your hosting provider
3. **Use CDN** (Vercel/Netlify include this automatically)
4. **Optimize fonts** - already using `next/font` for Google Fonts

## Monitoring

**Free options:**

- Vercel Analytics (if using Vercel)
- Google Analytics
- Uptime Robot for monitoring

## Support

For deployment issues:

- Next.js docs: https://nextjs.org/docs/deployment
- Vercel support: https://vercel.com/support
- Community: Next.js Discord or Stack Overflow

## Updating the Site

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to your Git repository
4. Vercel/Netlify will auto-deploy the changes
5. For self-hosted:
   ```bash
   git pull
   npm install
   npm run build
   pm2 restart moec-web
   ```
