import FadeIn from "./FadeIn.jsx";

const projects = [
  {
    title: "Sign Language Detector",
    tags: ["YOLOv5", "Python", "OpenCV"],
    description:
      "A Computer Vision project leveraging YOLOv5 to detect sign language gestures in real-time via webcam inputs.",
    link: "https://github.com/abhishekpoyyeri/sign-language",
    linkLabel: "View Code",
  },
  {
    title: "EC2 Website Deployment",
    tags: ["AWS", "EC2", "Nginx", "Linux"],
    description:
      "Provisioned and configured an AWS EC2 instance to host a production website. Tasks included instance setup, Nginx configuration, securing with security groups, and deploying site assets.",
  },
  {
    title: "Road Sign Detector",
    tags: ["ML", "Python", "Deep Learning"],
    description:
      "A machine learning project for detecting and classifying road signs using image recognition techniques.",
    link: "https://github.com/abhishekpoyyeri/road-sign-detector",
    linkLabel: "View Code",
  },
  {
    title: "Studentz Bangalore - Student Community Platform",
    tags: ["React", "Vite", "Node.js", "MongoDB"],
    description:
      "A student-focused community platform for reporting and tracking academic, campus, and wellbeing-related issues.",
    link: "https://studentzbangalor.vercel.app/",
    linkLabel: "View Live",
  },
  {
    title: "Medical Imaging and Lab Report Explainer AI",
    tags: ["FastAPI", "GPT4All", "JavaScript"],
    description:
      "A secure offline AI app that analyzes medical reports and generates patient-friendly explanations with local inference.",
  },
  {
    title: "Nexora - Smart Personal Finance & Expense Tracker",
    tags: ["Next.js", "Firebase", "Scikit-learn"],
    description:
      "An AI-powered finance tracker with OCR receipt parsing, expense analytics, and predictive insights.",
  },
  {
    title: "AI Learning Platform for Kids",
    tags: ["React", "FastAPI", "GPT4All"],
    description:
      "An interactive learning platform featuring voice tutoring, handwriting OCR, quizzes, and parent analytics.",
  },
  {
    title: "CineSnap - Social Platform for Movie Enthusiasts",
    tags: ["Flutter", "Firebase", "Supabase"],
    description:
      "A social app for cinephiles to share cinematic moments with a glassmorphic UI and media-first UX.",
  },
  {
    title: "Beginner Operating System Project",
    tags: ["C", "Assembly", "Systems"],
    description:
      "A bootable OS exploration focusing on bootloaders, memory management, and low-level programming concepts.",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-header" style={{ padding: 0, marginBottom: "40px" }}>
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <FadeIn className="proj" key={project.title}>
            <div className="proj-number">{String(index + 1).padStart(2, "0")}</div>
            <h3>{project.title}</h3>
            <div className="proj-tags">
              {project.tags.map((tag) => (
                <span className="proj-tag" key={`${project.title}-${tag}`}>{tag}</span>
              ))}
            </div>
            <p>{project.description}</p>
            {project.link ? (
              <a
                href={project.link}
                className="proj-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.linkLabel} <span className="material-icons-outlined">arrow_forward</span>
              </a>
            ) : null}
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
