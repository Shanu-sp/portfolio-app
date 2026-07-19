import { Link } from "react-router-dom";
import { experience } from "../data/portfolioData";

function Experience() {
  return (
    <div className="section-page">
      <div className="page-header">
        <h1 className="page-title">Experience</h1>
        <p className="page-subtitle">Professional journey and roles</p>
      </div>
      <div className="item-list">
        {experience.map((exp) => (
          <div key={exp.id} className="item">
            <div className="item-header">
              <h3 className="item-title">{exp.title}</h3>
              <div className="item-meta">
                <span className="item-company">{exp.company}</span>
                <span className="item-duration">{exp.duration}</span>
              </div>
            </div>
            <p className="item-description">{exp.description}</p>
          </div>
        ))}
      </div>
      <Link className="back-link" to="/">
        ← Back to Home
      </Link>
    </div>
  );
}

export default Experience;
