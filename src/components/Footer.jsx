import { FiArrowUp, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-name">Ezeckiel Bongala</h3>
            <p className="footer-tagline">Front-End Developer</p>
          </div>

          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <FiArrowUp />
          </button>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Ezeckiel Bongala. All rights reserved.
          </p>
          <p className="footer-credit">
            Crafted with <FiHeart className="heart-icon" /> using React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
