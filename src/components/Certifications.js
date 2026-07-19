import { Link } from "react-router-dom";
import { certifications } from "../data/portfolioData";

function Certifications() {
  return (
    <div className="section-page">
      <div className="page-header">
        <h1 className="page-title">Certifications</h1>
        <p className="page-subtitle">Professional certifications and credentials</p>
      </div>
      <div className="item-list">
        {certifications.map((cert) => (
          <div key={cert.id} className="item">
            <div className="item-header">
              <h3 className="item-title">{cert.name}</h3>
              <div className="item-meta">
                <span className="item-issuer">{cert.issuer}</span>
                <span className="item-date">{cert.date}</span>
                {cert.credentialId !== "N/A" && (
                  <span className="item-credential-id">Credential ID: {cert.credentialId}</span>
                )}
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

export default Certifications;
