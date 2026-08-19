# Website Development Prompt — SHAHZAD Builders & Developers

## Project Context

Build a complete, modern website for **SHAHZAD Builders & Developers**, a real estate development company. They construct large mixed-use buildings containing apartments, offices, and showrooms. Their current flagship project is in the pre-launch phase, being marketed on Instagram with a "COMING SOON" teaser (red-covered building reveal). The website must support this launch and convert ad traffic into qualified leads and direct unit bookings.

**Brand identity (from existing logo):**
- Primary colors: Deep navy blue (#0A1A3D approx.) and metallic gold (#D4AF37 approx.)
- Secondary: off-white/cream for text on dark backgrounds
- Typography feel: elegant serif/display for the wordmark ("SHAHZAD"), clean modern sans-serif for body copy
- Tagline: "We Build Trust. We Deliver Quality."
- Visual motif: skyline/building silhouette, ornamental divider elements
- Tone: premium, trustworthy, established — despite being a newer brand, avoid anything that reads as "startup" or amateur

---

## Objective

Design and develop a **modern, conversion-focused real estate website** that:
1. Builds credibility and trust for a real estate developer
2. Showcases the building(s) under development with rich detail (floor plans, unit types, pricing, availability)
3. Allows visitors to **directly inquire about or book** specific units (apartments, offices, showrooms)
4. Captures leads from Instagram/social ad traffic effectively
5. Supports a "Coming Soon" pre-launch mode now, with a switch to full listings mode at launch

---

## Site Architecture (Pages)

1. **Home** — Hero (Coming Soon countdown or teaser video/image), project highlights, why choose us, featured units, testimonials, CTA to inquire
2. **Projects/Buildings** — Overview of the flagship project + any future projects; grid/list view
3. **Project Detail Page** — Per building: location map, amenities, construction progress/gallery, floor-by-floor breakdown
4. **Units/Listings** — Filterable catalog: Apartments / Offices / Showrooms, filter by floor, size (sq ft), price range, status (Available/Reserved/Sold)
5. **Unit Detail Page** — Photos/renders, floor plan image, specs (size, bedrooms, facing, floor), price, payment plan, "Book Now" / "Reserve" / "Inquire" CTA
6. **About Us** — Company story, mission, leadership, past track record/credentials
7. **Amenities & Features** — Building-wide facilities (parking, elevators, security, generator/backup, mosque, retail, etc.)
8. **Gallery/Construction Progress** — Photo/video timeline, useful for trust-building during construction
9. **Payment Plans / Investment** — Installment plans, ROI info for investors
10. **Blog/News/Updates** — Launch announcements, construction milestones (also helps SEO)
11. **Contact Us** — Form, WhatsApp click-to-chat, map, office address, phone/email
12. **FAQ** — Common questions on booking process, payment, possession timeline, legal/documentation

---

## Core Features

### Public-facing
- **Direct booking/inquiry system**: Users can select a specific unit and submit a booking request (name, phone, CNIC optional, unit interested in, budget) — stored in a database and optionally sent to WhatsApp/email instantly
- **Live availability status** per unit: Available / Reserved / Sold (color-coded)
- **Interactive floor plan selector** (clickable floor-by-floor or unit-by-unit visual, if feasible)
- **Filters & search**: by type (apartment/office/showroom), price range, size, floor, availability
- **Price/installment calculator**: down payment + monthly installment estimator
- **WhatsApp Business integration**: floating "Chat on WhatsApp" button, pre-filled message per unit
- **Instagram feed embed** on homepage (since marketing is Instagram-led)
- **Countdown timer** for "Coming Soon" launch (homepage hero, removable post-launch)
- **Lead capture popups/forms**: "Get notified at launch" email/phone capture for pre-launch visitors
- **Testimonials/trust section**: client reviews, "as seen on" or credentials if available
- **Google Maps integration** showing project location
- **Virtual tour / 360° view or video walkthrough** section (optional but recommended)
- **Multi-language support**: English + Urdu toggle (recommended for local real estate audience)
- **Mobile-first, fully responsive design**
- **Light/Dark theme toggle**: 
  - Light theme: white/cream background, navy text, gold accents
  - Dark theme: navy background, cream text, gold accents (matches logo's native dark presentation)
  - Theme preference persists (saved locally), respects system preference by default

### Admin/backend (CMS)
- Simple admin panel to:
  - Add/edit/remove units (price, status, images, floor plan)
  - Update construction gallery
  - View and manage booking/inquiry submissions (export to CSV, mark as contacted/converted)
  - Publish blog/news updates
  - Toggle site between "Coming Soon" and "Full Launch" mode
- Role-based access (owner/admin) if multiple staff will manage it

### SEO & Performance
- SEO-optimized (meta tags, structured data/schema.org for RealEstateListing, sitemap, fast Core Web Vitals)
- Optimized image loading (lazy load, next-gen formats)
- Fast page load (<2s target), since Instagram ad traffic bounces quickly
- Open Graph tags for rich link previews when the URL is shared/ads run
- Analytics integration (Google Analytics / Meta Pixel for ad retargeting — important since they're running Instagram ads)

### Trust & Conversion
- Clear CTAs on every page ("Book a Visit", "Reserve Now", "Talk to Us")
- Security/legal transparency section (NOC status, approvals, if applicable)
- SSL, privacy policy, terms page

---

## Recommended Tech Stack
- **Frontend**: Next.js (React) + TypeScript + Tailwind CSS — for SEO-friendly SSR/SSG, fast performance, and easy theming
- **Backend/Database**: Firebase (Firestore) for MVP-speed launch, or Supabase/Postgres if the booking system needs more relational structure (e.g., linking bookings to units, floors, and payment plans)
- **Hosting**: Vercel
- **Forms/notifications**: Integrate booking form submissions with WhatsApp Business API or email (e.g., via a serverless function) so the team gets instant alerts
- **CMS**: Lightweight custom admin panel (matches past NanStack projects) rather than a heavy third-party CMS, to keep it fast and on-brand
- **Analytics**: Google Analytics 4 + Meta Pixel

---

## Design Requirements
- Strictly follow brand palette: navy (#0A1A3D), gold (#D4AF37), cream/off-white
- Use the provided logo as-is; ensure it displays cleanly on both light and dark headers/footers
- Elegant, premium real-estate aesthetic — generous whitespace, high-quality imagery/renders, subtle gold accent lines/dividers (echoing the logo's ornamental divider)
- Avoid generic template look — this should feel custom and high-end, comparable to established property developer sites
- Consistent iconography and card-based layouts for unit listings

---

## Deliverables Requested
1. Full responsive website (all pages listed above)
2. Light/dark theme implementation
3. Functional booking/inquiry system connected to a database + notification (WhatsApp/email)
4. Basic admin panel for managing units, bookings, and content
5. SEO setup + analytics integration
6. Deployment-ready build (Vercel-hosted)

---

*Note: Since the project is currently in "Coming Soon" phase, prioritize building the homepage teaser + lead capture + WhatsApp contact first, with the full listings/booking system ready to activate the moment the client shares real unit data, pricing, and floor plans.*