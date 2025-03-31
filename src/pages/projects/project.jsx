import React from "react";
import "../projects/project.css";
import bannerimage from "../../assets/banner.webp";
import { useNavigate } from "react-router-dom";
import projectData from "../projects/projectdata"




const ProjectPage = () => {
  const navigate = useNavigate();
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-section12">
        <div className="hero-image">
          <img src={bannerimage} alt="DoraHacks illustration" />
        </div>
        <div className="hero-content1">
          <h1>The home to earn fame</h1>
          <p>
            Create a project on Fame to share your ideas with more hackers
            and investors. Let’s change the world with code.
          </p>
        </div>
        <div className="hero-stats">
          <div className="stat-box">
            <h3>BUIDLs</h3>
            <p className="orange-text">19,524</p>
          </div>
          <div className="stat-box">
            <h3>Funded</h3>
            <p className="green-text">$ 67.5M</p>
          </div>
          <div className="stat-box">
            <h3>Active Builders</h3>
            <p className="orange-text">209,795</p>
          </div>
        </div>
      </div>

      {/* Project Cards Section */}
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index} 
          onClick={() => navigate(`/project/${project.id}`)}>
            <div className="project-header">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-meta">
                <h3 className="project-header-title">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
            <div className="tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
