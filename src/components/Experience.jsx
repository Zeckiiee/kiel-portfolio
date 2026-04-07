import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    company: "C3 Interactive",
    role: "Front-End Developer",
    period: "2025 - 2026",
    location: "Philippines",
    description:
      "Developed modern and responsive web applications using JavaScript, focusing on clean UI and seamless user experience. Implemented smooth animations and transitions using Framer Motion.",
    highlights: ["JavaScript", "HTML", "CSS", "Framer Motion"],
  },
  {
    company: "Armed Forces of the Philippines",
    role: "Front-End Developer & QA",
    period: "2024 - 2025",
    location: "Philippines",
    description:
      "Contributed to frontend development and collaborated with the team to build web applications. Performed manual testing, reported bugs, and ensured the quality and reliability of system features.",
    highlights: ["React.js", "Tailwind CSS", "Laravel PHP", "QA Testing"],
  },
  {
    company: "Nexbridge Technologies",
    role: "Intern - Front-End Developer",
    period: "2024 - 2024",
    location: "Philippines",
    description:
      "Developed responsive user interfaces and worked closely with designers to deliver pixel-perfect layouts. Gained hands-on experience with version control and collaborative development workflows.",
    highlights: ["React.js", "Tailwind CSS", "Git", "GitHub"],
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey and the companies I've worked with
          </p>
        </ScrollReveal>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <ScrollReveal
              key={`${exp.company}-${exp.role}`}
              className="timeline-item"
              delay={Math.min(index * 0.08, 0.32)}
              x={index % 2 === 0 ? -32 : 32}
            >
              <div className="timeline-marker" />
              <div className="timeline-content card card-hover">
                <div className="experience-header">
                  <div className="experience-icon">
                    <FiBriefcase />
                  </div>
                  <div className="experience-meta">
                    <h3 className="experience-company">{exp.company}</h3>
                    <span className="experience-role">{exp.role}</span>
                  </div>
                </div>

                <div className="experience-details">
                  <span className="detail-item">
                    <FiCalendar />
                    {exp.period}
                  </span>
                  <span className="detail-item">
                    <FiMapPin />
                    {exp.location}
                  </span>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="experience-highlights">
                  {exp.highlights.map((highlight) => (
                    <span key={highlight} className="tag">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
