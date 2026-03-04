export const bio = {
    name: "Mohanapriya Narayanan",
    role: "Machine Learning Engineer",
    email: "mohanapriya.narayanann@gmail.com",
    location: "Coimbatore, India",
    summary: "Machine Learning Engineer specializing in scalable MLOps platforms and production-grade GenAI workflows.",
    topSkills: ["Python", "GCP", "MLOps", "GenAI", "Vertex AI", "BigQuery"],
    links: {
        linkedin: "https://www.linkedin.com/in/mohanapriya1706/",
        github: "https://github.com/mohanapriya1706",
        leetcode: "https://leetcode.com/u/mohanapriya-narayanan/"
    }
};

export const experience = [
    {
        company: "Cloudside Technologies",
        role: "Machine Learning Engineer",
        duration: "July 2024 – Present",
        location: "Coimbatore, India",
        points: [
            "Built a scalable, event-driven multimodal enterprise search platform on GCP (Cloud Run, Pub/Sub, BigQuery, Gemini, Vertex AI Search), ingesting 10K+ assets with ~90% Recall@10.",
            "Designed and implemented a production-grade MLOps platform using Vertex AI Pipelines (KFP), enabling repeatable training, evaluation tracking, and GPU-backed model serving.",
            "Implemented canary-style model rollout (10% traffic to new versions) for monitored evaluation before full production rollout.",
            "Developed a forecasting ML pipeline using BigQuery and Vertex AI Pipelines for 5 business metrics with API-based access.",
            "Designed a GenAI-driven conversational workflow combining LLM responses with forecasting and analytics APIs for natural-language predictive insights.",
            "Built configurable data ingestion pipelines to process multimodal content (images, videos, metadata) into RAG-ready sources for Google ADK agents.",
            "Developed a Google ADK–based conversational agent integrating multimodal content and structured BigQuery data with form-based data capture.",
            "Implemented AgentSpace integrations across Google Workspace, Jira, Confluence, and BigQuery for AI-assisted customer support."
        ]
    },
    {
        company: "Aidas Technologies",
        role: "Junior Data Analyst (Intern → Junior Data Analyst)",
        duration: "Mar 2024 – July 2024",
        location: "Coimbatore, India",
        points: [
            "Built an NLP pipeline to analyze unstructured RCM notes using LLaMA for semantic understanding and Naive Bayes for classification.",
            "Constructed an end-to-end RCM timeline by sequencing classified notes to identify workflow points with high revenue impact.",
            "Performed pharmaceutical sales analysis using SQL and advanced Excel to identify key sales drivers and trends."
        ]
    }
];

export const education = [
    {
        institution: "Bharathiar University, Coimbatore",
        degree: "Master’s degree in Data Analytics",
        duration: "Aug 2022 – Apr 2024",
        grade: "CGPA: 8.1/10",
        details: "Gold Medalist (Oct 2024)"
    },
    {
        institution: "Nallamuthu Gounder Mahalingam College, Coimbatore",
        degree: "Bachelor’s degree in Mathematics",
        duration: "Jun 2019 – Jun 2022",
        grade: "CGPA: 7.8/10"
    }
];

export const skills = {
    programming: ["Python", "SQL"],
    ml_ai: ["Machine Learning", "NLP", "Transformers", "RAG", "Time-Series Forecasting", "LLM Fine-Tuning (LoRA)"],
    mlops: ["Vertex AI Pipelines", "Kubeflow", "Model Registry", "Cloud Build", "Docker", "GPU-backed Model Serving"],
    frameworks: ["FastAPI", "TensorFlow", "Scikit-learn", "LangChain", "Google ADK"],
    gcp: ["Vertex AI", "Cloud Run", "BigQuery", "Pub/Sub"],
    cloud: ["Kubernetes"]
};

export const certifications = [
    {
        title: "Google Cloud Certified Professional Machine Learning Engineer",
        link: "https://www.credly.com/badges/45a65ac9-0cf9-4465-b501-7b28dcb871a9/public_url"
    },
    {
        title: "Google Cloud Certified Associate Cloud Engineer",
        link: "https://www.credly.com/badges/8f8f7ed5-e324-4609-b239-acdca26c53f4"
    }
];

export const awards = [
    {
        title: "Core Contributor Award (2025)",
        organization: "Cloudside Technologies",
        link: "https://drive.google.com/file/d/1jPgFOHtp1MoNDHao4ujeb1yuMMgKSOK4/view"
    },
    {
        title: "Performer of the Quarter (Q2 2024)",
        organization: "Cloudside Technologies",
        link: "https://drive.google.com/file/d/1RIRQxMLz-0nUg9XO0sj6NPw1i7byvD_O/view"
    },
    {
        title: "Gold Medalist (Oct 2024)",
        organization: "Bharathiar University",
        link: "https://drive.google.com/file/d/1-89g7lGfqn1rM92o0UhCKzIwX_K6N_Uc/view"
    }
];
