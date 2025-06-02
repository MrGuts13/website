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
    title: "Mini IDP - AI Workflow Platform",
    icon: "🤖",
    shortDescription: "Full-stack AI workflow platform for self-serve document processing with RAG chatbots and summarizers.",
    fullDescription: "Engineered a production-ready, full-stack AI Workflow Platform (Mini IDP) enabling enterprise users to upload CSVs, train machine learning models, and gain actionable insights in less than 30 seconds, alongside automated document processing via RAG chatbots and summarizers. Implemented a modular microservices-inspired architecture with a FastAPI backend, React frontend, and Prefect for robust workflow orchestration. Established scalable PostgreSQL data infrastructure with comprehensive validation and error handling.",
    technologies: ["FastAPI", "React", "Prefect", "PostgreSQL", "NLP", "LLM", "RAG", "Microservices", "Docker"],
    keyFeatures: [
      "Self-serve AI for rapid ML model training from CSV uploads, intelligent document analysis, and summarization",
      "Modular microservices-inspired architecture ensuring scalability and reliability",
      "High-performance RAG, NLP, & ML pipelines with end-to-end LLM integration",
      "Robust workflow orchestration with Prefect and scalable PostgreSQL infrastructure"
    ],
    outcome: "Delivered end-to-end document automation and intelligent analytics, drastically reducing model development time from weeks to minutes, with ML models achieving 89.65% R² accuracy and sub-second training on 10K+ row datasets, and zero critical production bugs."
  },
  {
    title: "Intelligent B2B Lead Generation Platform",
    icon: "🚀",
    shortDescription: "Fully orchestrated workflow automation engine for B2B lead ingestion, LLM-powered email generation, and campaign tracking.",
    fullDescription: "Built a fully orchestrated workflow automation engine using n8n for lead ingestion, personalized email generation via LLM prompts, PDF proposal attachments, and campaign tracking, built for B2B marketers to automate cold outreach using personalized LLM-generated emails and campaign tracking, enabling consistent lead flow without manual effort.",
    technologies: ["n8n", "LLM", "Workflow Automation", "PDF Generation", "Campaign Tracking"],
    keyFeatures: [
      "Automated lead ingestion and enrichment",
      "Personalized LLM-powered email generation",
      "PDF proposal attachments",
      "Campaign tracking and analytics"
    ],
    outcome: "Automated and personalized B2B lead generation, reducing manual effort and increasing lead flow."
  },
  {
    title: "RAG-Powered Knowledge Chatbot",
    icon: "💬",
    shortDescription: "Local RAG chatbot for semantic Q&A across multiple PDFs using LangChain, FAISS, FastAPI, and Ollama.",
    fullDescription: "Built a fullstack local RAG chatbot using LangChain, FAISS, FastAPI, and Ollama, enabling semantic question-answering across multiple uploaded PDFs. Engineered dynamic context filtering with vector index rebuilding and cross-encoder re-ranking, solving ghost context issues and boosting LLM answer precision.",
    technologies: ["LangChain", "FAISS", "FastAPI", "Ollama", "RAG", "Vector Search"],
    keyFeatures: [
      "Semantic Q&A over multiple PDFs",
      "Dynamic context filtering and vector index rebuilding",
      "Cross-encoder re-ranking for improved answer precision"
    ],
    outcome: "Boosted LLM answer precision and solved ghost context issues for enterprise document Q&A."
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