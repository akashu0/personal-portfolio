# personal-portfolio

> **Premium Cinematic Developer Experience**

A high-performance, cinematic developer portfolio engineered with the latest web standards. This project focuses on immersive storytelling through motion, utilizing a "glassmorphism" aesthetic and butter-smooth interactions.

🔗 **Live Site:** [akashkumar.store](https://akashkumar.store/)

---

## 🌓 Preview

| Dark Mode (Default) | Light Mode |
|---|---|
| *(screenshot)* | *(screenshot)* |

---

## 🚀 Key Features

- **Cinematic Visuals** — High-fidelity animations using a hybrid GSAP and Framer Motion engine.
- **Next-Gen Tech** — Built on the bleeding edge with Next.js 16 (App Router) and React 19.
- **Fluid Motion** — Integrated Lenis smooth scrolling for a native-app feel.
- **Tailwind CSS 4** — Leveraging the latest CSS-variable-first styling engine for lightning-fast builds.
- **Custom Modal Reader** — Seamless blog post transitions without page refreshes.
- **Professional Journey** — An interactive SVG-based timeline.
- **Nodemailer Integration** — A fully functional, secure contact bridge.
- **SEO Optimized** — Dynamic metadata and OpenGraph image support.

---

## 🛠️ Technical Architecture

### Core Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Type Safety | TypeScript |
| Styling | Tailwind CSS 4 |
| Motion | GSAP & Framer Motion |
| Icons | Lucide React |

### Directory Breakdown

```bash
src/
├── app/              # Next.js App Router (File-based routing)
├── components/       
│   ├── layout/       # Navigation, Footer, Mobile Menus
│   ├── sections/     # Modular Hero, About, Projects, etc.
│   ├── ui/           # Atomic design components (Buttons, Inputs)
│   └── smooth-scroll # Lenis Provider implementation
├── lib/              # GSAP SplitType utils, validation logic
└── hooks/            # Custom React hooks (e.g., useMousePosition)
```

---

## ⚡ Quick Start

### 1. Clone & Enter

```bash
git clone https://github.com/akashu0/personal-portfolio.git
cd personal-portfolio
```

### 2. Install Dependencies

```bash
npm install
# Note: Ensure you are using Node.js 20+ for React 19 compatibility
```

### 3. Environment Configuration

Create a `.env.local` file to handle the contact form:

```env
# Email configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

### 4. Launch Development

```bash
npm run dev
```

Navigate to `http://localhost:3000` to view the cinematic experience.

---

## 📦 Deployment

The project is optimized for **Vercel**.

1. Push your code to GitHub.
2. Import the project into Vercel.
3. Add your `.env` variables in the Vercel Dashboard.
4. Hit **Deploy**.