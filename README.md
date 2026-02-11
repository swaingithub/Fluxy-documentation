# Fluxy Documentation Site

This is the official documentation platform for the [Fluxy Framework](https://github.com/swaingithub/fluxy). Built with Next.js, TypeScript, Tailwind CSS, and Fumadocs.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Documentation**: [Fumadocs](https://fumadocs.vercel.app/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Features

- 🚀 **Atomic Reactivity**: Fast documentation loading.
- 🔍 **Keyboard Search**: CMD+K to search across all pages.
- 🌙 **Dark Mode**: Seamless theme switching.
- 📱 **Mobile First**: Responsive design for all devices.
- 📦 **MDX Support**: Write docs in Markdown with React components.
- ✨ **Premium UI**: Modern SaaS aesthetic with subtle animations.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Deployment Guide

### Vercel (Recommended)

1. Push your code to a GitHub repository.
2. Connect the repository to [Vercel](https://vercel.com).
3. Vercel will automatically detect Next.js and deploy.

### GitHub Pages (Static)

To deploy as a static site:

1. Update `next.config.ts`:
   ```ts
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
   };
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. The `out` directory will contain the static files.

## Project Structure

- `content/docs`: MDX files for the documentation.
- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable UI components.
- `src/lib`: Logic and configuration (Fumadocs loader).
- `source.config.ts`: Fumadocs MDX configuration.

---

Built with ❤️ for the Flutter community.
