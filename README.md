# Gen 3 IV Hydration + Wellness

A modern wellness practice website built with Next.js App Router. The site features a cinematic hero video, service-driven sections, a rotating testimonial carousel, FAQ content, and a new blog hub for insights and updates.

## Overview

Gen 3 is a marketing and informational site for a wellness clinic. It emphasizes clarity, trust, and conversion with:
- A video hero with dark overlay for readability
- Strong CTA placement and “We’re here to help” messaging
- Testimonial carousel with continuous rotation
- FAQ section tailored for homepage
- Service navigation and detailed service pages
- Blog landing page with article placeholders

## Features

- App Router architecture with clean section components
- Smooth, in-view animations powered by Motion
- Tailwind CSS v4 with custom design tokens
- Responsive layout and polished typography
- Hero background video (`public/video/Hero-F.mp4`)
- Continuous testimonial carousel (3 visible, 6 total)
- FAQ accordion component
- Blog index and slug route with “coming soon” articles

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Motion (Framer Motion successor)
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- pnpm (recommended) or npm/yarn/bun

### Install

```bash
pnpm install
```

### Run Dev Server

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Scripts

```bash
pnpm dev      # start dev server
pnpm build    # build for production
pnpm start    # start production server
pnpm lint     # run eslint
```

## Project Structure

- `app/` Next.js App Router pages
- `components/` reusable components and sections
- `components/features/` major homepage sections
- `public/` static assets (images, video)
- `lib/` configuration and shared utilities

## Content Notes

- Hero video: `public/video/Hero-F.mp4`
- Team photo: `public/Meet-Team.webp`
- Testimonials: `components/features/testimonials-carousel.tsx`
- FAQ: `components/features/home-faq.tsx`
- Blog: `app/blog/page.tsx` and `app/blog/[slug]/page.tsx`

## Deployment

This site is ready to deploy on Vercel or any Next.js-compatible host.

```bash
pnpm build
pnpm start
```

## License

Private client project. All rights reserved.
