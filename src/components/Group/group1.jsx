
import React from "react";
import "../../components/Group/group1.css";

export default function BountyProjects1(){

    return(

        
        <section class="bounty-section">

        <div class="content">
            <h1>Earn Bounties by Building Real-World Projects</h1>
            <p class="subtitle">
                Earn Crypto by working on real-world projects and writing articles—all in one place.  
                Just <strong>Apply</strong>, <strong>Build</strong>, and <strong>Earn</strong>! 🚀
            </p>
            <div class="features">
                <div class="feature">
                    <h3>🔍 Explore Bounties</h3>
                    <p>Find development, design, and content creation opportunities.</p>
                </div>
                <div class="feature">
                    <h3>🚀 Apply & Build</h3>
                    <p>Pick tasks that match your skills and submit your work.</p>
                </div>
                <div class="feature">
                    <h3>💰 Earn Crypto</h3>
                    <p>Get rewarded in cryptocurrency upon successful completion.</p>
                </div>
            </div>
            <div className="cta-button-container">
              <a href="/bounty" className="cta-button">Start earning Now</a>
             </div>
        </div>
    </section>
       
    )

}