export const profile = {
  name: "Aadarsh Singh",
  role: "Full-Stack & DevOps Engineer",
  focus: ["Full-Stack Development", "DevOps", "Cloud Infrastructure", "System Design"],
  statement: "Building production-grade systems with scalable architecture, robust DevOps pipelines, and real-world problem-solving.",
  location: "Thane, Maharashtra, India",
  availability: "Available for Internships & Placements",
  links: {
    github: "https://github.com/adarsh985",
    linkedin: "https://www.linkedin.com/in/aadarsh-singh-8849162b8",
    email: "mailto:58adarshvimalsingh@gmail.com",
    resume: "/resume.pdf",
  },
};

export const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Engineering", href: "#engineering" },
  { label: "GitHub", href: "#github" },
  { label: "Resume", href: "/resume.pdf", external: true },
  { label: "Contact", href: "#contact" },
];

/** Nodes for the Technical Identity strip on the homepage.
 *  This is the generic, project-agnostic version of the pipeline —
 *  the reusable ArchitectureDiagram component (built per-project in
 *  Phase 4) takes the same shape but with project-specific content. */
export const identityNodes = [
  {
    id: "frontend",
    label: "Frontend",
    tech: "React · Vite · Tailwind CSS",
    detail: "Modern, responsive SPAs with component-driven architecture and performance optimization.",
  },
  {
    id: "backend",
    label: "Backend",
    tech: "Node.js · Express · Python",
    detail: "Scalable APIs with authentication, business logic, and service orchestration.",
  },
  {
    id: "database",
    label: "Database",
    tech: "MongoDB · MySQL · Firebase",
    detail: "Document and relational databases, replica sets, real-time sync.",
  },
  {
    id: "devops",
    label: "DevOps",
    tech: "Docker · Kubernetes · Jenkins",
    detail: "CI/CD pipelines, container orchestration, and automated deployments.",
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    tech: "AWS · Terraform · Prometheus",
    detail: "IaC, monitoring, logging (ELK), secrets management (Vault).",
  },
];

export const projects = [
  {
    id: "globalmedx",
    title: "GlobalMedX",
    subtitle: "Worldwide Pandemic Surveillance & Response Platform",
    tagline: "Enterprise-grade real-time epidemiological intelligence system",
    description: "A comprehensive international public health platform for real-time disease tracking, outbreak prediction, and emergency response coordination.",
    longDescription: "GlobalMedX is a production-ready platform designed to collect, analyze, and distribute real-time epidemiological information across the globe. It serves as a centralized command center for public health emergencies, enabling disease tracking, outbreak prediction, resource allocation, and coordinated emergency response.",
    highlights: [
      "Real-time dashboard with dark/light mode (React + Chart.js)",
      "Global outbreak hotspot visualization with biosurveillance mapping",
      "Live DevOps telemetry boards streaming system metrics from Prometheus",
      "Complete Jenkins CI/CD pipeline with automated testing and Docker builds",
      "Centralized logging via ELK stack for multi-service troubleshooting",
      "HashiCorp Vault for secrets management and credential encryption",
      "Infrastructure as Code with Terraform for multi-AZ AWS VPC and K8s provisioning",
      "Kubernetes orchestration with Horizontal Pod Autoscaling",
    ],
    techStack: {
      frontend: ["React.js", "Vite", "Tailwind CSS", "Chart.js", "Lucide Icons"],
      backend: ["Node.js", "Express.js", "JWT Authentication"],
      database: ["MongoDB", "Replica Sets"],
      devops: ["Docker", "Docker Compose", "Kubernetes", "Jenkins", "Prometheus", "Grafana"],
      logging: ["ELK Stack", "Elasticsearch", "Logstash", "Kibana"],
      infrastructure: ["Terraform", "AWS", "HashiCorp Vault"],
    },
    architecture: [
      { layer: "Client Tier", desc: "React SPA connecting via RESTful APIs" },
      { layer: "Security Tier", desc: "JWT auth with Vault-managed secrets" },
      { layer: "Storage Tier", desc: "MongoDB replica sets for high availability" },
      { layer: "Monitoring Loop", desc: "Prometheus + Grafana for real-time metrics" },
      { layer: "Logging", desc: "ELK stack for distributed tracing" },
      { layer: "Orchestration", desc: "Kubernetes with HPA for auto-scaling" },
    ],
    links: {
      github: "https://github.com/adarsh985/globalmedx",
      demo: "http://localhost:3000",
    },
    services: {
      frontend: "http://localhost:3000",
      backend: "http://localhost:5001",
      grafana: "http://localhost:3001",
      prometheus: "http://localhost:9090",
      kibana: "http://localhost:5601",
      vault: "http://localhost:8200",
    },
    impact: "Demonstrates enterprise-level full-stack development with production DevOps practices, cloud-native architecture, and real-time system monitoring.",
  },
  {
    id: "accident-hotspot",
    title: "Accident Hotspot Notifier",
    subtitle: "Real-Time Accident Detection & Emergency Response Platform",
    tagline: "Smart geospatial clustering for urban safety",
    description: "An intelligent web application for real-time accident reporting, automatic hotspot detection, and emergency prioritization using spatial algorithms and Firebase.",
    longDescription: "A safety-focused platform enabling citizens and emergency services to instantly report road accidents, automatically detect dangerous clusters, and prioritize emergency response. Features real-time analytics, mobile-responsive design, and intelligent geographic analysis.",
    highlights: [
      "Interactive map interface with click-to-report functionality",
      "Real-time hotspot detection using spatial clustering algorithms (DBSCAN-like)",
      "Priority queue system ranking emergencies by severity and weather factors",
      "Live analytics dashboard with accident statistics and trends",
      "Firebase Firestore for real-time database synchronization across users",
      "Responsive design optimized for desktop and mobile",
      "Offline demo mode with fallback test data",
      "Spatial algorithms: Haversine distance, grid-based hashing",
    ],
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript ES6+", "Leaflet.js", "Chart.js"],
      backend: ["Firebase Firestore", "Node.js", "MongoDB"],
      database: ["Firebase Firestore", "MongoDB"],
      algorithms: ["DBSCAN Clustering", "Haversine Distance", "Priority Queue (Min-heap)", "Spatial Grid Hashing"],
    },
    algorithms: [
      { name: "Haversine Distance", purpose: "Accurate geospatial clustering calculations" },
      { name: "DBSCAN-like Clustering", purpose: "Detect accident hotspots" },
      { name: "Priority Queue", purpose: "Emergency response ranking" },
      { name: "Spatial Grid Hashing", purpose: "Efficient location lookups" },
      { name: "Time-series Analysis", purpose: "Statistical breakdown by time and severity" },
    ],
    useCases: [
      "B2G (Traffic Police): Faster hotspot triage and patrol optimization",
      "Civic (City Government): Data-driven infrastructure and safety planning",
      "B2B (Fleet/Logistics): Route optimization and insurance cost reduction",
      "Community: Shared awareness of real-time accident trends",
    ],
    links: {
      github: "https://github.com/adarsh985/Accident-hotspot-notifier",
      deployment: "Firebase Hosting / Netlify / Vercel compatible",
    },
    impact: "Demonstrates practical application of geospatial algorithms, real-time data synchronization, responsive UI/UX, and community-focused problem-solving.",
  },
];

export const technicalSkills = {
  languages: ["JavaScript/TypeScript", "Python", "Java", "HTML5", "CSS3"],
  frontend: ["React.js", "Vite", "Tailwind CSS", "Chart.js", "Leaflet.js", "Redux"],
  backend: ["Node.js", "Express.js", "Python Flask", "Java Spring Boot"],
  databases: ["MongoDB", "MySQL", "Firebase Firestore"],
  devops: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "GitHub Actions"],
  cloud: ["AWS (EC2, VPC, S3)", "Terraform", "Infrastructure as Code"],
  tools: ["Git", "Linux", "Prometheus", "Grafana", "ELK Stack", "HashiCorp Vault"],
  specializations: ["Full-Stack Development", "DevOps & Cloud", "Geospatial Algorithms", "Real-time Systems"],
};
