import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
        <div className="hero-grid" />
        <div className="hero-accent-orb" />
      </div>

      <div className="hero-content-wrapper">
        <div className="container">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="hero-badge">
              <span className="badge-dot" />
              Available for opportunities
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-title">
              <span className="hero-greeting">Hello, I'm</span>
              <span className="hero-name">Ezeckiel Bongala</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="hero-role">
              <span className="role-line" />
              <span className="role-text">Front-End Developer</span>
              <span className="role-line" />
            </motion.div>

            <motion.p variants={itemVariants} className="hero-description">
              Crafting modern, responsive web experiences with{' '}
              <span className="highlight">React.js</span>,
              <span className="highlight"> Framer Motion</span>, and attention to detail.
              Specializing in smooth animations, clean UI design, and pixel-perfect
              implementations that bring ideas to life.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                View Projects
                <FiArrowDown />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-socials">
              <a
                href="https://github.com/Zeckiiee"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ezeckiel-bongala-88936a382/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="mailto:266ezeckielbongala@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
