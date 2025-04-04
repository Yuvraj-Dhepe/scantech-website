# Scantech Website

A modern, responsive website for Scantech, a leading provider of Automatic Identification and Data Capture (AIDC) solutions. The website showcases Scantech's products, services, and expertise in barcode solutions, EAS systems, POS systems, handheld inkjet printers, and consumables.

## Features

- **Product Catalog**: Browse through various product categories and subcategories
  - Barcode Solutions (Printers & Scanners)
  - EAS Systems
  - POS Systems (Windows, Android, Thermal Printers, Waiter Calling System)
  - Handheld Inkjet Printer
  - Consumables (Labels & Ribbons)
- **Product Search**: Search functionality across all product categories
- **Responsive Design**: Optimized for all device sizes with modern UI elements
- **Contact Form**: Integrated contact form with product inquiry capability
- **E-Waste Management**: Information about responsible electronic waste disposal
- **About Us**: Company information and industries served

## Technologies Used

- **Next.js 15**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code linting

## Getting Started

### Prerequisites

- Node.js (version 18.18.0 or higher)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd scantech-website

# Install dependencies
npm install
```

### Development

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

## Deployment

### Deploying to Vercel

This project is configured for deployment on Vercel, which provides excellent support for Next.js and Git LFS.

1. **Create a Vercel Account**:
   - Go to [vercel.com](https://vercel.com/)
   - Sign up with your GitHub account

2. **Import Your Repository**:
   - From the Vercel dashboard, click "Add New..."
   - Select "Project"
   - Choose your GitHub repository

3. **Configure Project**:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Environment Variables**:
   - Add all the environment variables from your `.env.local` file
   - Required variables are documented in `.env.example`

5. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your site

6. **Custom Domain** (Optional):
   - In your project settings, go to "Domains"
   - Add your custom domain
   - Follow the instructions to configure DNS

## Project Structure

```
scantech-website/
├── public/            # Static assets
│   ├── images/        # Image files
│   └── assets/        # Other assets (downloads, brochures, etc.)
├── src/
│   ├── app/           # Next.js App Router
│   │   ├── about/     # About page
│   │   ├── contact/   # Contact page
│   │   ├── e-waste-management/ # E-waste management pages
│   │   ├── products/  # Products page
│   │   ├── layout.tsx # Root layout
│   │   ├── page.tsx   # Home page
│   │   └── globals.css # Global styles
│   └── data/          # Data files
│       └── products/  # Product data
├── .next/             # Next.js build output (gitignored)
├── next.config.ts     # Next.js configuration
├── postcss.config.mjs # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Contact

Scantech India
Flat No:202, Sai Krishna's Sai Ram Residency,
S.R.Nagar, Hyderabad-500038
Phone: +91 9392455260

## License

Private - All Rights Reserved
