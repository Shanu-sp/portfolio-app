import { Link } from "react-router-dom";
import { contact } from "../data/portfolioData";

function Contact() {
  return (
    <div className="section-page">
      <div className="page-header">
        <h1 className="page-title">Contact</h1>
        <p className="page-subtitle">Let's build something together</p>
      </div>
      <div className="contact-layout">
        <form
          action="https://formspree.io/f/xzdnrnel"
          method="POST"
          className="contact-form"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
        <div className="contact-info-section">
          <h3>Reach me directly</h3>
          <a className="contact-direct-link" href={`mailto:${contact.email}`}>
            <span className="contact-direct-icon">📧</span>
            <div className="contact-direct-text">
              <span className="contact-direct-label">Email</span>
              <span className="contact-direct-value">{contact.email}</span>
            </div>
          </a>
          <a
            className="contact-direct-link"
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-direct-icon">💻</span>
            <div className="contact-direct-text">
              <span className="contact-direct-label">GitHub</span>
              <span className="contact-direct-value">github.com/Shanu-sp</span>
            </div>
          </a>
          <a
            className="contact-direct-link"
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-direct-icon">🔗</span>
            <div className="contact-direct-text">
              <span className="contact-direct-label">LinkedIn</span>
              <span className="contact-direct-value">linkedin.com/in/shanu-p-636b57303</span>
            </div>
          </a>
        </div>
      </div>
      <Link className="back-link" to="/">
        ← Back to Home
      </Link>
    </div>
  );
}

export default Contact;
