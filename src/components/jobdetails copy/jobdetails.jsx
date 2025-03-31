import React from "react";
import "../../pages/jobs/jobs.css";
import img from '../../assets/tcslogo.png';
import link from '../../assets/link icon.png';
const JobDetails = ({ job }) => {
  if (!job) return <div className="job-details">Select a job to view details.</div>;

  return (
    <div className="job-details">
      {/* Job Header */}
      <div className="header">
        <img className="company-img" src={""} alt="Company Logo" />
        <div className="middle-column">
          <h2 className="job-title">{job.title}</h2>

          <div className="middle-clm2">
          <p className="company">{job.company}</p>
          <img className="link-img" src={""} alt="link" />
          </div>
         
        </div>
        <button className="apply-btn">Apply Now</button>
      </div>

      <div className="content">
        {/* Job Description */}
        <div className="section">
          <h3>Job Description</h3>
          <p>{job.description}</p>
        </div>

        {/* Responsibilities */}
        {job.responsibilities && (
          <div className="section">
            <h3>Responsibilities</h3>
            <ul>
              {job.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Qualifications */}
        {job.qualifications && (
          <div className="section">
            <h3>Qualifications</h3>
            <ul>
              {job.qualifications.map((qual, index) => (
                <li key={index}>{qual}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Skills */}
        {job.skills && (
          <div className="section">
            <h3>Skills Required</h3>
            <p>{job.skills.join(", ")}</p>
          </div>
        )}

        {/* Languages */}
        {job.languages && (
          <div className="section">
            <h3>Languages Required</h3>
            <p>{job.languages.join(", ")}</p>
          </div>
        )}

        {/* Office Details */}
        <div className="section">
          <h3>Office Details</h3>
          <p><strong>Address:</strong> {job.address}</p>
          <p><strong>Office Timing:</strong> {job.officeTiming}</p>
        </div>

        {/* Contact Details */}
        <div className="section">
          <h3>Contact</h3>
          <p><strong>WhatsApp:</strong> <a href={`tel:${job.contact}`}>{job.contact}</a></p>
          <p><strong>Website:</strong> <a href={job.website} target="_blank" rel="noopener noreferrer">{job.website}</a></p>
          <p><strong>Career Page:</strong> <a href={job.careerPage} target="_blank" rel="noopener noreferrer">{job.careerPage}</a></p>
        </div>
      </div>

      {/* Apply Button */}
     
    </div>
  );
};

export default JobDetails;
