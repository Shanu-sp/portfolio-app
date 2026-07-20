import { Link } from "react-router-dom";
import { projects } from "../data/portfolioData";

function ProjectCard({ title, description, github }) {
  return (
    <div className="project-item">
      <h3>{title}</h3>
      <p>{description}</p>
      {github && (
        <a
          className="item-link"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code →
        </a>
      )}
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-page">
      <div className="page-header">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">Selected work and experiments</p>
      </div>
      <div className="item-list">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-item"
            style={{
              animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 + index * 0.1}s forwards`,
              opacity: 0,
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              github={project.github}
            />
          </div>
        ))}
      </div>
      <Link className="back-link" to="/">
        ← Back to Home
      </Link>
    </div>
  );
}

export default Projects;
