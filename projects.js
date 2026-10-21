window.PORTFOLIO_PROJECTS = [
  {
    "title": "Sydney Opal Patronage Analysis",
    "slug": "opal",
    "category": "TRANSPORT ANALYTICS",
    "tech": "Python · Pandas · SQLite · SQL · Tableau",
    "description": "Analysed approximately 6,800 Sydney Opal patronage records spanning July 2016 to December 2023. Built a reproducible data-cleaning and exploration workflow, then used SQL joins, common table expressions, aggregates and grouped trends to compare recovery across transport modes and passenger types.",
    "detail": "Found that train and bus patronage remained around 73–74% of 2019 levels in 2023, while ferry trips had recovered to approximately 102%. Investigated an apparent 48% decline in adult Opal trips and identified migration to contactless payment as an important explanation.",
    "url": "https://public.tableau.com/views/SydneyOpalPatronageRecoveryAnalysis/SydneyOpalPatronageCOVIDImpactRecovery20162023",
    "linkLabel": "View interactive Tableau dashboard ↗"
  },
  {
    "title": "Guitar Note Classifier",
    "slug": "guitar",
    "category": "AUDIO MACHINE LEARNING",
    "tech": "Python · Librosa · TensorFlow · CNN · Plotly",
    "description": "Developed a workflow to identify guitar notes from audio. Used Librosa to detect note onsets, transformed audio segments into Mel spectrogram representations and trained a convolutional neural network to classify the notes.",
    "detail": "Used an 80/20 training–testing split and trained for 20 epochs. Applied non-maximum suppression to reduce duplicate detections and explored model output using visual analysis tools.",
    "url": null,
    "linkLabel": null
  },
  {
    "title": "Mellow — YouTube Recommendation Filter",
    "slug": "mellow",
    "category": "AI-POWERED BROWSER EXTENSION",
    "tech": "Python · Flask · SQLite · LLMs · JavaScript",
    "description": "Contributed to a four-person Agile team building a Chrome/Edge extension that gives users greater control over YouTube recommendations. Developed the LLM classification pipeline using engineered prompts, structured JSON validation and automated retry handling.",
    "detail": "Built privacy-aware metadata preprocessing and SQLite-backed classification storage. Integrated concurrent processing with the extension, reducing video processing time by 15%. The application supports content categories, adjustable filtering and optional Shorts filtering.",
    "url": "https://github.com/TanishKhurana-1610/Mellow-YoutubeClassifier",
    "linkLabel": "View GitHub repository ↗"
  },
  {
    "title": "FitTrack — Fitness Tracking App",
    "slug": "fittrack",
    "category": "FULL-STACK WEB APPLICATION",
    "tech": "Flask · Python · SQLite · SQLAlchemy · Bootstrap",
    "description": "Collaborated on a responsive fitness tracking web application that lets users create accounts, record workouts, manage training plans and monitor their activity. The Flask backend uses SQLAlchemy for data persistence, with HTML, CSS, JavaScript and Bootstrap on the frontend.",
    "detail": "Features workout logging and editing, a live stopwatch, progress statistics, personalised plan recommendations, editable profiles, password reset and a privacy-aware community leaderboard. The repository also includes automated unit and browser tests.",
    "url": "https://github.com/TanishKhurana-1610/Fit_Track",
    "linkLabel": "View GitHub repository ↗"
  },
  {
    "title": "COVID-19 Data Exploration",
    "slug": "covid",
    "category": "SQL DATA EXPLORATION",
    "tech": "SQL · Data Cleaning · Exploratory Analysis",
    "description": "Worked with COVID-19 deaths and vaccination datasets in a SQL analysis project, preparing the data for investigation and practising structured querying on public-health data.",
    "detail": "The project focuses on exploring changes over time and comparing measures across locations. Source code can be linked when its repository URL is available.",
    "url": null,
    "linkLabel": null
  },
  {
    "title": "Movie Industry Analysis",
    "slug": "movies",
    "category": "PYTHON DATA ANALYSIS",
    "tech": "Python · Pandas · Matplotlib",
    "description": "Used Python and Pandas to investigate a movie-industry dataset, examining attributes such as production budgets and gross earnings. Prepared numeric fields for analysis and used visualisations to explore possible relationships.",
    "detail": "Focused on exploratory analysis, correlation checks and interpretable plots rather than assuming that correlation proves causation. The code repository can be linked when available.",
    "url": null,
    "linkLabel": null
  },
  {
    "title": "Power BI Dashboard",
    "slug": "powerbi",
    "category": "PLANNED PROJECT",
    "tech": "Power BI · Business Intelligence · Reporting",
    "description": "A planned reporting portfolio project focused on transforming raw business information into accessible, interactive views for decision-making.",
    "detail": "This project is marked as planned and is not presented as completed work.",
    "url": null,
    "linkLabel": null
  }
];
