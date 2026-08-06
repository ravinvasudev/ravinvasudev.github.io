import type { ProjectItem } from "../types";

export const projects: ProjectItem[] = [
  {
    id: "ccoe-governance-platform",
    name: "Cloud Center of Excellence Governance Framework",
    timeframe: "2025 - Present",
    domain: "Enterprise Cloud Governance",
    role: "Cloud Architect (CCoE)",
    problem:
      "Independent product organizations were each solving landing zones, IAM boundaries, tagging and cost accountability differently, producing inconsistent risk posture and unpredictable cloud spend.",
    solution:
      "Established a CCoE operating model combining landing zone blueprints, reusable Infrastructure as Code modules, policy-as-code guardrails and FinOps reporting so teams inherit compliance instead of rebuilding it.",
    impact: [
      "Single governed baseline for multi-account AWS estates",
      "Architecture decisions captured as reusable, versioned modules",
      "Cost accountability moved to teams through tagging and showback",
    ],
    architecture: [
      "Multi-account landing zone blueprints",
      "Policy-as-code guardrails at the organization boundary",
      "Shared Terraform / OpenTofu module registry",
      "Standardized identity, network and tagging baselines",
      "FinOps reporting and cost anomaly signals",
    ],
    techStack: [
      "AWS",
      "Terraform",
      "OpenTofu",
      "Policy as Code",
      "FinOps",
      "IAM",
      "DevSecOps",
    ],
    featured: true,
  },
  {
    id: "depot360-platform",
    name: "Depot360 EV Fleet Electrification Platform",
    timeframe: "2022 - 2025",
    domain: "Electric Vehicle",
    role: "System Architect",
    problem:
      "Fleet operators needed a secure, resilient, multi-region platform to plan and run depot electrification, but the delivery model could not sustain enterprise scale or regional compliance requirements.",
    solution:
      "Defined a cloud-native architecture on AWS and EKS built from event-driven microservices, standardized GitOps deployments and observability-by-default engineering conventions.",
    impact: [
      "40% reduction in deployment cycle time",
      "Consistent multi-region reliability and performance posture",
      "Security and compliance alignment across ISO 27001 and GDPR controls",
    ],
    architecture: [
      "100+ microservices under a single architecture standard",
      "Event-driven telemetry processing with Kafka and Redis",
      "Container orchestration on Amazon EKS across regions",
      "Infrastructure as Code with Terraform modules and shared registries",
      "GitOps delivery with ArgoCD and Helm",
      "Observability with Prometheus, Grafana and ELK",
    ],
    techStack: [
      "AWS",
      "EKS",
      "Terraform",
      "ArgoCD",
      "Helm",
      "Java",
      "Spring Boot",
      "Kafka",
      "Redis",
      "Prometheus",
      "Grafana",
      "ELK",
    ],
    featured: true,
  },
  {
    id: "dems-engineering-modernization",
    name: "Distributed Energy Management System Engineering Modernization",
    timeframe: "2019 - 2022",
    domain: "Energy",
    role: "Software Development Team Lead",
    problem:
      "Slow builds and manual release steps were throttling delivery velocity for grid-scale energy management software.",
    solution:
      "Modernized build and delivery pipelines through an Ant to Gradle transition, CI/CD automation and enforced engineering quality gates.",
    impact: [
      "60% improvement in build and execution efficiency",
      "Higher delivery predictability and defect containment",
    ],
    architecture: [
      "Gradle build modernization with dependency caching",
      "Automated CI/CD pipelines with quality gates",
      "Containerized test execution",
    ],
    techStack: ["Gradle", "CI/CD", "DevSecOps", "Agile", "Java"],
    featured: false,
  },
  {
    id: "telecom-scale-platform-services",
    name: "Telecom Platform Modernization and Messaging Services",
    timeframe: "2014 - 2019",
    domain: "Telecommunications",
    role: "Solutions Architect",
    problem:
      "Legacy monoliths needed modernization while continuing to serve a subscriber base spanning dozens of countries under strict uptime expectations.",
    solution:
      "Architected modular service components, high-throughput messaging capability and centralized authentication services designed for reuse across the platform portfolio.",
    impact: [
      "200M+ subscribers supported across 38 countries",
      "100K+ daily SMS and email transactions with end-to-end traceability",
      "Etisalat Hero Award received twice for delivery excellence",
    ],
    architecture: [
      "Incremental monolith decomposition",
      "Reusable microservice capability layer",
      "High-throughput messaging pipeline",
      "Centralized authentication and OTP services",
    ],
    techStack: [
      "Java",
      "Microservices",
      "REST",
      "Caching",
      "Authentication",
      "OTP",
    ],
    featured: true,
  },

  {
    id: "iptv-bandwidth-optimization",
    name: "IPTV Multicast Session Optimization",
    timeframe: "2009 - 2012",
    domain: "Media / Telecommunications",
    role: "Senior Software Engineer",
    problem:
      "Idle viewing sessions kept multicast streams alive, consuming network capacity that carriers were paying for.",
    solution:
      "Engineered a multicast session control architecture that detects idle sessions and releases network resources without degrading channel switch times.",
    impact: ["Up to 80% bandwidth reclaimed in idle session scenarios"],
    architecture: [
      "Session lifecycle state machine",
      "Network-aware multicast join and leave controls",
    ],
    techStack: ["IPTV", "Distributed Systems", "Performance Engineering"],
    featured: false,
  },
];

export const featuredProjects: ProjectItem[] = projects.filter(
  (project) => project.featured,
);
