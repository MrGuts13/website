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
      "Developed a Streamlit-based frontend interface enhanced with custom JavaScript and state management, enabling real-time interaction with financial KPIs via natural language input.",
      "Led frontend design as stream lead, integrating with multi-agent backend workflows and ensuring UI responsiveness, reliability, and ease of use across sessions.",
      "Team member of an OT cybersecurity audit for a critical infrastructure client, assessing industrial control systems (ICS) security, remote access controls, network segmentation, and compliance with IEC 62443.",
      "Developed OT audit work plans, evidence collection procedures, and security assessment methodologies, enhancing cyber risk management, compliance validation, and threat detection capabilities.",
      "Conducted cybersecurity validation assessments for a financial institution, ensuring e-KYC vendor solutions comply with BNM e-KYC Policy Document (April 2024), focusing on identity verification, fraud prevention, and compliance risk mitigation."
    ],
    technologies: ["Streamlit", "JavaScript", "UI/UX", "Cybersecurity", "OT Security", "IEC 62443", "e-KYC", "Compliance"]
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