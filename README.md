personal-portfolio | Premium Cinematic Developer ExperienceA high-performance, cinematic developer portfolio engineered with the latest web standards. This project focuses on immersive storytelling through motion, utilizing a "glassmorphism" aesthetic and butter-smooth interactions.

🌓 PreviewDark Mode (Default)Light Mode🚀 Key FeaturesCinematic Visuals: High-fidelity animations using a hybrid GSAP and Framer Motion engine.Next-Gen 

Tech: Built on the bleeding edge with Next.js 16 (App Router) and React 19.Fluid Motion: Integrated Lenis smooth scrolling for a native-app feel.

Tailwind CSS 4: Leveraging the latest CSS-variable-first styling engine for lightning-fast builds.Interactive Components
Custom Modal Reader: Seamless blog post transitions without page refreshes.

Professional Journey: An interactive SVG-based timeline.Nodemailer Integration: A fully functional, secure contact bridge.SEO Optimized: Dynamic metadata and OpenGraph image support.

🛠️ Technical ArchitectureCore StackLayerTechnologyFrameworkNext.js 16 (App Router)UI LibraryReact 19Type SafetyTypeScriptStylingTailwind CSS 4MotionGSAP & Framer MotionIconsLucide ReactDirectory 


BreakdownBashsrc/
├── app/              # Next.js App Router (File-based routing)
├── components/       
│   ├── layout/       # Navigation, Footer, Mobile Menus
│   ├── sections/     # Modular Hero, About, Projects, etc.
│   ├── ui/           # Atomic design components (Buttons, Inputs)
│   └── smooth-scroll # Lenis Provider implementation
├── lib/              # GSAP SplitType utils, validation logic
└── hooks/            # Custom React hooks (e.g., useMousePosition)

⚡ Quick Start1. Clone & EnterBashgit clone https://github.com/akashu0/personal-portfolio.git
cd personal-portfolio

Link : https://akashkumar.store/




2. Install DependenciesBashnpm install 
# Note: Ensure you are using Node.js 20+ for React 19 compatibility
3. Environment ConfigurationCreate a .env.local file to handle the contact form:Code snippet# Email configuration

EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password

4. Launch DevelopmentBashnpm run dev

Navigate to http://localhost:3000 to view the cinematic experience.

📦 DeploymentThe project is optimized for Vercel.Push your code to GitHub.Import the project into Vercel.Add your .env variables in the Vercel Dashboard.Hit Deploy.

