# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio project directory for showcasing web design, UX/UI work, and content creation capabilities. The portfolio should reflect expertise in:
- Professional web design (15+ years experience)
- UX/UI design and neuromarketing
- Content creation for social media platforms
- Multilingual capabilities (Spanish/English)

## Development Philosophy

- Always communicate in Spanish ("habla en español")
- Focus on creating engaging, viral-worthy content presentations
- Apply neuromarketing principles to UX/UI decisions
- Prioritize organic engagement and high conversion potential
- Design with consumer psychology in mind

## Git Workflow

- Make all commits in Spanish
- Never push to main without explicit instruction
- Work on staging branch for all worktree pushes
- Always work within current directory - never navigate outside
- Commit after completing each full development phase
- Run tests before each commit to ensure quality
- Continue development without stopping until all tasks are complete

## Design Approach

When designing this portfolio:
- Think as a senior UX/UI designer and product designer
- Apply neuromarketing principles to layout and user flow
- Optimize for engagement and conversion
- Consider multi-platform content adaptation (LinkedIn, Twitter, Instagram)
- Ensure responsive design for all device types
- Focus on visual storytelling and personal brand narrative

## Project Goals

This portfolio should serve as:
- A showcase of web design expertise
- A platform for content creation capabilities
- A tool for generating freelance opportunities
- A demonstration of UX/UI and neuromarketing skills
- A multilingual professional presence

## Tech Stack

### Core Technologies
- **Framework:** Astro (optimized for content sites and portfolios)
- **Styling:** Tailwind CSS (utility-first, rapid development)
- **Animations:** GSAP (GreenSock) - 2D animations only, no WebGL
- **Graphics:** Lottie (for After Effects animations)
- **Languages:** JavaScript/TypeScript

### Deployment
- **Infrastructure:** Personal VPS with Dockploy integration
- **CI/CD:** Docker containers for consistent deployment
- **Hosting:** Self-hosted on existing VPS infrastructure

### Key Advantages of This Stack
- **Astro:** Native i18n support, perfect SEO, static generation
- **Tailwind:** 5x faster development, consistent design system
- **GSAP:** Industry-standard animations, now free, no WebGL complexity
- **Bilingual optimization:** Built-in Spanish/English support

## Internationalization (i18n)

### Language Strategy
- **Primary language:** Spanish (main target market)
- **Secondary language:** English (international reach)
- **URL structure:** `/es/` and `/en/` prefixes
- **SEO:** Automatic hreflang tags and sitemap generation

### Content Organization
```
src/
  pages/
    es/          # Spanish content (primary)
      index.astro
      sobre-mi.astro
      proyectos.astro
      contacto.astro
    en/          # English content (secondary)
      index.astro
      about.astro
      projects.astro
      contact.astro
```

### Development Guidelines for Bilingual Content
- Always develop Spanish content first
- Ensure cultural adaptation, not just translation
- Use appropriate meta tags for each language
- Consider different conversion strategies per market
- Apply neuromarketing principles adapted to each culture

## Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro check  # Type checking
```

### Deployment
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
# Dockploy handles automatic deployment to VPS
```

## Performance Optimization

- Astro's island architecture for minimal JavaScript
- Tailwind's automatic purging for minimal CSS
- GSAP optimizations for smooth 60fps animations
- Image optimization with Astro's built-in tools
- SEO-first approach with static generation

## Animation Guidelines

### GSAP Best Practices
- Use hardware-accelerated properties (transform, opacity)
- Implement smooth scroll animations for user engagement
- Create hover effects for interactive elements
- Apply page transitions for professional feel
- No WebGL - stick to 2D DOM animations for reliability

### Lottie Integration
- Use for brand elements (logos, icons)
- Optimize file sizes for web performance
- Implement as progressive enhancements
- Ensure fallbacks for older browsers