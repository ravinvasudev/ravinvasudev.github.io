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
      "Establish FinOps, security and compliance guardrails that keep delivery fast without loosening risk posture.",
      "Advise engineering leadership on migration strategy, SaaS architecture and technology adoption roadmaps.",
    ],
    metrics: [
      "Enterprise-wide cloud governance ownership",
      "Landing zone blueprints for multi-account estates",
    ],
    techStack: [
      "AWS",
      "Kubernetes",
      "Terraform",
      "OpenTofu",
      "Cloud Governance",
      "FinOps",
      "DevSecOps",
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
      "15+ engineers across 4 teams aligned",
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
      "Spearheaded build and pipeline modernization, including the Ant to Gradle migration and CI/CD automation.",
      "Mentored 15+ engineers on agile engineering, DevSecOps adoption and quality-first delivery practices.",
    ],
    metrics: ["60% improvement in build and execution efficiency"],
    techStack: ["Gradle", "CI/CD", "DevSecOps", "Agile", "Java"],
  },
  {
    id: "etisalat-solutions-architect-2014",
    company: "Etisalat Software Solutions Pvt Ltd",
    location: "Dubai, UAE",
    title: "Solutions Architect",
    startDate: "2014-08",
    endDate: "2019-02",
    isCurrent: false,
    coreFocus:
      "Architected telecom platform components at global subscriber scale and led modular modernization of legacy systems.",
    highlights: [
      "Architected platform components serving 200+ million subscribers across 38 countries.",
      "Led modernization of legacy monoliths into modular and microservices-based architectures.",
      "Designed high-throughput messaging platforms handling 100K+ daily SMS and email transactions.",
      "Delivered enterprise authentication and OTP services reused by customer-facing applications.",
    ],
    metrics: [
      "200M+ subscribers supported",
      "38 countries in scope",
      "100K+ daily messaging transactions",
    ],
    techStack: [
      "Java",
      "Microservices",
      "REST",
      "Caching",
      "Authentication",
      "OTP",
      "SSO",
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
    metrics: [],
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
    metrics: ["Up to 80% idle bandwidth savings"],
    techStack: [
      "IPTV",
      "Distributed Systems",
      "Performance Engineering",
      "C++",
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
