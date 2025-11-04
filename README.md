# Mighty Oaks Enrichment Center Website

A modern, fullstack website for Mighty Oaks Enrichment Center - a Christ-centered homeschool enrichment program.

## Tech Stack

- **Framework**: Next.js 14 (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment Ready**: Vercel, Netlify, or any Node.js hosting

## Features

- ✨ Modern, clean design with traditional styling
- 📱 Fully responsive layout
- 🎨 Custom color scheme with oak and earth tones
- 📄 All original pages from the website:
  - Home (with Statement of Purpose and Faith)
  - Our Program
  - Class Information
  - Tuition and Fees
  - Enrollment
  - Contact Us
- 📧 Contact form (ready for backend integration)
- ♿ Accessible navigation
- 🚀 Server-side rendering ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
moec-web/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── our-program/       # Our Program page
│   ├── class-information/ # Class Information page
│   ├── tuition-and-fees/  # Tuition and Fees page
│   ├── enrollment/        # Enrollment page
│   ├── contact-us/        # Contact Us page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navbar.tsx        # Navigation bar
│   └── Footer.tsx        # Footer
├── public/               # Static assets (images, etc.)
└── ...config files
```

## Customization

### Colors

The website uses a custom color palette defined in `tailwind.config.ts`:

- **Oak tones**: Warm brown colors reflecting the "Mighty Oaks" brand
- **Primary blues**: Soft, traditional blue tones
- **Light backgrounds**: Clean, professional appearance

### Content

All page content can be edited in the respective files under the `app/` directory.

## Backend Integration

The contact form (`app/contact-us/page.tsx`) is ready for backend integration. To connect it to your server:

1. Create an API route in `app/api/contact/route.ts`
2. Update the form submission handler to POST to your API endpoint
3. Add email service integration (e.g., SendGrid, AWS SES, Resend)

Example API route structure:

```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Process form data
  // Send email
  return Response.json({ success: true });
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

- **Netlify**: Connect your Git repository
- **Self-hosted**: Run `npm run build` and deploy the `.next` folder

## License

© 2025 Mighty Oaks Enrichment Center

## Support

For questions or issues, please contact the development team.
