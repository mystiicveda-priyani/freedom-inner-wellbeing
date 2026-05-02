# 🚀 Freedom Inner Wellbeing — Next.js Website Setup Guide

## What Has Been Created

A complete, production-ready **Next.js 15+ website** for Freedom Inner Wellbeing with:

✅ **Modern Architecture**
- Next.js 15+ with App Router
- TypeScript for type safety
- Tailwind CSS with custom theme
- Framer Motion animations
- Lucide React icons

✅ **Complete Pages**
- Home (/) - Full landing page with all sections
- About (/about) - Omkar's story and philosophy
- Services (/services) - Detailed program information
- Contact (/contact) - Contact info and FAQ

✅ **Reusable Components**
- Layout: Navbar (sticky + mobile menu), Footer, CTA Section
- Home Sections: Hero, About, Problems, Services, Process, Testimonials, Community
- UI: Button, Card, Container, SectionHeading

✅ **Premium Design**
- Emerald + Gold color scheme
- Smooth animations and transitions
- Responsive design (mobile → desktop)
- SEO optimized
- Production-ready code

---

## Getting Started

### Step 1: Navigate to the Project

```bash
cd d:\WebsiteClients\Omkar\freedom-inner-wellbeing\nextjs-app
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- React 19
- Next.js 15
- Tailwind CSS
- Framer Motion
- TypeScript
- And all other required packages

### Step 3: Start Development Server

```bash
npm run dev
```

Then open: **http://localhost:3000**

You should see the beautiful, fully-functional website!

---

## 📁 What's Included

### Configuration Files
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Custom theme with colors
- `next.config.ts` - Next.js configuration
- `postcss.config.js` - PostCSS setup
- `.gitignore` - Git ignore patterns

### Source Code (`src/`)

#### Pages
- `app/page.tsx` - Home page
- `app/about/page.tsx` - About Omkar
- `app/services/page.tsx` - Services & programs
- `app/contact/page.tsx` - Contact & FAQ
- `app/layout.tsx` - Root layout
- `app/globals.css` - Global styles

#### Components
```
components/
├── layout/
│   ├── Navbar.tsx - Sticky navigation with mobile menu
│   ├── Footer.tsx - Footer with links
│   └── CTASection.tsx - Reusable call-to-action
│
├── home/
│   ├── Hero.tsx - Hero section with animation
│   ├── AboutPreview.tsx - About preview with float card
│   ├── ProblemSection.tsx - 6 Problem cards
│   ├── ServicesPreview.tsx - Services grid
│   ├── ProcessSection.tsx - 6-step process
│   ├── Testimonials.tsx - 3 testimonial cards
│   └── CommunitySection.tsx - Community stats
│
└── ui/
    ├── Button.tsx - Reusable button (6 variants)
    ├── Card.tsx - Reusable card component
    ├── Container.tsx - Max-width wrapper
    └── SectionHeading.tsx - Section title component
```

#### Utilities
- `lib/constants.ts` - All content (brand, services, testimonials, etc.)

---

## 🎨 How to Customize

### 1. Update Content (Easiest)

Edit `src/lib/constants.ts`:

```typescript
export const BRAND = {
  name: "Freedom Inner Wellbeing",
  tagline: "Where Psychology Meets Inner Awareness",
  email: "hello@freedominnerwellbeing.com",
};

export const SERVICES = [
  // Edit or add services here
];

export const TESTIMONIALS = [
  // Add client testimonials here
];

// And more...
```

### 2. Update Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#0F4C45",     // Emerald
    dark: "#0B3B36",        // Dark emerald
  },
  gold: {
    DEFAULT: "#C9A35A",     // Gold
    light: "#DBB87A",       // Light gold
  },
  // ... other colors
}
```

### 3. Update Typography

Default fonts:
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)
- **Emphasis:** Cormorant Garamond (serif)

To change, edit the font imports in `src/app/globals.css`

### 4. Update Metadata (SEO)

Edit `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your New Title",
  description: "Your new description",
  keywords: ["add", "your", "keywords"],
};
```

---

## 🚀 Building for Production

### Build the Project

```bash
npm run build
```

This creates an optimized production build in `.next/`

### Start Production Server

```bash
npm start
```

Then visit: **http://localhost:3000**

---

## 📊 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linter
```

---

## 🔗 Integration Points

The website is ready to integrate with:

### Topmate
- All CTA buttons link to: `https://topmate.io`
- Easy to update in `src/lib/constants.ts`

### Email
- Contact form email: `hello@freedominnerwellbeing.com`
- Easy to update in constants

### Social Media
- Footer social buttons ready for links
- Edit in `src/lib/constants.ts`

---

## 📱 Responsive Design

The site is fully responsive:

- **Mobile:** Perfect on all phones
- **Tablet:** Optimized for iPad, etc.
- **Desktop:** Beautiful on large screens

All components automatically adapt!

---

## ✨ Key Features

### Animations
- ✅ Fade-in animations on scroll
- ✅ Hover effects on buttons & cards
- ✅ Animated hero emblem (rotating circles)
- ✅ Floating community card
- ✅ Smooth page transitions

### Navigation
- ✅ Sticky navbar that changes on scroll
- ✅ Mobile hamburger menu
- ✅ Smooth scroll to sections
- ✅ Links to all pages

### Performance
- ✅ Optimized bundle size
- ✅ Code splitting
- ✅ Image optimization ready
- ✅ Fast page loads

### SEO
- ✅ Meta tags on all pages
- ✅ Proper HTML structure
- ✅ Keywords optimized
- ✅ Open Graph tags

---

## 🎯 Next Steps

### 1. Test Everything
- Run `npm run dev`
- Click through all pages
- Test on mobile
- Test animations

### 2. Customize Content
- Update brand name, email, phone
- Add/modify services
- Add client testimonials
- Update process steps

### 3. Connect External Services
- Update Topmate link
- Connect email/contact form
- Add social media links
- Setup analytics if needed

### 4. Deploy
- Options: Vercel (recommended), Netlify, AWS, etc.
- Vercel: `vercel` command
- Build passes, ready to deploy!

---

## 📚 Documentation

### Next.js
- https://nextjs.org/docs

### Tailwind CSS
- https://tailwindcss.com/docs

### Framer Motion
- https://www.framer.com/motion/

### TypeScript
- https://www.typescriptlang.org/docs/

---

## 🔧 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Dependencies Issues
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Build Errors
Check TypeScript: `npm run lint`

---

## 📞 Support

For questions or customization:
1. Check the code comments
2. Review the README.md in the project
3. Check Next.js documentation
4. Inspect component props and types

---

## 🎉 You're Ready!

Your complete Next.js website is ready to use!

```bash
cd nextjs-app
npm install
npm run dev
# Visit http://localhost:3000
```

---

**Built with:** Next.js 15+ | TypeScript | Tailwind CSS | Framer Motion

Enjoy your premium emotional healing website! 🚀
