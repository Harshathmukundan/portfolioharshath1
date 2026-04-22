import { PortfolioData } from "./api";

const portfolio: PortfolioData = {
  profile: {
    name: "Harshath Mukundan",
    title: "Full Stack Developer · AI/ML Engineer",
    tagline:
      "CSE (AIML) student at SRMIST building production-grade full-stack systems and deep learning pipelines.",
    email: "harshathmsg18@gmail.com",
    phone: "+91 9952144961",
    github: "https://github.com/Harshathmukundan",
    linkedin: "https://www.linkedin.com/in/harshathmukundan",
    cgpa: 8.65,
    university: "SRM Institute of Science and Technology",
    degree: "B.Tech CSE (Artificial Intelligence & Machine Learning)",
    batch: "2023 – 2027",
    location: "Chennai, Tamil Nadu",
  },

  stats: [
    { label: "CGPA / 10", value: "8.65" },
    { label: "Full Stack Projects", value: "3+" },
    { label: "Model Accuracy", value: "87%" },
    { label: "Active Arrears", value: "0" },
  ],

  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React.js", hot: true },
        { name: "Next.js", hot: true },
        { name: "TypeScript", hot: true },
        { name: "HTML5", hot: false },
        { name: "CSS3", hot: false },
        { name: "Vite", hot: false },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", hot: true },
        { name: "Express.js", hot: true },
        { name: "Spring Boot", hot: false },
        { name: "Flask", hot: false },
        { name: "REST APIs", hot: true },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "AWS EC2/S3", hot: true },
        { name: "Docker", hot: true },
        { name: "Kubernetes", hot: false },
        { name: "CI/CD", hot: false },
        { name: "Linux", hot: false },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MySQL", hot: true },
        { name: "Supabase", hot: true },
        { name: "SQLite", hot: false },
        { name: "PostgreSQL", hot: false },
      ],
    },
    {
      category: "AI / ML",
      items: [
        { name: "PyTorch", hot: true },
        { name: "U-Net", hot: false },
        { name: "ConvLSTM", hot: false },
        { name: "OpenCV", hot: false },
        { name: "Pandas", hot: false },
      ],
    },
    {
      category: "Languages",
      items: [
        { name: "Python", hot: true },
        { name: "JavaScript", hot: true },
        { name: "C++", hot: true },
        { name: "Java", hot: false },
        { name: "C", hot: false },
      ],
    },
  ],

  projects: [
    {
      id: "goturf",
      num: "01",
      name: "GoTurf — Geospatial Turf Booking Platform",
      badge: "Full Stack",
      badgeType: "full",
      description:
        "Full-stack turf booking system with JWT auth, RBAC (Player / Owner / Admin), dynamic pricing via OpenWeatherMap, and triple-tier dashboards. Built with React + TypeScript + Vite frontend and Express.js + Supabase backend.",
      stack: ["React.js", "TypeScript", "Express.js", "Supabase", "JWT", "RBAC", "OpenWeatherMap"],
      github: "https://github.com/Harshathmukundan",
      live: null,
    },
    {
      id: "ecommerce",
      num: "02",
      name: "AI-Powered E-Commerce Recommendation Engine",
      badge: "Full Stack · AWS",
      badgeType: "full",
      description:
        "ML-driven product recommendation platform with behavioral analytics and personalization across 10K+ records. Spring Boot REST APIs, React frontend, MySQL, hosted on AWS EC2 with CI/CD. Achieved 30% UX improvement and 99% reduction in transaction failures.",
      stack: ["React.js", "Node.js", "Spring Boot", "MySQL", "AWS EC2", "CI/CD", "REST APIs"],
      github: "https://github.com/Harshathmukundan",
      live: null,
    },
    {
      id: "surveillance",
      num: "03",
      name: "AI-Based Smart Surveillance & Face Recognition",
      badge: "AI · Surveillance",
      badgeType: "ai",
      description:
        "Real-time face detection and recognition from live video feeds using ResNet-based encoding. Centralized SQLite event logging with timestamps and location data. Containerized with Docker for portable deployment.",
      stack: ["Python", "OpenCV", "dlib (ResNet)", "SQLite", "Docker"],
      github: "https://github.com/Harshathmukundan",
      live: null,
    },
    {
      id: "pfz",
      num: "04",
      name: "PFZ Navigator — Fishing Zone Prediction System",
      badge: "Deep Learning · Research",
      badgeType: "ml",
      description:
        "Spatio-temporal deep learning system processing 6 oceanographic parameters from 15,000+ satellite images. Achieved 87% accuracy and IoU 0.78 — 20% improvement over traditional methods. Interactive Leaflet.js dashboard with GPS CSV export.",
      stack: ["PyTorch", "U-Net", "ConvLSTM", "Flask", "Leaflet.js", "NetCDF"],
      github: "https://github.com/Harshathmukundan",
      live: null,
    },
  ],

  experience: [
    {
      role: "Student Researcher — Applied Deep Learning",
      org: "SRM Institute of Science and Technology",
      period: "Aug 2025 – Present",
      bullets: [
        "Conducting research on spatio-temporal prediction of fishing zones using satellite oceanographic data.",
        "Designed and evaluated hybrid deep learning architectures (U-Net, ConvLSTM) for segmentation and forecasting.",
        "Performed model comparison and validation using accuracy and IoU metrics.",
        "Analyzed multi-year CMEMS datasets covering Tamil Nadu coast and Bay of Bengal.",
      ],
    },
  ],

  certifications: [
    { issuer: "SAP", name: "Generative AI Developer" },
    { issuer: "SAP", name: "Data Analyst, Analytics Cloud" },
    { issuer: "Coursera", name: "Supervised ML: Regression & Classification" },
    { issuer: "NPTEL", name: "Programming in Java" },
    { issuer: "NPTEL", name: "Introduction to Database Systems" },
    { issuer: "Udemy", name: "PyTorch for Deep Learning Bootcamp" },
    { issuer: "Udemy", name: "C & C++" },
  ],

  jdMatch: {
    company: "Afford Medical Technologies",
    role: "Full Stack Developer",
    matches: [
      "React.js ✓",
      "Node.js ✓",
      "Express.js ✓",
      "TypeScript ✓",
      "REST APIs ✓",
      "AWS EC2 ✓",
      "Docker ✓",
      "CGPA 8.65 ✓",
      "0 Arrears ✓",
    ],
  },
};

export default portfolio;
