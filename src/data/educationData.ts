export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  coursework?: string;
  achievements?: string[];
}

export const educationData: EducationItem[] = [
  {
    institution: "City, University of London",
    degree: "MSc Data Science",
    location: "London, United Kingdom",
    period: "Sep 2022 - Jul 2024",
    coursework: "Data Visualization, Machine Learning, Principles of Data Science, Statistics, Big Data, Visual Analytics, Neural Computing, Semantics and Knowledge Graphs."
  },
  {
    institution: "University Of Melbourne",
    degree: "Bachelor of Commerce",
    location: "Melbourne, Australia",
    period: "Jan 2017 - Dec 2019",
    coursework: "Financial Statement Analysis, Advanced Financial Management, M&A, Options, Futures & Derivatives, Quantitative Methods, Real Estate Finance, Investments, Financial and Management Accounting.",
    achievements: [
      "Active member of the Entrepreneurship club",
      "President of Malaysians of Melbourne University student organization",
      "Organized multiple large-scale events for the university community"
    ]
  }
];