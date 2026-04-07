import { motion } from 'framer-motion';
import {
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTestinglibrary,
  SiVite,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import ScrollReveal from './ScrollReveal';

const skills = [
  { name: 'React.js', icon: SiReact, color: '#61DAFB', level: 'Beginner' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 'Beginner' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 'Beginner' },
  { name: 'CSS3', icon: SiCss, color: '#1572B6', level: 'Beginner' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 'Beginner' },
  { name: 'Framer Motion', icon: SiReact, color: '#FF0055', level: 'Beginner' },
  { name: 'Git', icon: SiGit, color: '#F05032', level: 'Beginner' },
  { name: 'GitHub', icon: SiGithub, color: '#ffffff', level: 'Beginner' },
  { name: 'Vite', icon: SiVite, color: '#646CFF', level: 'Beginner' },
  { name: 'QA Testing', icon: SiTestinglibrary, color: '#E33332', level: 'Beginner' },
  { name: 'VS Code', icon: VscVscode, color: '#007ACC', level: 'Beginner' },
  { name: 'UI Design', icon: SiFigma, color: '#F24E1E', level: 'Beginner' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const additionalSkills = [
  'Responsive Design',
  'UI Enhancement',
  'Interactive Animation',
  'Clean Code',
  'Performance Optimization',
  'CMS Integration',
  'Email Development',
  'Cross-browser Testing',
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I use to bring ideas to life</p>
        </ScrollReveal>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} className="skill-card glass glass-hover" variants={itemVariants}>
              <div className="skill-icon" style={{ color: skill.color }}>
                <skill.icon />
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-level">{skill.level}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal delay={0.4}>
          <div className="additional-skills">
            <h3 className="additional-title">Additional Expertise</h3>
            <div className="tags-container">
              {additionalSkills.map((tag) => (
                <span key={tag} className="tag tag-hover">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;
