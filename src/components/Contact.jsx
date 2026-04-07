import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.toString().trim() ?? '';
    const email = formData.get('email')?.toString().trim() ?? '';
    const message = formData.get('message')?.toString().trim() ?? '';
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'a visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:266ezeckielbongala@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <ScrollReveal>
              <h2 className="section-title">Let's Work Together</h2>
              <p className="section-subtitle">
                Have a project in mind or want to collaborate? I'd love to hear from you. Let's
                create something amazing together.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="contact-details">
                <a href="mailto:266ezeckielbongala@gmail.com" className="contact-item glass glass-hover">
                  <div className="contact-icon">
                    <FiMail />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">266ezeckielbongala@gmail.com</span>
                  </div>
                </a>

                <div className="contact-item glass glass-hover">
                  <div className="contact-icon">
                    <FiMapPin />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">Philippines</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="contact-socials">
                <span className="social-label">Follow me:</span>
                <div className="social-links">
                  <a
                    href="https://github.com/Zeckiiee"
                    className="social-btn"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ezeckiel-bongala-88936a382/"
                    className="social-btn"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiLinkedin />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} x={40}>
            <form className="contact-form glass" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="form-input"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Send Message
                <FiSend />
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
