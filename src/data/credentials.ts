import type { Achievement, EducationItem } from "../types";

export const achievements: Achievement[] = [
  {
    id: "siemens-noc-star-awards",
    title: "Siemens Innovation Week - NOC AI Agent",
    organization: "Siemens Canada Limited",
    timeframe: "2024 - 2025",
    description:
      "Awarded for designing and building an agentic AI workflow using n8n that autonomously monitors, triages, and resolves incidents.",
  },
  {
    id: "siemens-star-awards",
    title: "Siemens STAR Award (multiple)",
    organization: "Siemens Canada Limited",
    timeframe: "2019 - 2025",
    description:
      "Recognized repeatedly for technical leadership and measurable platform impact on the Depot360 and DEMS.",
  },
  {
    id: "etisalat-hero-award",
    title: "Etisalat Hero Award (twice)",
    organization: "Etisalat Software Solutions",
    timeframe: "2014 - 2019",
    description:
      "Awarded for innovation and delivery excellence on carrier-scale platform modernization.",
  },
];

export const education: EducationItem[] = [
  {
    id: "punjab-technical-university",
    degree: "Bachelor of Information Technology",
    institution: "Punjab Technical University",
    location: "India",
    graduationYear: "2006",
  },
  {
    id: "thapar-polytechnic",
    degree: "Diploma in Computer Science and Engineering",
    institution: "Thapar Polytechnic",
    location: "Patiala, India",
    graduationYear: "2003",
  },
];
