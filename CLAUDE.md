# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Alventis Finance Hub is a multilingual finance consultancy website built with React, TypeScript, and Vite. It serves as a business website for Viktoria Oris, specializing in VAT compliance and finance optimization for multinational companies in Belgium.

**Tech Stack:**
- Vite (build tool)
- React 18 with TypeScript
- Tailwind CSS with shadcn/ui components
- React Router for routing
- TanStack Query for state management

## Development Commands

```bash
# Development
npm run dev                    # Start development server on port 8080
npm i                         # Install dependencies

# Building
npm run build                 # Full production build (client + server + prerender)
npm run build:client          # Build client-side only
npm run build:server          # Build server-side rendering
npm run build:prerender       # Generate prerendered static pages
npm run build:dev            # Development build

# Code Quality
npm run lint                  # Run ESLint
npm run preview              # Preview production build
```

## Architecture

### Multi-language System
The application supports Dutch (nl), English (en), and Spanish (es) through a centralized translation system:
- **LanguageContext** (`src/contexts/LanguageContext.tsx`) provides translations via `useLanguage()` hook
- All text content is stored in the `translations` object with nested keys
- Language preference persists in localStorage
- Default language is Dutch (nl)

### Component Structure
- **Page components** in `src/pages/` (Index, Privacy, LegalNotice)
- **UI components** in `src/components/` (Hero, Services, About, etc.)
- **shadcn/ui components** in `src/components/ui/`
- Each section is a separate component imported into the main Index page

### SEO & Performance
- **Centralized SEO** via `src/lib/seo.ts` with structured data generation
- **Performance optimization** utilities in `src/lib/performance.ts`
- **Environment configuration** in `src/lib/env.ts`
- Images are optimized as WebP format with proper lazy loading

### Routing
- Single Page Application with React Router
- Routes: `/` (home), `/privacy`, `/impressum`
- `ScrollToTopOnNavigate` component handles page transitions

## Environment Variables

**Required:**
- `VITE_GA_MEASUREMENT_ID` - Google Analytics measurement ID

**Optional:**
- `VITE_SITE_URL` - Canonical site URL (defaults to https://alventis.be)
- `VITE_CONTACT_EMAIL` - Business contact email (defaults to viktoria@alventis.be)

Copy `.env.example` to `.env.local` for local development.

## Key Patterns

### Adding New Translations
1. Add keys to all three languages in `LanguageContext.tsx`
2. Use the `t()` function from `useLanguage()` hook
3. Follow the nested key pattern: `section.subsection.key`

### Performance Considerations
- Images should be WebP format and placed in `public/assets/`
- Use `loading="lazy"` for below-fold images, `loading="eager"` for above-fold
- Critical images are preloaded via `preloadImage()` utility
- The site supports SSR with hydration fallbacks

### Component Development
- Follow existing shadcn/ui patterns for consistency
- Use Tailwind CSS with custom color variables defined in `src/index.css`
- All forms should include proper accessibility attributes
- Images require explicit width/height for CLS prevention

## Deployment

The site is configured for Vercel deployment with SSR capabilities. The build process generates both client and server bundles with prerendering for static pages.

## Contact Form Integration

Contact forms throughout the site should integrate with the existing toast notification system using the `useToast` hook for user feedback.