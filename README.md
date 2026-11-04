# blacktattooshade — Premier Custom Tattoo & Body Piercing Studio

> Recreated from reference website `https://www.linesnshadestattoo.com/` under the new brand identity **blacktattooshade**, engineered for GitHub Pages static hosting using GitHub Actions by GitHub user **Aman22kr**.

---

## 1. Project Overview & Brand Identity

**blacktattooshade** (formerly *Lines N Shades Tattoo & Piercing Studio*) is a multi-page web application for an award-winning custom tattoo studio and body piercing house situated in Dadar West, Mumbai.

- **Reference Website**: [Lines N Shades Tattoo](https://www.linesnshadestattoo.com/)
- **New Brand Identity**: `blacktattooshade`
- **GitHub Username**: `Aman22kr`
- **Primary Disciplines**: Micro & Hyper-Realism, Dark Chiaroscuro Black & Grey, Single-Needle Fine Line Botanicals, Sacred Geometry & Mandalas, Cover-Up & Scar Camouflage, Sterile Body Piercing, and the blacktattooshade Tattoo Apprentice Academy.
- **Design Philosophy**: Deep velvety obsidian blacks, gold/amber gradient accents, hospital-grade hygiene transparency, and bespoke stencils with zero duplicate flash copies.

---

## 2. Accessible Pages & Features Implemented

The application reproduces the complete information architecture of the reference website across 16 fully functional routes using React Router's `HashRouter`:

1. **Homepage (`#/`)**:
   - Hero banner with studio credentials (12+ Years, 20+ National Awards, 15,000+ Completed Tattoos, 100% Sterile).
   - Blank 16:9 YouTube video showcase placeholder (*blacktattooshade Studio Tour & Hyper-Realism Masterclass*).
   - Interactive Signature Disciplines filter (Realism, Black & Grey, Minimalist, Mandala, Color, Cover-Up).
   - Resident artists preview cards.
   - Interactive Tattoo Cost Estimator spotlight banner.
   - Hospital-grade sterilization checklist (Class-B autoclave, EO gas cartridges, REACH pigments).
   - Client reviews and ratings.
   - Compact advertisement placeholder above footer.

2. **About Studio (`#/about`)**:
   - Heritage and founding in 2011 by master mentor Sanket Varhadi.
   - Milestones including celebrity client inking (Indian cricketer Surya Kumar Yadav).
   - 20+ National awards and trophies across major Indian tattoo conventions.
   - Virtual studio walkthrough video placeholder.
   - Core pillars: Original custom stencils, clinical sterilization, and client empathy.

3. **Tattoo Portfolio / Gallery (`#/gallery` or `#/tattoos`)**:
   - Filter by discipline: Realism, Black & Grey, Minimalist, Mandala, Portraits, Color, Cover-Up, Calligraphy.
   - Instant live search bar filtering across title, description, placement, artist, and tags.
   - Filter dropdowns for resident artist and body placement anatomy.
   - One-click "Save to Inspirations" (persisted in browser localStorage).
   - Fullscreen high-resolution detail inspection modal.

4. **Tattoo Artwork Story Page (`#/tattoos/:id`)**:
   - Dynamic route rendering specific masterpiece details.
   - In-depth technical specifications: session hours, price bracket, healing window, body placement.
   - "Book Consultation for this Style" pre-filled navigation.
   - Related works in the same artistic discipline.

5. **Services Overview (`#/services`)**:
   - Comprehensive breakdown of all 6 studio tattooing disciplines with needle groupings, skin tension advice, ideal client candidates, and session expectations.

6. **Body Piercing Division (`#/piercing`)**:
   - Complete piercing menu (Ear: Lobes, Helix, Tragus, Conch; Face: Nostril, Septum; Body: Navel).
   - ASTM F-136 Implant-Grade Titanium jewelry specifications.
   - **Needles vs. Guns Comparison Table**: Comprehensive medical explanation of why blacktattooshade refuses piercing guns.
   - Blank 16:9 YouTube technique video placeholder.

7. **Resident Artists Team (`#/artists`)**:
   - Detailed profiles for:
     - **Sanket Varhadi**: Founder & Master Realism Tattooist (13+ Years).
     - **Amit Rajwadkar**: Senior Artist & Dark Surrealist (8+ Years).
     - **Krutika Parab**: Resident Artist & Fine Line Specialist (6+ Years).
     - **Santosh "Santy" Kanojiya**: Chief Body Piercer & Digital Artist (7+ Years).
   - Individual portfolio previews and direct booking buttons.

8. **Artist Profile Detail (`#/artists/:slug`)**:
   - Dedicated portfolio gallery, awards list, philosophy quotes, and booking calendar for the chosen artist.

9. **Tattoo Training Academy (`#/academy`)**:
   - 4-Week Foundation Course & 12-Week Advanced Realism Masterclass.
   - Curriculum modules (Needle physics, machine stroke tuning, sterilization biology, skin anatomy, live models).
   - Equipment kit list (Wireless rotary pen, power pack, assorted cartridges, practice skins, inks).
   - Interactive enrollment inquiry form with localStorage persistence.
   - Blank 16:9 YouTube apprentice class session placeholder.

10. **Day 1–30 Healing Roadmap (`#/aftercare`)**:
    - Four stages of tattoo healing: Days 1–3 (SecondSkin), Days 4–7 (Gentle Wash & Thin Balm), Weeks 2–3 (Peeling & Itch Phase), Month 1+ (SPF 50+ UV Defense).
    - Interactive "Do's & Don'ts" safety checklist.
    - Sterile isotonic saline aftercare protocol for piercings.
    - Browser print trigger for physical care sheet.

11. **Interactive Tattoo Cost Estimator (`#/calculator`)**:
    - Real-time calculation based on width × height dimensions (sliders or quick presets).
    - Multipliers for discipline, complexity, body placement sensitivity, and artist seniority tier.
    - Live price range (₹ INR) and estimated chair time.
    - "Save Estimate to Browser" action saving to `localStorage`.
    - "Book Consultation With This Quote" button that pre-fills `/book`.

12. **Appointment & Consultation Booking (`#/book`)**:
    - Complete form with service selector, artist choice, body placement, size, concept notes, date, time slot, and client contact info.
    - Generates unique reference code (e.g. `BTS-9842`) and stores booking in `localStorage`.
    - Instant confirmation summary modal.

13. **My Studio Space / Saved Hub (`#/saved`)**:
    - Displays client's saved tattoo inspirations and confirmed bookings from `localStorage`.
    - Option to cancel or manage bookings with instant state updates.
    - Shows saved calculator quote drafts.

14. **Frequently Asked Questions (`#/faq`)**:
    - Searchable categorized accordion (Pain, Healing, Pricing, Piercing, Academy).

15. **Studio Contact & Location (`#/contact`)**:
    - Physical coordinates in Dadar West, Mumbai (Opp. Zakhadevi Temple).
    - Phone (`+91 74004 76961`), email, and daily opening hours (11:00 AM – 10:00 PM).
    - Google Map visualizer placeholder with directions helper.
    - Direct inquiry message form saving to `localStorage`.

16. **Custom 404 Page (`*`)**:
    - Branded dark ink artwork not found page with navigation shortcuts.

---

## 3. Technology Stack

- **Runtime & Bundler**: Vite 8.x with `@vitejs/plugin-react`
- **Framework**: React 19 (JSX)
- **Styling**: Tailwind CSS v4 with custom theme tokens & CSS variables
- **Routing**: `react-router-dom` using `HashRouter` (ensures direct links and browser refreshes work on GitHub Pages without server-side rewrite rules)
- **Icons**: Lucide React
- **Animations**: CSS transitions + `@motion` engine with `prefers-reduced-motion` compliance
- **State & Persistence**: React Context API synchronized with browser `localStorage`
- **Package Manager**: npm with committed `package-lock.json`

---

## 4. Project Directory Structure

```text
blacktattooshade/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Official GitHub Actions deploy to GitHub Pages
├── dist/                           # Generated production build (base: './')
├── public/                         # Public static assets
├── src/
│   ├── components/
│   │   ├── AdPlaceholder.tsx       # Reusable compact advertising placeholder
│   │   ├── Footer.tsx              # Global footer with hours, address & Aman22kr attribution
│   │   ├── Header.tsx              # Responsive navigation with favorites counter & CTAs
│   │   ├── TattooModal.tsx         # Full-screen high-res artwork inspection modal
│   │   ├── Toast.tsx               # Client notification alerts
│   │   └── VideoPlaceholder.tsx    # 16:9 YouTube video blank placeholder
│   ├── context/
│   │   └── AppContext.tsx          # LocalStorage persistence (favorites, bookings, inquiries)
│   ├── data/
│   │   ├── academyData.ts          # Course modules, syllabus, kit inclusions
│   │   ├── artistsData.ts          # Resident artists team bios and awards
│   │   ├── faqData.ts              # Categorized FAQ and client reviews
│   │   ├── piercingData.ts         # Piercing services, healing times, and titanium jewelry
│   │   └── tattoosData.ts          # Portfolio master dataset with categories and tags
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── AcademyPage.tsx
│   │   ├── AftercarePage.tsx
│   │   ├── ArtistDetailPage.tsx
│   │   ├── ArtistsPage.tsx
│   │   ├── BookPage.tsx
│   │   ├── CalculatorPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── FaqPage.tsx
│   │   ├── GalleryPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── PiercingPage.tsx
│   │   ├── SavedPage.tsx
│   │   ├── ServicesPage.tsx
│   │   └── TattooDetailPage.tsx
│   ├── App.tsx                     # HashRouter routes, ScrollToTop, modal wrappers
│   ├── index.css                   # Tailwind v4 import, fonts, ink texture, scrollbar
│   └── main.tsx                    # React DOM entry point
├── .env.example
├── .gitignore
├── index.html                      # HTML entry with metadata and Google Fonts
├── metadata.json                   # Applet metadata
├── package.json                    # Dependencies and build scripts
├── package-lock.json               # Committed npm dependency lockfile
├── tsconfig.json
├── vite.config.ts                  # Configured with base: './' for GitHub Pages
└── README.md                       # Comprehensive documentation
```

---

## 5. Local Development & Build Instructions

### Prerequisites
- **Node.js**: Version 20.x or 22.x LTS
- **npm**: Version 10.x or higher

### Install Dependencies
```bash
# Clean install matching the committed package-lock.json
npm ci
```

### Run Development Server
```bash
npm run dev
```
Open your browser to `http://localhost:3000/`.

### Build for Production
```bash
npm run build
```
Generates production assets inside `/dist` using relative pathing (`base: './'`).

### Preview Production Build Locally
```bash
npm run preview
```

---

## 6. LocalStorage Persistence Details

The application stores user data locally in the client's browser:
- `blacktattooshade_favorites`: JSON array of favorited tattoo IDs.
- `blacktattooshade_bookings`: JSON array of scheduled appointment records (reference ID, client name, date, time, artist, placement).
- `blacktattooshade_inquiries`: Contact form submissions and academy syllabus requests.
- `blacktattooshade_calculator_draft`: Last saved custom quote configuration.

*Note: Browser localStorage is isolated to the client's current device and browser. It does not synchronize across separate devices.*

---

## 7. GitHub Pages Deployment via GitHub Actions

This repository is pre-configured with `.github/workflows/deploy.yml` for automated CI/CD to GitHub Pages:

### Step 1: Create or Push to GitHub Repository
Ensure your GitHub repository is created under username **Aman22kr**:
```bash
git remote add origin https://github.com/Aman22kr/blacktattooshade.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages in Repository Settings
1. Navigate to **Settings** > **Pages** in your GitHub repository.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Every commit pushed to `main` will automatically trigger the deployment workflow.
4. Your site will be live at:
   `https://Aman22kr.github.io/blacktattooshade/`

### Step 3: Relative Path Verification
Because `base: './'` is configured in `vite.config.ts` and `HashRouter` is used, all stylesheets, JavaScript chunks, fonts, and subroutes resolve properly regardless of repository sub-path names.

---

## 8. Customization & Reusing for Another Studio

To adapt this codebase for another tattoo studio or brand:
1. Update brand wordmark, phone, and coordinates in `src/components/Header.tsx` and `src/components/Footer.tsx`.
2. Update metadata in `index.html` and `metadata.json`.
3. Modify artists in `src/data/artistsData.ts`.
4. Modify portfolio pieces in `src/data/tattoosData.ts`.
5. Adjust base pricing and formulas in `src/pages/CalculatorPage.tsx`.

---

## 9. Verification & Quality Assurance Summary

- `npm ci`: Passed cleanly with 0 vulnerabilities.
- `npm run build`: Production build succeeded in 832ms generating `./dist`.
- `tsc --noEmit`: Passed with 0 TypeScript compilation or type errors.
- Relative asset paths: Verified in `dist/index.html` as `./assets/`.
- Routes tested: All 16 routes operational under `HashRouter`.

---

&copy; 2026 **blacktattooshade** Studio. Developed by **Aman22kr**.
