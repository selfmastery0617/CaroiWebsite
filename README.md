# Caroi LLC — Marketing Website

A production-ready marketing website for **Caroi LLC**, a data analytics
business. Built as a single-page marketing experience with supporting legal
pages, using Next.js App Router, React, TypeScript, and Tailwind CSS.

## Overview

The site communicates what Caroi LLC does (data analysis, business
intelligence, dashboards, reporting, and data visualization), establishes
credibility, and provides a working contact form architecture that is ready
to be connected to a real email provider.

No fabricated company facts (customers, testimonials, team size, founding
year, certifications, etc.) are included anywhere on the site. Every piece
of real-world business information that could not be assumed is centralized
as an obvious placeholder — see [Placeholders to replace](#placeholders-to-replace).

## Technology stack

- **Next.js 16** (App Router, Turbopack build)
- **React 19**
- **TypeScript 5** (strict mode)
- **Tailwind CSS 4**
- No UI/animation/charting libraries — all visuals (charts, KPI cards, the
  hero graphic, icons) are hand-built with SVG, CSS, and React.

## Folder structure

```
app/                     Routes (App Router)
  layout.tsx             Root layout, fonts, metadata, JSON-LD
  page.tsx               Home page — composes all marketing sections
  globals.css            Tailwind import + design tokens
  privacy/page.tsx        Privacy Policy page
  terms/page.tsx          Terms of Use page
  not-found.tsx           Custom 404 page
  sitemap.ts              Dynamic sitemap.xml
  robots.ts               Dynamic robots.txt
  icon.svg                Favicon source
  api/contact/route.ts    Contact form API route (Resend-ready)

components/              Reusable UI building blocks
  ui/                    Low-level primitives (Button, Container, Badge)
  Navbar.tsx, MobileNav.tsx
  Hero.tsx, AnalyticsVisual.tsx
  TrustSection.tsx, Services.tsx, ServiceCard.tsx, icons.tsx
  Outcomes.tsx, DashboardShowcase.tsx
  WhyCaroi.tsx, Process.tsx, About.tsx, FAQ.tsx
  Contact.tsx, ContactForm.tsx, CTA.tsx, Footer.tsx
  SectionHeading.tsx

config/site.ts           Centralized business info, nav, and page content
lib/validation.ts        Shared contact form validation logic
```

## Local development

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

`npm run build` type-checks the project and lints it as part of the build;
both must pass with zero errors for the build to succeed.

## Environment configuration

Copy `.env.example` to `.env.local` and fill in what's available:

```bash
cp .env.example .env.local
```

| Variable               | Purpose                                                        |
| ----------------------- | --------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`  | Canonical production URL, used in metadata, sitemap, and robots |
| `CONTACT_EMAIL`         | Inbox that should receive contact form submissions               |
| `RESEND_API_KEY`        | API key for [Resend](https://resend.com), used to send contact form emails |

The site builds and runs correctly with none of these set. Without
`RESEND_API_KEY` and `CONTACT_EMAIL`, the contact form still validates input
normally, but submissions return a clear "not connected yet" message
instead of silently pretending to send an email — see
`app/api/contact/route.ts`.

### Connecting the contact form to Resend

1. Create a [Resend](https://resend.com) account and verify a sending domain.
2. Set `RESEND_API_KEY` and `CONTACT_EMAIL` in your environment (locally in
   `.env.local`, in production via your hosting provider's dashboard).
3. Update the `from` address in `app/api/contact/route.ts` to use your
   verified sending domain instead of the Resend testing address.

The API route includes a honeypot field, input length limits, control
character stripping, and HTML-escaping of all interpolated values before
constructing the outbound email.

## Customization

Nearly all business information lives in **`config/site.ts`**:

- Company name, tagline, and description
- Contact email, phone, and location placeholders
- Social links (only rendered once a real URL replaces the placeholder)
- Primary navigation links
- Services, business outcomes, differentiators, process steps, and FAQs

Editing that file updates the corresponding sections across the site
without touching component code.

Design tokens (colors, shadows, font) live in `app/globals.css` under the
`@theme` block.

## Placeholders to replace

These are intentionally obvious so they're easy to find and replace before
launch. Search the codebase for `YOUR_` to find every instance.

| Placeholder          | Location                          | Used for                          |
| --------------------- | ---------------------------------- | ---------------------------------- |
| `YOUR_EMAIL`          | `config/site.ts` (`contact.email`) | Footer, contact section, legal pages |
| `YOUR_PHONE`          | `config/site.ts` (`contact.phone`) | Contact section                     |
| `YOUR_LOCATION`       | `config/site.ts` (`contact.location`) | Contact section                  |
| `YOUR_SITE_URL`       | `NEXT_PUBLIC_SITE_URL` env var     | Metadata, canonical URLs, sitemap, robots.txt |
| `YOUR_LINKEDIN_URL`   | `config/site.ts` (`social.linkedin`) | Footer (hidden until configured) |

The JSON-LD structured data in `app/layout.tsx` only includes fields that
are actually known (name, url, description) — no address, phone number,
founding date, or other unverified facts are included. Add fields there
once they are confirmed.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1` per page,
  and a logical heading hierarchy throughout.
- Skip-to-content link, visible focus states, and keyboard-operable
  navigation, including the mobile menu (closes on Escape, traps scroll).
- Form fields have associated labels, `aria-invalid`, and
  `aria-describedby` error messages.
- `prefers-reduced-motion` disables animation and smooth scrolling.

## Deployment (Vercel)

1. Create a GitHub repository and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. In the Vercel project settings, add the environment variables from
   `.env.example` (`NEXT_PUBLIC_SITE_URL`, `CONTACT_EMAIL`,
   `RESEND_API_KEY`) with your real values.
4. Deploy. Vercel will run `npm run build` automatically.
5. Attach your custom domain under **Project Settings → Domains**, and add
   both the apex domain and `www` subdomain, then let Vercel manage the
   www/non-www redirect (add the one you don't use as a redirect to the
   other in the Domains panel).
6. Vercel provisions and renews HTTPS certificates automatically; verify the
   padlock/HTTPS after DNS propagates.
