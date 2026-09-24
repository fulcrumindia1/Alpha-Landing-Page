# Fulcrum-India — Public Landing Page

> **Official public landing website for Fulcrum-India, ready for instant deployment on Vercel.**

The production application is hosted separately at **[https://app.fulcrumindia.online/](https://app.fulcrumindia.online/)**.

---

## 🎯 About Fulcrum-India

Fulcrum-India is an operating system and guided orchestration layer for Indian micro and small enterprises. Its core mission is to help first-generation, underserved, and underrepresented entrepreneurs navigate government schemes, documentation, readiness, and funding through:

- **Structured Onboarding & Profile Readiness**: Evaluating business stage, sector, geography, and investment needs.
- **Assigned Guides & Domain SMEs**: Business mentorship paired with specialist guidance for taxation, compliance, legal, and technical requirements.
- **Scheme Intelligence**: Deterministic matching against validated government schemes based on profile factors.
- **Milestone-Driven Journeys**: Chronological tracking of entrepreneur progress, milestones, guidance received, and scheme applications.
- **Institutional Memory**: Capturing lessons and outcomes so every entrepreneurial journey benefits from past journeys.

---

## 🚀 Live Production Links

| Target | URL |
| :--- | :--- |
| **Production Web Application** | [https://app.fulcrumindia.online/](https://app.fulcrumindia.online/) |
| **Public Landing Page** | Deployed on Vercel |

---

## 🛠️ Tech Stack

- **Framework**: [Vite](https://vite.dev/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [Wouter](https://github.com/molefrog/wouter) (lightweight client-side router)
- **Deployment**: [Vercel](https://vercel.com/) (zero-configuration static SPA with `vercel.json` rewrites)

---

## 📁 Repository Structure

```text
├── public/                 # Static assets (favicons, manifest, robots.txt)
├── src/
│   ├── components/         # UI primitives (button, toast, tooltip)
│   ├── context/            # Theme context (light/dark mode toggle)
│   ├── hooks/              # Custom hooks (page meta, toasts)
│   ├── lib/                # Shared utilities
│   ├── pages/
│   │   ├── LandingPage.tsx        # Main public marketing page
│   │   ├── PrivacyPolicyPage.tsx  # Legal privacy policy
│   │   ├── TermsOfServicePage.tsx # Terms of service
│   │   └── not-found.tsx          # 404 handler
│   ├── App.tsx             # Root routing and providers
│   ├── index.css           # Tailwind design tokens and custom animations
│   └── main.tsx            # React root mount
├── index.html              # HTML entry point with SEO metadata
├── package.json            # Standalone dependencies and scripts
├── tsconfig.json           # Modern TypeScript configuration
├── vercel.json             # Vercel SPA rewrite rules
└── vite.config.ts          # Vite build configuration
```

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Type Check
```bash
npm run typecheck
```

---

## 🌐 Vercel Deployment

1. Connect this repository to your Vercel account.
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Deploy!

All routes (`/`, `/privacy`, `/terms`) are handled via client-side routing with clean URL rewrites configured in `vercel.json`.
