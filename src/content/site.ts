// Site content: single source of truth for the portfolio.
// Wording below is intentional — do not add metrics or features not listed here.

export interface SiteLinks {
  email: string;
  github: string;
  linkedin: string;
  resume: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
}

export interface Project {
  name: string;
  /** e.g. "solo", "5-person team", "SEO team project", "class project" */
  context: string;
  tagline: string;
  stack: string[];
  details: string[];
  githubUrl: string | null;
  liveUrl: string | null;
}

export const name = "Anika Hakim";

// Bio facts for the About section (final wording TBD).
export const bioFacts: string[] = [
  "CS student at NYU Tandon, BS graduating December 2027",
  "Born and raised in Queens, NYC",
  "Currently taking Software Engineering, Operating Systems, and Computer Security",
  "Work at NYU Campus Planning as a software engineer on a React data viz platform",
  "AI Fellow with Break Through Tech at Cornell Tech (year-long fellowship, eCornell ML Foundations Certificate)",
  "Currently on a Break Through Tech AI Studio team building a fraud risk-scoring model for auto insurance claims with LexisNexis Risk Solutions Group",
  "CSE Peer Mentor at NYU Tandon, helping incoming CS students settle in",
  "Tutor at Kweller Prep (SHSAT, Geometry, Algebra 2)",
  "Outside of coding: weightlifting at the gym",
  "Looking for Summer 2027 SWE internships, NYC first",
];

export const links: SiteLinks = {
  email: "ah7203@nyu.edu",
  github: "https://github.com/Anikahakim",
  linkedin: "https://www.linkedin.com/in/anika-hakim/",
  resume: "/public/AnikaHakim_Resume.pdf",
  // No phone number on the site.
};

export interface SkillGroup {
  heading: string;
  items: string[];
}

// Verbatim from the resume Technical Skills section.
export const skills: SkillGroup[] = [
  {
    heading: "Languages & Frameworks",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "React", "Next.js", "Flask", "Supabase"],
  },
  {
    heading: "Tools & Databases",
    items: ["PostgreSQL", "MySQL", "RESTful APIs", "Git", "Cursor", "Claude Code", "VS Code", "Vercel"],
  },
];

// Newest first. Con Edison always last.
export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer, Visualization",
    organization: "NYU Campus Planning and Technical Services",
    period: "Apr 2026 to present",
    bullets: [
      "Maintain a React-based data visualization platform, resolving 20 tickets/week across frontend, data, and backend.",
      "Debug full-stack issues spanning React, Python data processing, and SQL queries, tracing root causes from the database to the frontend display.",
      "Use Cursor and Claude Code daily to accelerate development, reviewing and validating all AI-generated code before merging.",
    ],
  },
  {
    role: "CSE Peer Mentor",
    organization: "NYU Tandon Computer Science and Engineering Dept",
    period: "Sep 2026 to present",
    bullets: [
      "Guide incoming CS underclassmen through the transition into Tandon for the Computer Science and Engineering Department, working directly with advisors and freshmen.",
    ],
  },
  {
    role: "AI Program Fellow",
    organization: "Break Through Tech at Cornell Tech",
    period: "May 2026 to present",
    bullets: [
      "Selected for a year-long AI fellowship, completing a 9-week course in machine learning and applied statistical modeling.",
      "Collaborated with a team to apply machine learning techniques to an industry-sponsored dataset, from data cleaning through model evaluation.",
      "Earned the eCornell Machine Learning Foundations Certificate, covering the ML lifecycle, supervised learning, neural networks, LLMs, RAG, and agentic AI workflows.",
      "Fall 2026 AI Studio project with LexisNexis Risk Solutions Group: fraud risk-scoring model for auto insurance claims.",
    ],
  },
  {
    role: "SEO Tech Developer",
    organization: "Sponsors for Educational Opportunity",
    period: "May 2026 to Jul 2026",
    bullets: [
      "Built and tested full-stack web applications end to end, from front-end UI in HTML/JS/CSS to back-end services and REST APIs in Python (Flask) and MySQL, in SCRUM teams under tight cycles.",
      "Led back end development of Imposter, an Among Us-style social deduction game, designing the Supabase/PostgreSQL schema and Python (Flask) game logic, with hands-on HTML/JS frontend work.",
    ],
  },
  {
    role: "Sophomore Extern",
    organization: "SoFi",
    period: "Aug 2026",
    bullets: [
      'Led a team of four in a case study challenge on the prompt "make SoFi a verb" and won.',
      'Proposed "SoFi It," a one-tap financial check in the phone\'s share sheet that gives an instant, reasoned verdict on a purchase or subscription without leaving the app.',
      "Built the entire interactive mobile prototype, with six scenarios across host apps like Amazon, Mail, and Ticketmaster, and demoed it to a panel of SoFi leaders; our team won the competition.",
    ],
  },
  {
    role: "Tutor",
    organization: "Kweller Prep",
    period: "Jan 2025 to present",
    bullets: [
      "SHSAT prep, Geometry, and Algebra 2, one-on-one and small groups.",
    ],
  },
  {
    role: "Computer Aide Intern",
    organization: "Con Edison",
    period: "Jul 2023 to Aug 2024",
    bullets: [
      "Analyzed 20,000+ cable failure records.",
      "Built Python, Excel, and VBA data pipelines used for infrastructure reliability decisions.",
    ],
  },
];

// Featured projects, in display order.
export const featuredProjects: Project[] = [
  {
    name: "Racked",
    context: "solo",
    tagline: "Mobile-first closet app.",
    stack: ["Next.js", "Supabase", "Claude API", "Vercel"],
    details: [
      "Client-side background removal",
      "Claude vision categorization with forced tool use and a fixed schema",
      "Rule-based outfit pairing with color and pattern scoring",
      "Tinder-style swipe outfit builder",
    ],
    githubUrl: "https://github.com/Anikahakim/Racked",
    // TODO: no live link yet.
    liveUrl: null,
  },
  {
    name: "FinBro",
    context: "5-person team",
    tagline: "Personal finance app.",
    stack: ["React", "TypeScript", "Supabase", "Plaid", "Vercel"],
    // My contributions only — the ML auto-categorization was a teammate's work.
    details: [
      "Contributed the second-most commits on a 5-person team building a personal finance web app, implementing Plaid bank-account linking, budget tracking, and transaction logic.",
      "Built the registration flow and dashboard/history pages, and wrote a Vitest unit and integration test suite; deployed on Vercel.",
    ],
    githubUrl: "https://github.com/itzdxrius/finbro",
    liveUrl: "https://finbro-lime.vercel.app",
  },
  {
    name: "Let's Hang",
    context: "solo",
    tagline: "Friend scheduling app.",
    stack: ["Next.js", "Supabase", "PostgreSQL"],
    details: [
      "Built a full-stack scheduling app solo that parses uploaded Apple Calendar (.ics) files and automatically detects overlapping availability across multiple users.",
      "Handled edge cases in calendar data, including conflicting events and duplicate entries, while normalizing data across different calendar formats.",
    ],
    githubUrl: "https://github.com/Anikahakim/Let-s-Hang",
    liveUrl: null,
  },
];

export const otherProjects: Project[] = [
  {
    name: "Imposter",
    context: "SEO team project",
    tagline: "Among Us-style social deduction game.",
    stack: ["Flask", "Supabase", "PostgreSQL", "HTML", "JavaScript"],
    details: [
      "Led backend: Supabase/PostgreSQL schema and Flask game logic, plus HTML/JS frontend work.",
    ],
    githubUrl: null,
    liveUrl: null,
  },
  {
    name: "Mira",
    context: "class project",
    tagline: "Strava-style photography app.",
    stack: ["React Native", "Supabase", "PostgreSQL"],
    details: [
      "Designed the schema (6+ entities) and built in-app search.",
    ],
    githubUrl: null,
    liveUrl: null,
  },
  {
    name: "AquaBalance Pro",
    context: "class project",
    tagline: "Arduino/C++ system automating fish feeding and pH regulation with non-blocking millis() timers.",
    stack: ["Arduino", "C++"],
    details: [],
    // No public repo.
    githubUrl: null,
    liveUrl: null,
  },
];
