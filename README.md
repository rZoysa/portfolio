# Rithik Zoysa - portfolio

Dark, Flutter-first redesign of the existing React/Vite/Tailwind portfolio, updated from the supplied September 2026 CV. Mobile development is the primary positioning; web, backend, cloud, and deployment experience remain visible.

## Run locally

Requires Node.js compatible with Vite 6 (Node 18+; Node 20 or 22 recommended).

```bash
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static host such as Vercel. The existing production domain is configured in `index.html`, `public/robots.txt`, and `public/sitemap.xml`: update all three if the deployed domain changes.

## Content changes

- Edit professional project content, additional project details, and skill groups in `src/data/portfolio.js`.
- Add approved Yaya Agro and Dima Events screenshots to `src/assets/optimized/`, import them in `portfolio.js`, and give each image a descriptive `alt` value in the `images` array. When `images` is supplied, the corresponding illustration is automatically replaced with actual screenshots.
- Only add store links or client demo/repository URLs when they are authorized for public sharing. The current design intentionally distinguishes illustrative graphics from real screenshots.
- Replace `public/Rithik-Zoysa-CV.pdf` whenever the CV changes. It contains the contact details provided in the supplied CV; review whether you want your phone number publicly downloadable.
- Review the project descriptions for any details that need employer/client approval before publishing.
- Verify your production site URL, email, social links, CV content, and graduation details before deployment.
- The former Tomato Math Game live-demo link is intentionally omitted until it can be verified; the existing GitHub source link is retained.
- The project could not be installed or built in the creation environment because package downloads were unavailable. Run `npm ci`, `npm run lint`, and `npm run build` in an environment with package-registry access before deployment.

## Design and technical decisions

- Preserves the supplied React 19 + Vite 6 + Tailwind 4 foundation. No rebuild into a different framework.
- Accessible mobile navigation with real buttons and `aria-expanded`; screenshot carousel uses labeled buttons and an announced slide index.
- Responsive single-page structure, keyboard focus states, skip link, semantic headings, reduced-motion support, and optimized WebP copies of original project image assets.
- No invented metrics, client testimonials, app-store URLs, or unapproved screenshots.
- Contact links use `mailto:` instead of a nonfunctional form; CV download is local and functional.
