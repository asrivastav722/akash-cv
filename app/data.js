import { Cigarette } from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Akash Raj",
    title: "Software Engineer & Hardware Specialist",
    location: "Remote / On-Site",
    email: "contact@developer.com",
    github: "github.com/akash",
    linkedin: "linkedin.com/in/akash",
    avatar: "/avatar.jpg",
    summary: "Results-driven Software Engineer specializing in scalable mobile application development (React Native, Expo, Android), hardware-software integration, system automation, and high-performance production workflows. Experienced in leading closed testing pipelines, UI optimization, and modern web applications.",
  },
  skills: {
    mobileAndFrontend: [
      { title: "Frameworks & Core", list: ["React Native", "Expo (EAS CLI, Prebuild)", "Next.js", "React", "TypeScript", "JavaScript (ESNext)"], percentage: 80 },
      { title: "State Management & Data Flow", list: ["Redux Toolkit", "Context API", "React Query (TanStack Query)"], percentage: 80 },
      { title: "Styling & UI Systems", list: ["Tailwind CSS", "NativeWind", "Styled Components", "Framer Motion", "CSS Modules"], percentage: 80 },
      { title: "Performance & Optimization", list: ["Metro Bundler configuration", "Hermes engine optimization", "Lazy loading", "Memory leak profiling", "Image caching pipelines"], percentage: 90 },
      { title: "Testing & Quality Assurance", list: [ "React Native Testing Library", "ESLint", "Prettier"], percentage: 80 },
      { title: "Native Integration", list: ["Native modules bridging", "Push notifications (FCM, Expo Notifications)", "Deep linking", "Secure local storage (EncryptedSharedPreferences / Keychain)"], percentage: 92 },
      { title: "Deployment & Release Management", list: ["Google Play Console internal/closed testing tracks"], percentage: 94 }
    ],
    systemsAndTools: [
      { title: "Device Debugging & Mirroring", list: ["Android Debug Bridge (ADB wireless & USB)", "scrcpy high-performance screen mirroring", "Logcat filtering", "PID process tracking"], percentage: 96 },
      { title: "Terminal & Environment Subsystems", list: ["Windows Subsystem for Linux (WSL2)", "Git Bash", "Zsh / Bash shell configuration", "Environment path routing"], percentage: 94 },
      { title: "Automation & Scripting", list: ["Custom Bash automation scripts", "Gradle build script hooks", "Node package script automation", "Task runners"], percentage: 92 },
      { title: "Virtualization & Containers", list: ["Docker container workflows", "Android Virtual Devices (AVD Emulator)", "Genymotion profiles"], percentage: 88 }
    ],
    hardwareAndDiagnostics: [
      { title: "Motherboard & Circuit Diagnostics", list: ["Multimeter testing", "Continuity & resistance checking", "Circuit troubleshooting", "Short-circuit tracing"], percentage: 92 },
      { title: "Soldering & Micro-Repair", list: ["SMD component rework", "Hot air station reflowing", "Flex cable jumper wire bridging", "Precision connector pin cleaning"], percentage: 89 }
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
        role: "Founder & Lead IT Solutions Architect",
        company: "Electrolyte Solutions and Ecosystem (Fixr and Aris-AI)",
        location: "India / Remote",
        period: "Nov,2025  – Present",
        employmentType: "Founder / Full-time",
        highlights: [
          "Founded and scaled a comprehensive IT enterprise delivering on-site hardware repairs, doorstep computer/laptop services, and end-to-end custom software and website development for clients.",
          "Architected and launched proprietary products including the Fixr Service Marketplace app (React Native/Expo/Node.js), Electrolyte Solutions ERP & E-Commerce suite, and ARIS AI IoT device gateway.",
          "Engineered bespoke client websites, web applications, and automated backend systems tailored to business operational needs and e-commerce growth.",
          "Managed full-stack mobile app deployments via Google Play Console, EAS CLI workflows, self-hosted Linux/Docker servers, and CI/CD automation pipelines.",
          "Provided advanced hardware troubleshooting, diagnostics, and technical consulting for diverse enterprise and consumer clients."
        ]
      },
    {
      role: "Lead Software Engineer",
      company: "Cyberoze Pvt.Ltd. (Showstage)",
      location: "India (Hybrid / Remote)",
      period: "June,25 – Feb,26",
      ctc: "2.4 L",
      employmentType: "Full-time",
      highlights: [
        "Promoted from Frontend Developer to Lead Software Engineer, spearheading the full-stack design and delivery of the Showstage talent marketplace ecosystem.",
        "Engineered and deployed a multi-platform architecture comprising a native Android APK (WebView wrapper) distributed via Google Play Console, a React-powered CMS admin dashboard, and a dynamic React client application.",
        "Built a high-performance Next.js production marketing website and a scalable Node.js/Express backend integrated with MongoDB, JWT authentication, OAuth, and secure REST APIs.",
        "Integrated Razorpay payment gateway workflows and managed complex Redux state management for seamless artist and employer bookings.",
        "Configured automated CI/CD pipelines using CircleCI and GitHub Actions with Bootstrap and Tailwind CSS for rapid and reliable releases."
      ]
    },
    {
      role: "Frontend Engineer",
      company: "Cyberoze Pvt.Ltd. (Go4Explore)",
      location: "Noida, UP",
      period: "Nov,2024 – May,2025",
      ctc: "1.2 L",
      employmentType: "Full-time",
      highlights: [
        "Developed high-performance, responsive user interfaces using React, Next.js, and modern CSS frameworks.",
        "Collaborated closely with backend developers to integrate REST APIs, optimize page load performance, and ensure seamless cross-browser compatibility."
      ]
    },
    {
      role: "Independent Freelance Software & Hardware Engineer",
      company: "Freelance / Contract",
      location: "Remote / On-Site",
      period: "2022 – 2024",
      ctc: null,
      employmentType: "Contractor",
      highlights: [
        "Delivered custom web and mobile applications for local clients and bussinesses, focusing on React JS, Tailwind CSS and responsive UI/UX design.",
        "Performed specialized component-level troubleshooting, DC voltage testing, and display driver circuit modifications for mobile devices and custom hardware clients."
      ]
    }
  ],
  projects: [
  {
    name: "Showstage App & Ecosystem",
    description: "An end-to-end creative talent marketplace connecting employers with artists and performers. Designed and engineered a multi-platform architecture comprising a native Android APK (WebView wrapper) distributed via the Google Play Store, a React-powered CMS admin dashboard, a dynamic React client application, a high-performance Next.js production marketing website, and a scalable Node.js backend handling user authentication, booking workflows, and media routing.",
    logoUrl: "https://www.showstage.in/favicon.svg",
    techStack: ["React.js", "Next.js", "Node.js", "Express", "Tailwind CSS", "Google Play Console", "OAuth", "MongoDB","JWT","REST APIs","Bootstrap","Razorpay payment Integration ","CI/CD","Circle CI", "Github Actions","Redux"],
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
    techStack: ["React Native", "Expo", "Node.js", "Express", "MongoDB", "FCM Push Notifications","Play Console","OAuth","Supabase","Firebase","EAS-CLI","NativeWind","Redux","Supabase Hot-Updater","CI/CD","TypeScript","ADB","Mongoose","Twilio Integration"],
    links: [
      { label: "Visit Page", url: "https://fixr.electrolytesolutions.in" }
    ],
    status:"Ongoing"
  },
  {
    name: "Electrolyte Solutions ERP & E-Commerce Suite",
    description: "A comprehensive, proprietary enterprise resource planning (ERP) and e-commerce ecosystem built for internal enterprise operations and digital sales. Features a custom full-stack administrative management portal, an advanced React Native mobile e-commerce client, and deeply integrated Shopify backend infrastructure handling automated inventory tracking, order processing, and customer relationship management.",
    logoUrl: "https://www.electrolytesolutions.in/Electrolyte.png",
    techStack: ["Shopify","CORS","RESTAPIs","GraphQL","Supabase","CI/CD", "Self Hosted Home Server", "NativeWind","ADB","Liquid - Shopify","SEO",  "Tailwind CSS", "PostgreSQL","Google Play Console","Google Cloud Console", "Docker","Domain Management", "Vercel","Linux","Google Bussiness Setup","MongoDB","QRCodes","Razorpay Payment Integration"],
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
    techStack: ["GORK-SDK","Python", "WebSockets", "Node.js", "AI / LLM Integration", "React", "Next.js", "IoT Protocols","Mongoose","SSL","OS","llama-3.3-70b-versatile"],
    // links: [
    //   { label: "Live System", url: "https://aris-ai.com" },
    //   { label: "Documentation", url: "https://docs.aris-ai.com" }
    // ],
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
      degree: "Higher Secondary School (PCM)",
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