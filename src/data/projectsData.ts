export interface ProjectItem {
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  keyFeatures?: string[];
  outcome?: string;
}

export const projectsData: ProjectItem[] = [
  {
    title: "Intelligent B2B Lead Generation Platform",
    icon: "🚀",
    shortDescription: "End-to-end AI-powered B2B lead generation system with automated workflows and personalized outreach.",
    fullDescription: "Designed and deployed a comprehensive AI-powered B2B lead generation platform that automates the entire process from data collection to personalized outreach. The system includes sophisticated scraping mechanisms, data validation pipelines, and intelligent enrichment processes, all secured with proper credential management. The backend uses FastAPI and SQLite for persistence, while the workflow automation is handled by n8n for orchestrating complex processes.",
    technologies: [
      "Python", "FastAPI", "SQLite", "SQLAlchemy", "n8n", "LLM Prompt Engineering", 
      "Data Pipelines", "ETL", "Workflow Automation", "Secure Credential Vaulting"
    ],
    keyFeatures: [
      "End-to-end data pipeline for lead acquisition, validation, enrichment, and storage",
      "Fully orchestrated workflow automation engine using n8n",
      "LLM-powered personalized email generation based on lead characteristics",
      "Automated PDF proposal generation and campaign tracking",
      "Secure credential management and configuration system"
    ],
    outcome: "Created a scalable, automated system that drastically reduced manual effort in lead generation while improving lead quality and personalization of outreach, laying groundwork for future ML-driven scoring and analytics features."
  },
  {
    title: "Exploring Health Disparities in the UK",
    icon: "🔍",
    shortDescription: "Spatial analysis of health outcomes using GWR and machine learning to identify socioeconomic factors affecting public health.",
    fullDescription: "This research project analyzed the spatial relationships between socioeconomic factors and public health outcomes across the UK. By combining geodemographic techniques with advanced machine learning models, we were able to identify significant patterns in how occupation, economic status, and ethnicity correlated with health disparities across different regions.",
    technologies: [
      "Python", "GeoPandas", "Machine Learning", "Neural Networks", "Random Forest", 
      "SVM", "Geographically Weighted Regression", "Optuna", "Feature Selection"
    ],
    keyFeatures: [
      "Geodemographic analysis using Geographically Weighted Regression (GWR)",
      "Implementation of multiple machine learning models including Neural Networks, Random Forest, and SVM",
      "Rigorous feature selection process to identify the most significant socioeconomic indicators",
      "Hyperparameter optimization using Optuna",
      "Spatial visualization of health outcome variability"
    ],
    outcome: "The analysis provided actionable insights for public health interventions by identifying key socioeconomic factors with the strongest correlation to health disparities across different UK regions, creating a foundation for more targeted urban development strategies."
  },
  {
    title: "Cloud-Based Big Data Optimization Project",
    icon: "☁️",
    shortDescription: "High-performance distributed data processing implementation using PySpark and TensorFlow on Google Cloud.",
    fullDescription: "Implemented an optimized Big Data processing system using distributed computing technologies. The project focused on maximizing throughput and minimizing processing time for large-scale image datasets by leveraging Apache Spark's distributed processing capabilities combined with TensorFlow for efficient computation. The system was deployed on Google Cloud Dataproc to take advantage of scalable cloud resources.",
    technologies: [
      "PySpark", "TensorFlow", "Google Cloud Platform", "Dataproc", "Cloud Storage", 
      "Distributed Computing", "TFRecord", "Data Processing Optimization"
    ],
    keyFeatures: [
      "Distributed data ingestion and processing workflows using Apache Spark (PySpark)",
      "TensorFlow integration for optimized image processing",
      "Cloud-based speed tests and workload distribution experiments",
      "TFRecord optimization for improved storage and retrieval",
      "Benchmarking against traditional processing methods"
    ],
    outcome: "Achieved a peak throughput of 363.21 images/second and reduced data processing time by up to 74% compared to standard image decoding methods. TFRecord-based storage yielded a 2.5x improvement in reading speed over traditional image file loading."
  }
];