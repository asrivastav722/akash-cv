export const portfolioData = {
  personal: {
    name: "Akash Raj",
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
      name: "Fixr App",
      description: "Service marketplace Android app featuring real-time job routing and secure booking UI. Built with React Native & Expo."
    },
    {
      name: "ElectroStore App",
      description: "E-commerce Android client featuring local keystore signing and automated EAS release pipelines."
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "University Institute of Engineering & Technology",
      period: "2020 – 2024",
      grade: "First Class with Distinction",
      details: "Specialized in Software Engineering, Mobile Systems, and Embedded Hardware Integration. Active participant in coding clubs and hardware repair labs."
    },
    {
      degree: "Senior Secondary (PCM) & Technical Certification",
      institution: "State Board & Advanced Training",
      period: "2018 – 2020",
      grade: "Percentage: 91%",
      details: "Focused on Mathematics, Physics, and Computer Science foundation, alongside foundational electronics troubleshooting workshops."
    }
  ]
};