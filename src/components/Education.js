import { Link } from "react-router-dom";
import { education } from "../data/portfolioData";

function Education() {
  return (
    <div className="section-page">
      <div className="page-header">
        <h1 className="page-title">Education</h1>
        <p className="page-subtitle">Academic background and qualifications</p>
      </div>
      <div className="item-list">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="item"
            style={{
              animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 + index * 0.1}s forwards`,
              opacity: 0,
            }}
          >
            <div className="item-header">
              <h3 className="item-title">{edu.degree}</h3>
              <div className="item-meta">
                <span className="item-institution">{edu.institution}</span>
                {edu.university && <span className="item-board">{edu.university}</span>}
                {edu.board && <span className="item-board">{edu.board}</span>}
                <span className="item-year">{edu.year}</span>
                {edu.cgpa && <span className="item-cgpa">CGPA: {edu.cgpa}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link className="back-link" to="/">
        ← Back to Home
      </Link>
    </div>
  );
}

export default Education;
