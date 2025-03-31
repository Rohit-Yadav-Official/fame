import React from "react";
import "../../pages/jobs/jobs.css";

export default function JobCard({ job, isSelected, onSelect }) {
  return (
    <div
      className={`job-card ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(job)}>
      
      <h3 className="job-title">{job.title}</h3>
      <p className="job-company">{job.company} - {job.location}</p>
      <p className="job-salary">{job.salary}</p>
    </div>
  );
}
