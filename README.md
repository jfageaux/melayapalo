# Melaya Palo — Perform with Resilience

Marketing site for [Melaya Palo](mailto:melayapalo@gmail.com), a personal trainer based in Long Beach, CA offering fight-camp-style programming, nutrition strategy, and mindset coaching (virtual coaching available).

## Stack

- [Next.js](https://nextjs.org) App Router (static — no backend, no forms; every CTA is a `mailto:` link)
- Tailwind CSS v4
- Type: Bricolage Grotesque (display) · Inter (body) · IBM Plex Mono (labels)

## Routes

- `/` — home: hero, credentials, pricing, contact footer
- `/members` — members area "coming soon" preview that funnels to an email waitlist (intentionally not linked from the nav)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Deployed on [Vercel](https://vercel.com).
