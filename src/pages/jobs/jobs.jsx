import React, { useState } from "react";
import JobCard from "../../components/jobCards/jobcards";
import JobDetails from "../../components/jobdetails/jobdetails";

import "../jobs/jobs.css";

const jobs = [
  {
    title: "Fresher Java Developer",
    company: "Associative",
    location: "Lohegaon, Pune, Maharashtra",
    salary: "₹5,000 - ₹15,000 a month",
    description: "Associative is a software company specializing in Java development...",
    responsibilities: [
      "Develop and maintain Java applications",
      "Write clean and efficient code",
      "Collaborate with the team",
      "Participate in code reviews"
    ],
    qualifications: [
      "Any Graduate",
      "Basic understanding of Java",
      "Good communication skills"
    ],
    skills: ["Java", "Spring Boot", "React.js", "MySQL", "AWS"],
    languages: ["Hindi", "English", "Marathi"],
    address: "Shop No. 12, Khandve Complex, Lohegaon, Pune",
    officeTiming: "10:00 AM - 8:00 PM",
    contact: "+91 9028850524",
    website: "https://associative.in",
    careerPage: "https://associative.in/career"
  },
  {
    title: "React Developer (Junior)",
    company: "TechSpark",
    location: "Bangalore, Karnataka",
    salary: "₹20,000 - ₹40,000 a month",
    description: "TechSpark is looking for a junior React developer to work on modern web applications.",
    responsibilities: [
      "Develop user-facing web applications using React.js",
      "Write reusable components with clean code",
      "Work closely with backend developers to integrate APIs",
      "Debug and optimize web performance"
    ],
    qualifications: [
      "Bachelor’s in Computer Science or related field",
      "Experience with React.js (6 months+)",
      "Familiarity with Git and CI/CD"
    ],
    skills: ["React.js", "JavaScript", "Redux", "CSS", "TypeScript"],
    languages: ["English", "Kannada"],
    address: "TechSpark Tower, Whitefield, Bangalore",
    officeTiming: "9:30 AM - 6:30 PM",
    contact: "+91 9876543210",
    website: "https://techspark.com",
    careerPage: "https://techspark.com/careers"
  },
  {
    title: "python Developer (Junior)",
    company: "teraSpark",
    location: "mumbai, Karnataka",
    salary: "₹20,000 - ₹40,000 a month",
    description: "TechSpark is looking for a junior React developer to work on modern web applications.",
    responsibilities: [
      "Develop user-facing web applications using React.js",
      "Write reusable components with clean code",
      "Work closely with backend developers to integrate APIs",
      "Debug and optimize web performance"
    ],
    qualifications: [
      "Bachelor’s in Computer Science or related field",
      "Experience with React.js (6 months+)",
      "Familiarity with Git and CI/CD"
    ],
    skills: ["React.js", "JavaScript", "Redux", "CSS", "TypeScript"],
    languages: ["English", "Kannada"],
    address: "TechSpark Tower, Whitefield, Bangalore",
    officeTiming: "9:30 AM - 6:30 PM",
    contact: "+91 9876543210",
    website: "https://techspark.com",
    careerPage: "https://techspark.com/careers"
  },

];

export default function JobDashboard() {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="job-dashboard">
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search jobs..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Job List and Details */}
      <div className="job-container">
        {/* Job List */}
        <div className="job-list">
          {filteredJobs.map(job => (
            <JobCard
              key={job.id}
              job={job}
              isSelected={selectedJob.id === job.id}
              onSelect={setSelectedJob}
            />
          ))}
        </div>

        {/* Job Details */}
        <div className="job-detail-section">
          <JobDetails job={selectedJob} />
        </div>
      </div>
    </div>
  );
}
