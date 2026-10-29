/*
 * Single source of truth for every fact on the portfolio.
 *
 * Updating as your career moves:
 *  - New job: add it to the TOP of `roles` with `current: true`, and remove `current` from the old one.
 *    Update `person.current`. Designs pick up the current role, the previous employer and the
 *    first school automatically (see `anchors()` below).
 *  - New project: add an object to `projects`. Order = display order. Set `featured: true` on the
 *    one that should lead. `link` / `github` can be null and the button is simply not rendered.
 *    Put its screenshot in /public/images/projects/.
 *  - New skill: add it to a group in `skills`. Spell it exactly as it appears in a project's `tools`
 *    so the designs can connect the two.
 *  - Optional fields any design will show when present: `role.period` ("2024 – now"),
 *    `project.year`, and `project.imgFocus`, the point of the image to keep in frame when it is
 *    cropped ("50% 60%" = centre horizontally, a bit below middle). Images are centred by default.
 *
 * Rule: never add metrics, testimonials, clients or claims that are not true and supplied by Sean.
 */
import profileImg from "../assets/sean-profile-image.jpg";
import aboutImg from "../assets/sean-about-1400.jpg";

export const person = {
  name: "Sean Galant",
  role: "AI Engineer",
  current: "Head of AI & Innovation at HIVE Property",
  location: "Canberra, Australia",
  tagline: "I build AI agents and data platforms that turn information into actionable intelligence.",
  summary:
    "Head of AI & Innovation at HIVE Property, building AI agents and data platforms that turn information into actionable intelligence.",
  about:
    "I am the Head of AI & Innovation at HIVE Property in Canberra, where I build AI agents and data platforms that turn complexity into competitive advantage. Previously at SIRCLO, I engineered the AI-powered SIRCLO Insights analytics platform. As a Computer Science graduate of both the Australian National University (ANU) and Universitas Indonesia (UI), my focus is simple: solve complex problems, remove friction and build technology that performs.",
  focus: "Solve complex problems, remove friction and build technology that performs.",
  // what you build, in a few words each; designs use these as labels, routes and filters
  practice: ["AI agents", "Data platforms", "Machine learning", "LLM tool calling"],
  profileImg,
  aboutImg,
};

// most recent first
export const education = [
  { school: "Australian National University", short: "ANU", degree: "Computer Science", country: "Australia" },
  { school: "Universitas Indonesia", short: "UI", degree: "Computer Science", country: "Indonesia" },
];

export const links = {
  resume: "https://drive.google.com/file/d/1adsvCB5bGDGS9FUjnNyQVUh4XZqS4F-W/view?usp=sharing",
  email: "m.seangalant@gmail.com",
  phone: "+61 0439-520-353",
  phoneHref: "tel:+61439520353",
  linkedin: "https://www.linkedin.com/in/sean-galant-365113b0/",
  github: "https://github.com/TomoriNow",
  formAction: "https://getform.io/f/awnnvygb", // POST, fields: name, email, message
};

// most recent first; exactly one `current: true`
export const roles = [
  { title: "Head of AI & Innovation", org: "HIVE Property", current: true },
  { title: "Software Engineer (AI)", org: "SIRCLO" },
  { title: "Co-Founder / VP", org: "ANU Data Science Community" },
  { title: "Academic Tutor", org: "ANU Machine Learning" },
  { title: "Teaching Assistant", org: "UI Advanced Programming" },
  { title: "Teaching Assistant", org: "UI Programming Foundations" },
];

export const skills = {
  "AI / ML": ["Python", "PyTorch", "TensorFlow", "scikit-learn", "NumPy", "pandas", "OpenCV", "seaborn", "LLM tool calling"],
  Backend: ["Go", "Java", "Spring Boot", "Django", "PostgreSQL", "BigQuery"],
  Frontend: ["React", "Next.js", "Vue", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "HTML", "CSS", "Flutter"],
};

// img paths are served from /public
export const projects = [
  {
    name: "SIRCLO Insights & SIRCLO AI Chat",
    short: "SIRCLO Insights",
    type: "AI / Full-stack",
    description:
      "An AI-powered analytics platform for Indonesian e-commerce brands. Migrated a legacy analytics hub to React/Vite and Golang on PostgreSQL and BigQuery, and engineered SIRCLO AI Chat, an LLM conversational assistant with tool calling for intuitive data exploration.",
    img: "/images/projects/sirclo-insights.png",
    tools: ["React", "Vite", "Go", "PostgreSQL", "BigQuery", "LLM tool calling"],
    link: "https://sirclo.com/press/data-e-commerce-kian-kompleks-sirclo-luncurkan-dashboard-analitik-berbasis-ai-2",
    github: null,
    featured: true,
  },
  {
    name: "Self-Supervised Image Segmentation",
    short: "Image Segmentation",
    type: "Machine Learning",
    description:
      "Segments a single image of the John Curtin School of Medical Research at ANU into meaningful regions using a self-supervised CNN built on a pre-trained VGG19 encoder and a U-Net architecture.",
    img: "/images/projects/CV_Miniproject_results.png",
    tools: ["Python", "PyTorch", "scikit-learn", "NumPy", "seaborn", "OpenCV"],
    link: null,
    github: "https://github.com/TomoriNow/computervision_miniproject",
  },
  {
    name: "Microsoft Stock Price Prediction (LSTM)",
    short: "LSTM Forecasting",
    type: "Machine Learning",
    description:
      "A deep learning project that uses Long Short-Term Memory (LSTM) neural networks to predict Microsoft stock prices from historical data.",
    img: "/images/projects/timeseries_project.png",
    tools: ["Python", "TensorFlow", "scikit-learn", "NumPy", "pandas", "seaborn"],
    link: null,
    github: "https://github.com/TomoriNow/timeseries_stock_prediction_project_msft",
  },
  {
    name: "PowerPlate",
    short: "PowerPlate",
    type: "AI / Full-stack",
    description:
      "Uses AI to make preventative healthcare accessible, targeting off-track demotivation: the tendency to abandon health goals after minor setbacks.",
    img: "/images/projects/power-platee.png",
    tools: ["React", "Vue", "Vite", "Tailwind CSS"],
    link: "https://power-plate.vercel.app/",
    github: "https://github.com/TomoriNow/power-plate",
  },
  {
    name: "TIME Space",
    short: "TIME Space",
    type: "Machine Learning",
    description:
      "An interactive, space-themed web platform that showcases and engages the TIME Space group of the TIME Lab research cluster at Griffith University.",
    img: "/images/projects/tech-launcher.png",
    imgFocus: "50% 62%", // portrait photo: keep the team and poster in frame
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "TensorFlow", "OpenCV"],
    link: "https://timespace-3d.vercel.app/",
    github: "https://github.com/Terrencezzz/time-lab-ml.github.io/tree/main/MachineLearningSolution",
  },
  {
    name: "ANUISA Website",
    short: "ANUISA",
    type: "Full-stack",
    description:
      "Connects Indonesian talent in the ANU community to industry and beyond, fostering employability and the exchange of ideas.",
    img: "/images/projects/anuisa.png",
    tools: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://www.anuisa.org/",
    github: "https://github.com/fiardiel/anuisa_proj",
  },
];

/* ---------- derived helpers: designs read these instead of hardcoding names or counts ---------- */

export const currentRole = roles.find((r) => r.current) ?? roles[0];
export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
export const educationLine = education.map((e) => `${e.school} (${e.short}), ${e.degree}`);

// three anchor organisations: where you are, where you were, where you studied
export function anchors() {
  const prev = roles.find((r) => !r.current && r.org !== currentRole.org);
  return [
    { label: currentRole.org, current: true },
    prev && { label: prev.org },
    { label: education[0].short },
  ].filter(Boolean);
}

const WORDS = ["No", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
export const countWord = (n) => WORDS[n] ?? String(n);
