import React from "react";
import { useParams } from "react-router-dom";
import "../projectDetails/projectDetails.css";
import projectData from "../projectdata" 

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectData.find((p) => p.id === parseInt(projectId));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-details-container">
      {/* Left Section */}
      <div className="left-section">
        <img src={project.image} alt={project.title} className="project-banner" />
        <h1>{project.title}</h1>
        <p className="project-description">{project.description}</p>

        <div className="projects-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="projects-tag">{tag}</span>
          ))}
        </div>

        <div className="action-buttons">
          <button className="bookmark-btn">Bookmark</button>
          <button className="upvote-btn">↑ Upvote</button>
          <button className="collection-btn">+ Collection</button>
        </div>
 
        <div className="members-section">
          <h3>Members</h3>
          <div className="member-list">
            {project.members.map((member, i) => (
              <div key={i} className="member">
                <img src={member.image} alt={member.name} />
                <p>{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h2>🚀 Introduction</h2>
        <p>{project.introduction}</p>

        <h2>🎯 The Problem We Solve</h2>
        <p>{project.problemStatement}</p>

        <h2>🕹 Core Features</h2>
        <ul className="right-section-ul" >
          {project.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>

        <h2>📍 Roadmap</h2>
        <p>{project.roadmap}</p>

        <div className="github-link">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
