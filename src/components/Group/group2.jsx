import React from "react";
import "../../components/Group/group2.css"
import hero3 from "../../assets/hero3.png"
import logo1 from "../../assets/adobelogo.png"
import logo2 from "../../assets/amazonlogo.png"
import logo3 from "../../assets/applelogo.png"
import logo4 from "../../assets/google.png"
import logo5 from "../../assets/jplogo.png"
import logo6 from "../../assets/metalogo.jpg"
import logo7 from "../../assets/nokialogo.png"
import logo8 from "../../assets/samsunglogo.png"
import logo9 from "../../assets/tcslogo.png"
import logo10 from "../../assets/Realiance.jpg"
import logo11 from "../../assets/accenture.png"
import logo12 from "../../assets/intelLogoo.jpg"
import logo13 from "../../assets/hp.png"

export default function BountyProjects3() {
  return (
    <section className="bounty-container2">
      <div className="bounty-containerow1">  
      {/* Main Content */}
      <div className="bounty-image-container">
        <div className="bounty-image-bg"></div>
        <img src={hero3} alt="Bounty Projects Preview" className="bounty-image" />
      </div>

      <div className="bounty-text">
        <h2>Land Your Dream Job with Just One Click!</h2>
        <p>
        Apply for jobs and internships tailored to your skills and priorities. Explore opportunities from 1,000+ top companies on Fame. Your dream job is just one click away!
        </p>
      </div>
     </div> 


     
      <div className="logo-slider-container">
        <h3>Trusted by Top Companies</h3>
        <div className="logo-slider">
          <div className="logo-track">
            {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,logo11,logo12,logo13].map((logo, index) => (
              <img key={index} src={logo} alt={`Company ${index + 1}`} className="logo" />
            ))}
          
            {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,logo11,logo12,logo13].map((logo, index) => (
              <img key={`dup-${index}`} src={logo} alt={`Company ${index + 1}`} className="logo" />
            ))}
          </div>
        </div>
      </div> 

    </section>
  );
}
