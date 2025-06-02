export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    company: "EY",
    role: "Technology Consultant",
    location: "Kuala Lumpur, Malaysia",
    period: "Aug 2024 - Present",
    responsibilities: [
      "Delivered enterprise GenAI platform features serving 1000+ users within 2 weeks, implementing secure S3 file handling and mobile-responsive UI for Malaysian utilities provider (20,000+ employees).",
      "Implemented advanced frontend features including secure multi-file uploads for RAG-enabled LLMs and interactive document viewers, enhancing data accessibility and user interaction with AI-generated insights.",
      "Led frontend architecture for internal GenAI platform, accelerating feature delivery aligned with strategic objectives.",
      "Conducted OT cybersecurity audits for critical infrastructure, developing IEC 62443 compliance frameworks and strengthening threat detection capabilities.",
      "Conducted cybersecurity assessments for financial institutions, ensuring e-KYC vendor compliance with BNM Policy (April 2024) for identity verification and fraud prevention."
    ],
    technologies: ["React", "Streamlit", "TypeScript", ".NET", "Python", "PostgreSQL", "Docker", "SAML", "ADFS", "Figma", "Storybook", "Generative AI", "LLMs (Large Language Models)", "SQL", "Microservices Architecture", "Cybersecurity", "OT Security", "IEC 62443", "e-KYC", "Compliance"]
  },
  {
    company: "Cherengin Hills",
    role: "Corporate Sales & Strategy Associate",
    location: "Kuala Lumpur, Malaysia",
    period: "Jan 2021 - Jun 2022",
    responsibilities: [
      "Acquired and negotiated corporate sales agreements, securing RM80,000 in revenue by orchestrating corporate training seminars for multiple companies, through good relationship-building and negotiation skills with key corporate representatives."
    ],
    technologies: ["Corporate Sales", "Negotiation", "Relationship Building", "Strategic Planning"]
  },
  {
    company: "PricewaterhouseCoopers",
    role: "Assurance Associate",
    location: "Kuala Lumpur, Malaysia", 
    period: "Mar 2020 - Jul 2020",
    responsibilities: [
      "Conducted trend analytics and technical and reasonableness analysis on the PPE, Intangible Assets, Overhead expenses, Payroll expenses and subordinated obligations financial statement line items.",
      "Identified accounting errors via detailed analysis and understanding of client's business cash flow enabled recovery of errors could result in $25000 of variances."
    ],
    technologies: ["Financial Analysis", "Trend Analytics", "Accounting", "Audit"]
  }
];