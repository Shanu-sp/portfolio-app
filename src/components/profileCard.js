import { Link } from "react-router-dom";
import { personalInfo, skills, contact } from "../data/portfolioData";

function ProfileCard() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-image-wrapper">
          {personalInfo.profilePhoto && (
            <img
              src={personalInfo.profilePhoto}
              alt={`${personalInfo.name} profile`}
              className="hero-image"
            />
          )}
          <div className="hero-image-ring"></div>
        </div>

        <div className="hero-text">
          <h1 className="hero-name">{personalInfo.name}</h1>
          <p className="hero-role">{personalInfo.role}</p>
          <p className="hero-bio">{personalInfo.bio}</p>
        </div>
      </div>

      <div className="hero-cta">
        <Link to="/projects" className="btn-primary">
          View Projects →
        </Link>
        {contact.resume && (
          <a
            className="btn-secondary"
            href={contact.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        )}
      </div>

      <div className="hero-skills">
        <h3 className="skills-title">Tech Stack</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <span key={index} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-contact">
        <a className="contact-card" href={`mailto:${contact.email}`}>
          <span className="contact-icon">📧</span>
          <div className="contact-info">
            <span className="contact-label">Email</span>
            <span className="contact-value">{contact.email}</span>
          </div>
        </a>
        <a
          className="contact-card"
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-icon">💻</span>
          <div className="contact-info">
            <span className="contact-label">GitHub</span>
            <span className="contact-value">github.com/Shanu-sp</span>
          </div>
        </a>
        <a
          className="contact-card"
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-icon">🔗</span>
          <div className="contact-info">
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">linkedin.com/in/shanu-p-636b57303</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
