# Quick Start Guide

Get your Mighty Oaks Enrichment Center website up and running in minutes!

## Prerequisites

Make sure you have the following installed:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

To check if you have Node.js installed:

```bash
node --version
```

## Installation Steps

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages (React, Next.js, Tailwind CSS, etc.)

### 2. Start Development Server

Run the development server:

```bash
npm run dev
```

### 3. View Your Website

Open your browser and go to:

```
http://localhost:3000
```

You should see the Mighty Oaks Enrichment Center homepage! 🎉

## Making Changes

### Edit Content

All page content is in the `app/` folder:

- **Home page**: `app/page.tsx`
- **Our Program**: `app/our-program/page.tsx`
- **Class Information**: `app/class-information/page.tsx`
- **Tuition and Fees**: `app/tuition-and-fees/page.tsx`
- **Enrollment**: `app/enrollment/page.tsx`
- **Contact Us**: `app/contact-us/page.tsx`

Just edit the text and save - the page will auto-refresh!

### Customize Colors

Edit colors in `tailwind.config.ts`:

```typescript
colors: {
  oak: {
    // Customize these oak brown tones
    700: '#6f4e27',
    800: '#5c4024',
  }
}
```

### Add Images

1. Place images in the `public/` folder
2. Use them in your pages:

```typescript
import Image from "next/image";

<Image src="/your-image.jpg" alt="Description" width={500} height={300} />;
```

### Update Navigation

Edit `components/Navbar.tsx` to change menu items.

## Building for Production

When you're ready to deploy:

```bash
npm run build
npm start
```

This creates an optimized production build.

## Next Steps

1. **Customize Content**: Update all pages with your specific information
2. **Add Images**: Add photos to the `public/` folder and reference them in pages
3. **Set Up Email**: Configure the contact form to send emails (see DEPLOYMENT.md)
4. **Deploy**: Choose a hosting platform (see DEPLOYMENT.md)

## Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run production server locally
npm start

# Check for errors
npm run lint
```

## Project Structure

```
moec-web/
├── app/                    # All your pages
│   ├── page.tsx           # Home page
│   ├── our-program/       # Our Program page
│   ├── class-information/ # Class Information page
│   ├── tuition-and-fees/  # Tuition page
│   ├── enrollment/        # Enrollment page
│   ├── contact-us/        # Contact page
│   ├── api/               # Backend API routes
│   │   └── contact/       # Contact form handler
│   ├── layout.tsx         # Main layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navbar.tsx        # Navigation
│   └── Footer.tsx        # Footer
├── public/               # Static files (images, etc.)
└── README.md             # Main documentation
```

## Troubleshooting

### Port 3000 already in use?

Change the port:

```bash
npm run dev -- -p 3001
```

### Changes not showing?

1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Restart dev server (`Ctrl+C` then `npm run dev`)

### Installation errors?

1. Delete `node_modules` folder and `package-lock.json`
2. Run `npm install` again

## Need Help?

- **Next.js Documentation**: https://nextjs.org/docs
- **React Documentation**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs

## Tips

✅ **Save often** - Changes auto-refresh in development
✅ **Test on mobile** - Use browser dev tools to test responsive design
✅ **Check console** - Open browser console (F12) to see any errors
✅ **Use TypeScript** - It will help catch errors before runtime

Happy coding! 🚀
