import { NavLink } from "react-router-dom";
import { personalInfo } from "../data/portfolioData";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        {personalInfo.name}
      </NavLink>
      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Projects
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Experience
        </NavLink>
        <NavLink
          to="/education"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Education
        </NavLink>
        <NavLink
          to="/certifications"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Certifications
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
