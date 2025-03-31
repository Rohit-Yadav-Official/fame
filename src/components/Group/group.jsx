import React from "react";
import "../../components/Group/group.css"
import heroimage1 from "../../assets/group12.png"

export default function BountyProjects() {
  return (
    <section className="bounty-container1">

      <div className="bounty-text">
        <h2>Boost Your Projects for Better ATS Visibility</h2>
        <p>
          Build Bounty Projects on our platform to showcase your skills, boost
          your profile visibility to companies when applying for jobs, and stand
          out among your peers.
        </p>
      </div>


      <div className="bounty-image-container">
        <div className="bounty-image-bg"></div>
        <img src={heroimage1} alt="Bounty Projects Preview" className="bounty-image" />
      </div>
    </section>
  );
}