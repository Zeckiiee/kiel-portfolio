import {
  SiFigma,
  SiGit,
  SiGithub,
  SiGooglechrome,
  SiNetlify,
  SiNotion,
  SiVercel,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import ScrollReveal from './ScrollReveal';

const tools = [
  { name: 'VS Code', icon: VscVscode, description: 'Primary Code Editor' },
  { name: 'Figma', icon: SiFigma, description: 'Design & Prototyping' },
  { name: 'Git', icon: SiGit, description: 'Version Control' },
  { name: 'GitHub', icon: SiGithub, description: 'Code Repository' },
  { name: 'Vercel', icon: SiVercel, description: 'Deployment Platform' },
  { name: 'Netlify', icon: SiNetlify, description: 'Web Hosting' },
  { name: 'Chrome DevTools', icon: SiGooglechrome, description: 'Debugging & Testing' },
  { name: 'Notion', icon: SiNotion, description: 'Project Management' },
];

const Tools = () => {
  return (
    <section className="tools" id="tools">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Tools & Workflow</h2>
          <p className="section-subtitle">The toolkit I use to build and ship quality products</p>
        </ScrollReveal>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <ScrollReveal key={tool.name} delay={index * 0.05}>
              <div className="tool-card glass glass-hover">
                <div className="tool-icon-wrapper">
                  <tool.icon className="tool-icon" />
                </div>
                <div className="tool-info">
                  <h3 className="tool-name">{tool.name}</h3>
                  <p className="tool-description">{tool.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
