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
    description: "Languages, data science, and analytics tools",
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
    title: "Machine Learning, AI & Automation",
    icon: "🧠",
    description: "ML, AI, LLMs, and workflow automation",
    skills: [
      "LLM Prompt Engineering",
      "Neural Networks",
      "Random Forest",
      "SVM",
      "Bayesian Optimization",
      "Feature Selection",
      "Supervised Learning",
      "Unsupervised Learning",
      "PCA",
      "RAG Pipelines (LangChain, FAISS, Ollama)",
      "Agentic Workflows (n8n)",
      "Conversational UIs",
      "Document Parsing & Comparison",
      "Lead Classification Automation"
    ]
  },
  dataengineering: {
    title: "Software & Data Engineering",
    icon: "🔧",
    description: "Backend, data infrastructure, and automation",
    skills: [
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "SQLite",
      "ETL Scheduling",
      "Data Validation",
      "Webhooks",
      "REST APIs",
      "CLI Tools",
      "Secure Credential Vaulting",
      "Prefect",
      "Celery",
      "Google Cloud Platform (GCS, Dataproc)",
      "PySpark",
      "Hadoop",
      "TFRecord Optimization",
      "Distributed Computing",
      "Parallel Data Processing"
    ]
  },
  uiux: {
    title: "UI/UX & Visualization",
    icon: "🎨",
    description: "Frontend, dashboards, and data visualization",
    skills: [
      "Streamlit (advanced)",
      "React (advanced)",
      "TailwindCSS (advanced)",
      "Custom JavaScript Enhancements",
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
    title: "Cybersecurity, DevOps & Compliance",
    icon: "🔒",
    description: "Security, compliance, and deployment",
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
      "Environment Management (.env, appsettings.local.json)",
      "Secure API Deployment",
      "Azure DevOps",
      "AWS (S3, Secrets Manager, ECR)",
      "Zscaler Certificates"
    ]
  }
};