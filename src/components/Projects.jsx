import { motion } from 'framer-motion';
import { FiExternalLink, FiFolder, FiGithub } from 'react-icons/fi';
import ScrollReveal from './ScrollReveal';

const projects = [
  {
    title: 'Enchantea',
    description:
      'A modern e-commerce platform for a premium tea brand. Features smooth animations, responsive design, and intuitive user experience.',
    tech: ['React Vite', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80',
    links: { demo: '#', github: '#' },
  },
  {
    title: 'Coza Store',
    description:
      'Fashion e-commerce website with modern UI, product filtering, cart functionality, and seamless checkout experience.',
    tech: ['React Vite', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    links: { demo: 'https://kiel-portfolio-phi.vercel.app/', github: 'https://coza-store-sand.vercel.app/' },
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

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A selection of my recent work and personal projects</p>
        </ScrollReveal>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <article className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                  <div className="project-overlay">
                    <motion.a
                      href={project.links.demo}
                      className="project-link"
                      aria-label={`Open live demo for ${project.title}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink />
                    </motion.a>
                    <motion.a
                      href={project.links.github}
                      className="project-link"
                      aria-label={`Open GitHub repository for ${project.title}`}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
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
