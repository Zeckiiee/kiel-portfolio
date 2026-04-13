import { motion } from "framer-motion";
import { FiExternalLink, FiFolder, FiGithub } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Enchantea",
    description:
      "Premium tea brand experience with route-based pages, searchable menu browsing, category filters, and hover-rich product cards designed for desktop and mobile.",
    note:
      "Built with React, Tailwind CSS, and polished motion across the home, products, and brand story pages.",
    tech: ["React Vite", "Tailwind CSS"],
    accent: "#8b5cf6",
    accentRgb: "139, 92, 246",
    constellation: {
      nodes: [
        { x: 12, y: 34, size: 9 },
        { x: 28, y: 22, size: 6 },
        { x: 43, y: 50, size: 7 },
        { x: 68, y: 18, size: 8 },
        { x: 82, y: 62, size: 6 },
      ],
      links: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
      ],
    },
    links: {
      demo: "https://enchantea-milktea-page.vercel.app/",
      github: "https://github.com/Zeckiiee/enchantea",
    },
  },
  {
    title: "Coza Store",
    description:
      "Fashion storefront with category filtering, product search, price sorting, load-more browsing, and a cart drawer with quantity updates and subtotal calculation.",
    note:
      "Implemented filtering, cart logic, local-storage persistence, and responsive product browsing in React.",
    tech: ["React Vite", "Tailwind CSS"],
    accent: "#22c55e",
    accentRgb: "34, 197, 94",
    constellation: {
      nodes: [
        { x: 16, y: 60, size: 8 },
        { x: 31, y: 28, size: 6 },
        { x: 52, y: 42, size: 7 },
        { x: 72, y: 24, size: 8 },
        { x: 88, y: 54, size: 6 },
      ],
      links: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
      ],
    },
    links: {
      demo: "https://coza-store-sand.vercel.app/",
      github: "https://github.com/Zeckiiee/coza-strore",
    },
  },
  {
    title: "Resume Builder",
    description:
      "Interactive resume builder with editable personal details, education, and experience sections, plus save states and a live preview while you fill out the layout.",
    note:
      "Focused on reusable form sections, clean review states, and a smoother resume-editing flow.",
    tech: ["React Vite", "CSS"],
    accent: "#d67952",
    accentRgb: "214, 121, 82",
    constellation: {
      nodes: [
        { x: 14, y: 26, size: 7 },
        { x: 30, y: 48, size: 6 },
        { x: 48, y: 22, size: 8 },
        { x: 67, y: 56, size: 7 },
        { x: 86, y: 34, size: 6 },
      ],
      links: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
      ],
    },
    links: {
      demo: "https://resume-builder-rho-five-81.vercel.app/",
      github: "https://github.com/Zeckiiee/Odin-Project-Resume-Builder",
    },
  },
  {
    title: "Pokemon Memory Card Game",
    description:
      "Memory card game with repeat-avoidance gameplay, score tracking, randomized card order, and quick replay loops built around Pokemon-themed cards.",
    note:
      "Built with React state updates and lightweight game logic for a fast, replayable UI.",
    tech: ["React Vite", "CSS"],
    accent: "#f59e0b",
    accentRgb: "245, 158, 11",
    constellation: {
      nodes: [
        { x: 20, y: 40, size: 7 },
        { x: 35, y: 25, size: 6 },
        { x: 55, y: 45, size: 8 },
        { x: 75, y: 20, size: 7 },
        { x: 90, y: 60, size: 6 },
      ],
      links: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
      ],
    },
    links: {
      demo: "https://memory-card-five-nu.vercel.app/",
      github: "https://github.com/Zeckiiee/pokemon-memory-card-game",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const ProjectConstellation = ({ project }) => (
  <div
    className="project-visual"
    style={{
      "--project-accent": project.accent,
      "--project-accent-rgb": project.accentRgb,
    }}
    aria-hidden="true"
  >
    <svg
      className="project-constellation-lines"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {project.constellation.links.map(([startIndex, endIndex]) => {
        const start = project.constellation.nodes[startIndex];
        const end = project.constellation.nodes[endIndex];

        return (
          <line
            key={`${project.title}-${startIndex}-${endIndex}`}
            x1={start.x}
            y1={start.y}
            x2={end.x}
            y2={end.y}
          />
        );
      })}
    </svg>

    {project.constellation.nodes.map((node, index) => (
      <span
        key={`${project.title}-node-${index}`}
        className="project-constellation-node"
        style={{
          left: `${node.x}%`,
          top: `${node.y}%`,
          width: `${node.size}px`,
          height: `${node.size}px`,
          animationDelay: `${index * 0.35}s`,
        }}
      />
    ))}

    <div className="project-preview-card">
      <span className="project-preview-title">{project.title}</span>
      <div className="project-preview-tech">
        {project.tech.map((tech) => (
          <span
            key={`${project.title}-${tech}`}
            className="project-preview-tag"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work and personal projects
          </p>
        </ScrollReveal>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <article className="project-card">
                <div className="project-image">
                  <ProjectConstellation project={project} />
                  <div className="project-overlay">
                    <motion.a
                      href={project.links.demo}
                      className="project-link"
                      aria-label={`Open live demo for ${project.title}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                    >
                      <FiExternalLink />
                    </motion.a>
                    <motion.a
                      href={project.links.github}
                      className="project-link"
                      aria-label={`Open GitHub repository for ${project.title}`}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                    >
                      <FiGithub />
                    </motion.a>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <FiFolder className="project-icon" />
                    <h3 className="project-title">{project.title}</h3>
                  </div>

                  <p className="project-description">{project.description}</p>
                  {project.note ? (
                    <p className="project-note">{project.note}</p>
                  ) : null}

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
