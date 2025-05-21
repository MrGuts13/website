export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

export const skillsData: Record<string, SkillCategory> = {
  programming: {
    title: "Programming & Data Science",
    icon: "💻",
    description: "Languages and tools for data analysis and manipulation",
    skills: [
      "Python",
      "R",
      "Java",
      "JavaScript",
      "SQL",
      "SPARQL",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "RDFlib",
      "Regex",
      "Jinja2"
    ]
  },
  machinelearning: {
    title: "Machine Learning & AI",
    icon: "🧠",
    description: "AI techniques and algorithms",
    skills: [
      "LLM Prompt Engineering",
      "Neural Networks",
      "Random Forest",
      "SVM",
      "Bayesian Optimization",
      "Feature Selection",
      "Supervised/Unsupervised Learning",
      "PCA",
      "Agentic Workflows",
      "Document/Lead Classification"
    ]
  },
  dataengineering: {
    title: "Software & Data Engineering",
    icon: "🔧",
    description: "Building and deploying data systems",
    skills: [
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "ETL Scheduling",
      "Data Validation",
      "Webhooks",
      "API Integration",
      "CLI Tools",
      "Secure Credential Vaulting",
      "Google Cloud Platform",
      "PySpark",
      "Hadoop",
      "Distributed Computing",
      "TFRecord Optimization",
      "Parallel Data Processing"
    ]
  },
  uiux: {
    title: "UI/UX & Visualization",
    icon: "🎨",
    description: "Creating interfaces and visualizing data",
    skills: [
      "Streamlit (advanced)",
      "React (basic)",
      "TailwindCSS (basic)",
      "Custom JS Enhancements",
      "UI State Management",
      "Dashboard Design",
      "Tableau",
      "Observable",
      "Folium",
      "GeoPandas",
      "RDF",
      "Knowledge Graphs",
      "Data Modeling"
    ]
  },
  cybersecurity: {
    title: "Cybersecurity & DevOps",
    icon: "🔒",
    description: "Protecting systems and deployment",
    skills: [
      "IEC 62443",
      "OT Cybersecurity",
      "e-KYC Vendor Evaluation",
      "Network Security",
      "Secure System Configuration",
      "Risk Assessment",
      "Docker",
      "WSL2",
      "Git",
      "Environment Management",
      "Secure Deployment"
    ]
  }
};