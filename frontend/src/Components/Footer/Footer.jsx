import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="foot-left">
        <p>Get in touch</p>
        <a href="mailto:alexcarl.dev@gmail.com" className="footer-email">
          alexcarl.dev@gmail
        </a>
      </div>
      <div className='footer-right'>
        <a
          href="https://www.linkedin.com/in/alexcarl/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/AlexJc23"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          gitHub
        </a>
        <a
          href="https://www.instagram.com/alx_graphix/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          @alx_graphix
        </a>
      </div>
    </footer>
  );
};

export default Footer;
