export const portfolioData = {
  personal: {
    name: "Akash",
    title: "Software Engineer & Mobile Systems Specialist",
    location: "Remote / On-Site",
    email: "contact@developer.com",
    github: "github.com/akash",
    linkedin: "linkedin.com/in/akash",
    summary: "Results-driven Software Engineer specializing in scalable mobile application development (React Native, Expo, Android), hardware-software integration, system automation, and high-performance production workflows. Experienced in leading closed testing pipelines, UI optimization, and modern web applications.",
  },
  skills: {
    mobileAndFrontend: "React Native, Expo (EAS CLI), Next.js, React, Tailwind CSS",
    systemsAndTools: "Android Debug Bridge (ADB), scrcpy, WSL, Git Bash, Bash Automation",
    hardwareAndDiagnostics: "Circuit Troubleshooting, Multimeter Diagnostics, Display Driver Integration",
    backendAndWorkflow: "REST APIs, Git, Google Play Console Release Management"
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
      details: "Specialized in Software Engineering & Embedded Systems."
    }
  ]
};