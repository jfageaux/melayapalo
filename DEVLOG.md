# DEVLOG — Melaya Palo Training Website

---

## 2026-05-28 — Initial Build

**What changed:**
- Initialized Next.js 16 project with TypeScript, Tailwind v4, App Router
- Set up Playfair Display + Inter font system via `next/font/google`
- Defined full Desert Neutral color palette in `globals.css` using Tailwind v4 `@theme`:
  - cream (#FAF7F2), sand (#EDE4D8), taupe (#B5A898), clay (#C4896B), stone (#8C7B6E), earth (#5A4A3D), bark (#3D2E26)
- Built Landing Page (`/`) with 5 sections: Hero, WorkoutPlans, VirtualNutrition, Pricing, FooterCTA
- Built Members Page (`/members`) with 7 sections: MembersHero, WorkoutLibrary, WeeklyPlans, NutritionRecovery, MindsetSection, MemberCheckIns, WaitlistCTA + FooterCTA
- Built responsive Nav with mobile hamburger menu (client component)
- Hero uses `IMG_9367.jpg` (boxing photo) with warm gradient overlay, full-viewport layout
- All CTA buttons use `mailto:melayapalo@gmail.com` with pre-filled subjects
- Pricing: Starter $99/mo, Fight Camp $199/mo, Full Resilience $349/mo
- Members page uses placeholder video cards (no real video yet) with "Coming Soon" treatment
- Production build: ✓ Clean (3 static routes: `/`, `/_not-found`, `/members`)

**Files touched:**
- `src/app/globals.css` — theme colors + font variables
- `src/app/layout.tsx` — fonts, metadata, Nav wrapper
- `src/app/page.tsx` — landing page composition
- `src/app/members/page.tsx` — members page composition
- `src/components/Nav.tsx`
- `src/components/Hero.tsx`
- `src/components/WorkoutPlans.tsx`
- `src/components/VirtualNutrition.tsx`
- `src/components/Pricing.tsx`
- `src/components/FooterCTA.tsx`
- `src/components/MembersHero.tsx`
- `src/components/WorkoutLibrary.tsx`
- `src/components/WeeklyPlans.tsx`
- `src/components/NutritionRecovery.tsx`
- `src/components/MindsetSection.tsx`
- `src/components/MemberCheckIns.tsx`
- `src/components/WaitlistCTA.tsx`
- `public/hero-boxing.jpg` — boxing photo copied from IMG_9367.jpg
- `package.json` — renamed to `melaya-palo`

**Next steps:**
- Push to GitHub (initialize repo, first commit)
- Deploy to Vercel (connect repo, check env / build settings)
- Add real social links when available (Instagram, etc.)
- Swap video placeholders with real video embeds when content is ready
- Add Stripe + member auth when ready to launch subscription
- Consider adding an `og:image` (social share preview card)
