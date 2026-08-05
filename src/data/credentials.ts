import type { Achievement, EducationItem } from "../types";

export const achievements: Achievement[] = [
  {
    id: "siemens-star-awards",
    title: "Siemens STAR Award (multiple)",
    organization: "Siemens Canada Limited",
    timeframe: "2022 - 2025",
    description:
      "Recognized repeatedly for technical leadership and measurable platform impact on the Depot360 program.",
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
