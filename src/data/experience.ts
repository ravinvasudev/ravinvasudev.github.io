import type { ExperienceItem, Metric } from "../types";

export const impactMetrics: Metric[] = [
  {
    id: "experience-span",
    label: "Years in engineering and architecture",
    value: "19+",
    description:
      "Continuous progression from software engineering to enterprise cloud architecture leadership.",
  },
  {
    id: "microservice-scale",
    label: "Microservices architected",
    value: "100+",
    description:
      "Cloud-native service estate designed on AWS and EKS for a multi-region EV electrification platform.",
  },
  {
    id: "deployment-velocity",
    label: "Deployment cycle time reduction",
    value: "40%",
    description:
      "Achieved through GitOps standardization, DevSecOps automation and progressive delivery patterns.",
  },
  {
    id: "build-efficiency",
    label: "Build and CI execution efficiency gain",
    value: "60%",
    description:
      "Delivered by modernizing legacy build tooling and rebuilding pipelines around caching and parallelism.",
  },
  {
    id: "subscriber-scale",
    label: "Subscribers served by architected platforms",
    value: "200M+",
    description:
      "Telecom platform capabilities operating across 38 countries with strict uptime expectations.",
  },
  {
    id: "bandwidth-savings",
    label: "Idle network bandwidth reclaimed",
    value: "80%",
    description:
      "Multicast session lifecycle controls engineered for large scale IPTV distribution.",
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "siemens-cloud-architect-2025",
    company: "Siemens Canada Limited",
    location: "New Brunswick, Canada",
    title: "Cloud Architect (Cloud Center of Excellence)",
    startDate: "2025-12",
    endDate: null,
    isCurrent: true,
    coreFocus:
      "Define enterprise cloud architecture standards, governance patterns and paved roads adopted across product organizations.",
    highlights: [
      "Author cloud architecture standards, governance frameworks and multi-account landing zone blueprints.",
      "Drive adoption of cloud-native patterns, Infrastructure as Code conventions and platform engineering practices.",
      "Led CastAI rollout for multi-account EKS estates, defining the target architecture, aligning stakeholders, and delivering Terraform modules for central IT.",
      "Establish FinOps, security and compliance guardrails that keep delivery fast without loosening risk posture.",
      "Led Sumologic observability rollout for multi-account EKS estates, aligning stakeholders and standardizing centralized dashboards and alerting.",
      "Advise engineering leadership on migration strategy, SaaS architecture and technology adoption roadmaps.",
    ],
    metrics: [
      "Enterprise-wide cloud governance ownership",
      "Landing zone blueprints for multi-account estates",
      "CastAI and Sumologic rollout",
    ],
    techStack: [
      "AWS",
      "Kubernetes",
      "Terraform",
      "OpenTofu",
      "Cloud Governance",
      "FinOps",
      "DevSecOps",
      "CastAI",
      "Sumologic",
    ],
  },
  {
    id: "siemens-system-architect-2022",
    company: "Siemens Canada Limited",
    location: "New Brunswick, Canada",
    title: "System Architect",
    startDate: "2022-10",
    endDate: "2025-11",
    isCurrent: false,
    coreFocus:
      "Owned architecture strategy and the technical roadmap for Depot360, a multi-region EV fleet electrification platform.",
    highlights: [
      "Defined the cloud-native architecture for 100+ microservices running on AWS and EKS.",
      "Led and mentored 4 cross-functional teams totalling 15+ engineers.",
      "Standardized infrastructure and delivery on Terraform, Helm and ArgoCD GitOps workflows.",
      "Designed event-driven services with Java, Spring Boot, Kafka and Redis for real-time telemetry processing.",
      "Implemented full-stack observability with Prometheus, Grafana and ELK.",
    ],
    metrics: [
      "40% reduction in deployment cycle time",
      "100+ microservices under one architecture standard",
      "15+ engineers across 4 teams mentored",
    ],
    techStack: [
      "AWS",
      "EKS",
      "Terraform",
      "Helm",
      "ArgoCD",
      "Java",
      "Spring Boot",
      "Kafka",
      "Redis",
      "Prometheus",
      "Grafana",
      "ELK",
    ],
  },
  {
    id: "siemens-team-lead-2019",
    company: "Siemens Canada Limited",
    location: "New Brunswick, Canada",
    title: "Software Development Team Lead",
    startDate: "2019-07",
    endDate: "2022-10",
    isCurrent: false,
    coreFocus:
      "Led engineering delivery for Distributed Energy Management Systems covering distributed grid assets and predictive optimization.",
    highlights: [
      "Developed next-generation Distributed Energy Management System (DEMS) to orchestrate distributed assets across the grid.",
      "Contributed to feature development and system enhancements while collaborating with cross-functional teams.",
      "Spearheaded build and pipeline modernization, pushing build improvements by 60% including the Ant to Gradle migration and CI/CD automation.",
      "Mentored 15+ engineers on agile engineering, DevSecOps adoption and quality-first delivery practices.",
    ],
    metrics: [
      "60% improvement in build and execution efficiency",
      "Ant to Gradle migration",
      "CI/CD automation and DevSecOps adoption",
    ],
    techStack: ["Gradle", "CI/CD", "DevSecOps", "Agile", "Java"],
  },
  {
    id: "etisalat-solutions-architect-2014",
    company: "Etisalat Software Solutions Pvt Ltd",
    location: "Dubai, UAE",
    title: "Solutions Architect",
    startDate: "2017-01",
    endDate: "2019-02",
    isCurrent: false,
    coreFocus:
      "Led solution architecture and platform design at global subscriber scale, while remaining hands-on for critical implementation paths.",
    highlights: [
      "Owned architecture and solution design for platform capabilities serving 200+ million subscribers across 38 countries.",
      "Converted scale, reliability, and business requirements into modular service designs and API contracts.",
      "Led modernization of legacy monoliths into modular and microservices-based architectures.",
      "Partnered with engineering teams to implement high-throughput messaging and authentication capabilities, contributing code on key modules when required.",
    ],
    metrics: [
      "200M+ subscribers supported",
      "38 countries in scope",
      "100K+ daily messaging transactions",
    ],
    techStack: [
      "AWS",
      "SaaS",
      "Solution Design",
      "Microservices",
      "REST",
      "Caching",
      "Authentication",
      "SSO",
    ],
  },
  {
    id: "etisalat-solutions-tech-lead-2014",
    company: "Etisalat Software Solutions Pvt Ltd",
    location: "Dubai, UAE",
    title: "Software Development Tech Lead",
    startDate: "2014-08",
    endDate: "2016-12",
    isCurrent: false,
    coreFocus:
      "Led hands-on engineering delivery with strong coding ownership, while establishing the design foundations that evolved into the Solutions Architect role.",
    highlights: [
      "Led development delivery for telecom platform services operating at 200+ million subscriber scale across 38 countries.",
      "Wrote and reviewed production code for Java and Spring services, REST APIs, caching flows, and integration components.",
      "Drove early modernization from monolithic components toward modular service boundaries.",
      "Built foundational messaging, authentication, and OTP capabilities.",
    ],
    metrics: [
      "200M+ subscribers supported",
      "38 countries in scope",
      "Core services reused across customer-facing applications",
    ],
    techStack: [
      "Java",
      "Spring",
      "Microservices",
      "REST",
      "Caching",
      "System Design",
      "SMS",
      "USSD",
    ],
  },
  {
    id: "ericsson-senior-integrator-2012",
    company: "Ericsson India Global Services Pvt Ltd",
    location: "Gurgaon, India",
    title: "Senior Solution Integrator",
    startDate: "2012-02",
    endDate: "2014-07",
    isCurrent: false,
    coreFocus:
      "Engineered critical integration adapters across prepaid charging and billing ecosystems.",
    highlights: [
      "Built integration adapters between prepaid charging systems and BSS/OSS platforms.",
      "Integrated Ericsson prepaid charging with AT&T billing systems to enable hybrid plan models.",
      "Delivered Amdocs Cramer integration flows that improved network data operations and reliability.",
    ],
    metrics: ["Billing system integration", "Hybrid plan support for AT&T"],
    techStack: ["BSS/OSS", "System Integration", "Telecom Billing", "Java"],
  },
  {
    id: "digivision-senior-software-engineer-2009",
    company: "Digivision Entertainment Pvt Ltd",
    location: "Gurgaon, India",
    title: "Senior Software Engineer",
    startDate: "2009-03",
    endDate: "2012-02",
    isCurrent: false,
    coreFocus:
      "Led IPTV platform development with performance-focused architecture improvements.",
    highlights: [
      "Led core IPTV platform development for low-bandwidth, high-scale delivery.",
      "Designed multicast session control architecture that removed idle network consumption.",
    ],
    metrics: [
      "Up to 80% idle bandwidth savings",
      "Multicast session lifecycle management",
    ],
    techStack: [
      "IPTV",
      "Distributed Systems",
      "Performance Engineering",
      "Javascript",
    ],
  },
  {
    id: "aithent-software-engineer-2007",
    company: "Aithent Technologies Pvt Ltd",
    location: "Gurgaon, India",
    title: "Software Engineer",
    startDate: "2007-04",
    endDate: "2009-03",
    isCurrent: false,
    coreFocus:
      "Built enterprise data and learning platforms supporting financial and insurance workflows.",
    highlights: [
      "Delivered B2B licensing data aggregation solutions for North American financial clients.",
      "Built e-learning and certification platforms used by insurance professionals.",
    ],
    metrics: [],
    techStack: ["Java", "B2B Platforms", "Data Aggregation", "SQL"],
  },
];
