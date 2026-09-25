export const portfolioData = {
  personal: {
    name: "Akash",
    title: "Software Engineer & Mobile Systems Specialist",
    location: "Remote / On-Site",
    email: "contact@developer.com",
    github: "github.com/akash",
    linkedin: "linkedin.com/in/akash",
    avatar: "/avatar.jpg",
    summary: "Results-driven Software Engineer specializing in scalable mobile application development (React Native, Expo, Android), hardware-software integration, system automation, and high-performance production workflows. Experienced in leading closed testing pipelines, UI optimization, and modern web applications.",
  },
  skills: {
    mobileAndFrontend: [
      { title: "Frameworks & Core", list: ["React Native", "Expo (EAS CLI, Prebuild)", "Next.js", "React", "TypeScript", "JavaScript (ESNext)"], percentage: 98 },
      { title: "State Management & Data Flow", list: ["Redux Toolkit", "Zustand", "Context API", "React Query (TanStack Query)"], percentage: 95 },
      { title: "Styling & UI Systems", list: ["Tailwind CSS", "NativeWind", "Styled Components", "Framer Motion", "CSS Modules"], percentage: 96 },
      { title: "Performance & Optimization", list: ["Metro Bundler configuration", "Hermes engine optimization", "Lazy loading", "Memory leak profiling", "Image caching pipelines"], percentage: 90 },
      { title: "Testing & Quality Assurance", list: ["Jest", "React Native Testing Library", "Detox (E2E testing)", "ESLint", "Prettier"], percentage: 88 },
      { title: "Native Integration", list: ["Native modules bridging", "Push notifications (FCM, Expo Notifications)", "Deep linking", "Secure local storage (EncryptedSharedPreferences / Keychain)"], percentage: 92 },
      { title: "Deployment & Release Management", list: ["Google Play Console internal/closed testing tracks", "TestFlight", "Fastlane"], percentage: 94 }
    ],
    systemsAndTools: [
      { title: "Device Debugging & Mirroring", list: ["Android Debug Bridge (ADB wireless & USB)", "scrcpy high-performance screen mirroring", "Logcat filtering", "PID process tracking"], percentage: 96 },
      { title: "Terminal & Environment Subsystems", list: ["Windows Subsystem for Linux (WSL2)", "Git Bash", "Zsh / Bash shell configuration", "Environment path routing"], percentage: 94 },
      { title: "Automation & Scripting", list: ["Custom Bash automation scripts", "Gradle build script hooks", "Node package script automation", "Task runners"], percentage: 92 },
      { title: "Virtualization & Containers", list: ["Docker container workflows", "Android Virtual Devices (AVD Emulator)", "Genymotion profiles"], percentage: 88 }
    ],
    hardwareAndDiagnostics: [
      { title: "Motherboard & Circuit Diagnostics", list: ["Multimeter DC voltage testing", "Continuity & resistance checking", "Backlight circuit troubleshooting", "Short-circuit tracing"], percentage: 92 },
      { title: "Display & Flex Integration", list: ["Display driver circuit modification", "Universal LCD/LED controller board wiring", "Volume & power flex connector pin testing", "OLED/LCD ribbon diagnostics"], percentage: 95 },
      { title: "Soldering & Micro-Repair", list: ["SMD component rework", "Hot air station reflowing", "Flex cable jumper wire bridging", "Precision connector pin cleaning"], percentage: 89 },
      { title: "Hardware Testing Rigs", list: ["Bench power supply current limiting", "Thermal camera hotspot inspection", "Oscilloscope signal verification"], percentage: 86 }
    ],
    backendAndWorkflow: [
      { title: "API Architecture & Integration", list: ["RESTful API design", "JSON payload parsing", "Axios interceptors", "Authentication tokens (JWT, OAuth)"], percentage: 94 },
      { title: "Version Control & Collaboration", list: ["Git branching strategies", "GitHub Actions workflows", "Merge conflict resolution", "Pull request reviews"], percentage: 96 },
      { title: "CI/CD & Release Pipeline", list: ["Expo Application Services (EAS CLI)", "Local release keystore signing", "Google Play production rollouts", "Automated artifact builds"], percentage: 93 },
      { title: "Code Quality & Documentation", list: ["API documentation (Postman/Swagger)", "Semantic versioning", "Error boundary telemetry logging"], percentage: 90 }
    ]
  },
  experience: [
    {
      role: "Lead Mobile Software Engineer",
      company: "Fixr & ElectroStore Systems",
      period: "2024 – Present",
      highlights: [
        "Architected and executed closed testing cycles and production readiness for Android mobile applications connecting users with technicians.",
        "Configured Expo Application Services (EAS) CLI workflows, local release keystores, and Metro bundler optimization under WSL environments.",
        "Optimized booking flows, push notification delivery pipelines, and UI stability, driving high user retention during beta releases."
      ]
    },
    {
      role: "Systems & Automation Developer",
      company: "Independent Engineering & Hardware Labs",
      period: "2022 – 2024",
      highlights: [
        "Engineered custom Bash automation scripts and wireless ADB/scrcpy pipelines to streamline mobile hardware testing and diagnostics.",
        "Performed component-level troubleshooting, DC voltage testing, and display driver circuit modifications for mobile devices."
      ]
    }
  ],
  projects: [
  {
    name: "Showstage App & Ecosystem",
    description: "An end-to-end creative talent marketplace connecting employers with artists and performers. Designed and engineered a multi-platform architecture comprising a native Android APK (WebView wrapper) distributed via the Google Play Store, a React-powered CMS admin dashboard, a dynamic React client application, a high-performance Next.js production marketing website, and a scalable Node.js backend handling user authentication, booking workflows, and media routing.",
    logoUrl: "https://www.showstage.in/favicon.svg",
    techStack: ["React.js", "Next.js", "Node.js", "Express", "Tailwind CSS", "Google Play Console", "OAuth", "MongoDB","JWT","REST APIs","Bootstrap","Razorpay payment Intergration"],
    links: [
      { label: "Website", url: "https://www.showstage.in" },
      { label: "App", url: "https://www.showstage.in" },
      { label: "Admin CMS", url: "https://www.showstage.in/admin" }
    ],
    status:"Completed"
  },
  {
    name: "Go4Explore Travel Platform",
    description: "A fully immersive, production-ready travel company web application designed for seamless destination discovery and itinerary planning. Built using Next.js with server-side rendering, optimized SEO architecture, dynamic routing, and an engaging responsive UI tailored for high conversion rates and fluid user experience.",
    logoUrl: "https://go4explore.com/assets/img/faviconn.png",
    techStack: ["Next.js", "Tailwind CSS", "REST APIs","SCSS","Bootstrap"],
    links: [
      { label: "Visit Page", url: "https://go4explore.com" }
    ],
    status:"Completed"
  },
  {
    name: "Fixr Service Marketplace App",
    description: "A robust cross-platform Android service marketplace built with React Native and Expo, connecting local technicians, skilled laborers, and maintenance workers with customers in real-time. Backed by a high-performance Node.js backend providing secure location-based job routing, automated push notifications, appointment scheduling, and user verification workflows.",
    logoUrl: "https://lh3.googleusercontent.com/30aKgB5jO-2F3v3I-7QX7DBaiSkPc_gI0ysRV0qaJkQaPb98A9B06a7PutXyHLGd_fSwDmk1X_zoDBQyqjllJA",
    techStack: ["React Native", "Expo", "Node.js", "Express", "MongoDB", "FCM Push Notifications","Play Console","OAuth","Supabase","Firebase"],
    links: [
      { label: "Visit Page", url: "https://fixr.electrolytesolutions.in" }
    ],
    status:"Ongoing"
  },
  {
    name: "Electrolyte Solutions ERP & E-Commerce Suite",
    description: "A comprehensive, proprietary enterprise resource planning (ERP) and e-commerce ecosystem built for internal enterprise operations and digital sales. Features a custom full-stack administrative management portal, an advanced React Native mobile e-commerce client, and deeply integrated Shopify backend infrastructure handling automated inventory tracking, order processing, and customer relationship management.",
    logoUrl: "https://www.electrolytesolutions.in/Electrolyte.png",
    techStack: ["React Native", "React.js", "Node.js", "Shopify API", "Tailwind CSS", "PostgreSQL"],
    links: [
      { label: "Company Portal", url: "https://www.electrolytesolutions.in/Electrolyte.png" },
      { label: "Admin ERP", url: "https://admin.electrolytesolutions.com" }
    ],
    status:"Ongoing"
  },
  {
    name: "ARIS AI Ecosystem & Device Gateway",
    description: "An advanced real-time IoT and AI ecosystem connecting physical hardware devices with intelligent cloud backends. Engineered a high-performance Python client running on edge devices communicating via secure WebSockets, paired with a responsive web frontend client for live device telemetry, AI command dispatch, and real-time state synchronization.",
    logoUrl: "/projects/aris.png",
    techStack: ["Python", "WebSockets", "Node.js", "AI / LLM Integration", "React", "Next.js", "IoT Protocols"],
    links: [
      { label: "Live System", url: "https://aris-ai.com" },
      { label: "Documentation", url: "https://docs.aris-ai.com" }
    ],
    status:"Ongoing"
  }
],
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Babu Banarasi Das University, Lucknow",
      period: "2020 – 2024",
      grade: "First Division with Hons",
      details: "Comprehensive coursework including: Data Structures & Algorithms, Design & Analysis of Algorithms (DAA), Object-Oriented Programming (C++, Java, Python), Operating Systems, Database Management Systems (DBMS), Computer Networks (CN), Computer Organization & Architecture, Digital Logic Design, Discrete Mathematics / Engineering Mathematics III, Theory of Automata & Formal Languages (TOC), Compiler Design, Software Engineering, Web Development, Artificial Intelligence, Distributed Systems, and Cloud Computing."
    },
    {
      degree: "Higher Secondary School / Senior Secondary School (PCM)",
      institution: "Uttar Pradesh Madhyamik Shiksha Parishad",
      period: "2017 – 2019",
      grade: "First Division",
      details: "Focused on Physics, Chemistry, and Mathematics (PCM) foundation, alongside foundational electronics troubleshooting workshops."
    },
    {
      degree: "Secondary School",
      institution: "Indian Certificate of Secondary Education Board",
      period: "2014 – 2016",
      grade: "First Division",
      details: "Focused on Mathematics, Physics, Chemistry, and foundational Computer Applications."
    }
  ]
};