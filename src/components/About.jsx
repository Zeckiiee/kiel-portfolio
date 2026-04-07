import ScrollReveal from './ScrollReveal';

const stats = [
  { number: '1+', label: 'Years Experience' },
  { number: '2+', label: 'Projects Building' },
  { number: '6+', label: 'Projects Congtributed' },
  { number: '3+', label: 'Companies Worked' },
  { number: '80%', label: 'Commitment' },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <ScrollReveal>
              <h2 className="section-title">About Me</h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="about-text">
                I'm a passionate Front-End Developer with a keen eye for design and a love for
                creating seamless user experiences. My journey in web development started with a
                curiosity for how things work on the web, which evolved into a professional career
                building modern, responsive applications.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="about-text">
                Currently, I specialize in the React.js ecosystem, bringing designs to life with
                smooth animations using Framer Motion, and ensuring every pixel is in its place. I
                believe that great software is not just about functionality. It's about the
                experience, the details, and the story it tells.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="about-text">
                When I'm not coding, you'll find me exploring new design trends, contributing to
                open-source projects, or optimizing performance for that extra millisecond of
                loading speed.
              </p>
            </ScrollReveal>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={0.08 * (index + 1)}>
                <div className="stat-card glass glass-hover">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
