import React, { useState, useEffect } from "react";
import "../UserProfile/UserProfile.css";
import EditProfile from "../EditProfile/EditProfile.jsx";

const UserProfile = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [activeSection1, setActiveSection1] = useState("Bounty");
  const [user, setUser] = useState({
    name: "Default Name",
    avatar: "https://via.placeholder.com/100",
    email: "default@example.com",
    username: "default-xx",
    following: 0,
    followers: 0,
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const token = JSON.parse(storedUser);
          const response = await fetch(
            `http://localhost:8090/api/user?username=${token.username}`
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          setUser({
            name: `${data.firstName || ""} ${data.lastName || ""}`.trim(),
            avatar: data.image ,
            email: data.email || "N/A",
            username: token.username,
            following: data.following || 0,
            followers: data.followers || 0,
          });
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUserDetails();
  }, []);

  const bounties = [
    { title: "Bug Fix Challenge", description: "Fix critical bugs in the project.", prize: "500 USDC" },
    { title: "AI Model Enhancement", description: "Improve the AI model accuracy.", prize: "1000 USDC" },
  ];

  const hackathons = [
    { title: "Solana Hackathon", description: "Build something on Solana blockchain.", prize: "5000 USDC" },
    { title: "Ethereum DeFi Challenge", description: "Create an innovative DeFi solution.", prize: "3000 USDC" },
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img className="profile-avatar" src={user.avatar} alt="User Avatar" />
        <div className="profile-info">
          <h2 className="username">{user.name}</h2>
          <p className="user-id">@{user.username}</p>
        </div>
      </div>

      <div className="profile-completion">
        <p>Complete your profile</p>
        <p>
          Improving your profile can allow more investors to see your excellent self, and there are 8 items left to be improved.
        </p>
        <button className="edit-profile-btn" onClick={() => setIsEditOpen(true)}>Edit Profile</button>
        {isEditOpen && <EditProfile onClose={() => setIsEditOpen(false)} />}
      </div>

      <div className="activity-section">
        <h3>Activity</h3>
        <div className="activity-chart">
           <div>
               <span> $1234 </span>
               <span>Earned</span>
           </div>
           <div>
               <span>
                  15
               </span>
               <span>Submissions</span>
           </div>
           <div>
              <span> 3</span>
               <span>Won</span>
           </div>
        </div>
      </div>

      <div className="follow-section">
        <div className="follow-section-1">
          <span>
            <span className="follow-section-count">{user.following}</span> Following
          </span>
          <span>
            <span className="follow-section-count">{user.followers}</span> Followers
          </span>
        </div>
        <div className="follow-section-2">
          <div
            className={`header-item ${activeSection1 === "Bounty" ? "active" : ""}`}
            onClick={() => setActiveSection1("Bounty")}
          >
            <span>Bounty</span>
          </div>
          <div
            className={`header-item ${activeSection1 === "Hackathon" ? "active" : ""}`}
            onClick={() => setActiveSection1("Hackathon")}
          >
            <span>Hackathon</span>
          </div>
        </div>
      </div>

      <div className="content-section">
        {activeSection1 === "Bounty" && (
          <div className="bounty-list">
          {bounties.length > 0 ? (
            bounties.map((bounty, index) => (
              <div key={index} className="bounty-card">
                <div className="prize-section">
                  <span className="prize-emoji">
                    🎉
                  </span>
                  <h2 className="prize-text">{bounty.prize} </h2>
                  <p className="prize-badge">
                    FIRST PRIZE
                  </p>
                </div>
                <div className="bottom-section">
                  <p>{bounty.title}</p>
                  <a href="#" >View Listing →</a>
                </div>
              </div>
            ))
          ) : (
            <p className="no-data">No bounties available</p>
          )}
        </div>
        )}

        {activeSection1 === "Hackathon" && (
         <div className="bounty-list">
         {hackathons.length > 0 ? (
           hackathons.map((bounty, index) => (
             <div key={index} className="bounty-card">
               <div className="hackathon-prize-section">
                 <span className="prize-emoji">
                   🎉
                 </span>
                 <h2 className="prize-text">{bounty.prize} </h2>
                 <p className="prize-badge">
                   FIRST PRIZE
                 </p>
               </div>
               <div className="bottom-section">
                 <p>{bounty.title}</p>
                 <a href="#" >View Listing →</a>
               </div>
             </div>
           ))
         ) : (
           <p className="no-data">No Hackathons available</p>
         )}
       </div>
        )}
      </div>
    </div>
  );
};
export default UserProfile;
