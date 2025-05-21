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
      "Engineered the frontend for an internal Generative AI platform of national utilities and energy leader using React, Streamlit, and TypeScript, enabling natural language-driven analytics including SQL query generation, document summarization, data visualizations, and automated reporting.",
      "Orchestrated the end-to-end setup of a distributed microservices architecture with 7+ .NET/Python backend APIs, PostgreSQL databases, and Dockerized services, independently debugged complex SAML/ADFS authentication flows and enabled full local development integration.",
      "Delivered production-ready features in isolation by rebuilding UI from Figma designs, implementing core logic in Storybook, and simulating API responses, demonstrating strong independent problem-solving, component-based development, and resilience under system access constraints.",
      "Conducted OT cybersecurity audit for a critical infrastructure client, co-developing audit plans, evidence procedures, and IEC 62443 assessments covering ICS security, remote access, and network segmentation to strengthen compliance, risk management, and threat detection.",
      "Conducted cybersecurity validation assessments for a financial institution, ensuring e-KYC vendor solutions comply with BNM e-KYC Policy Document (April 2024), focusing on identity verification, fraud prevention, and compliance risk mitigation."
    ],
    technologies: ["React", "Streamlit", "TypeScript", ".NET", "Python", "PostgreSQL", "Docker", "SAML", "ADFS", "Figma", "Storybook", "Cybersecurity", "OT Security", "IEC 62443", "e-KYC", "Compliance"]
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