import React, { useState } from "react";
import { useLocation } from "react-router-dom"; 
import { useParams } from "react-router-dom";
import "../bountypages/bountydata.css"; 

const BountyDetails = () => {
  const { id: taskId } = useParams();
  const [activeSection, setActiveSection] = useState("Details");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const bounty = location.state?.bounty;

  if (!bounty) {
    return <div>Bounty not found</div>;
  }
  

    const handleApply = async () => {
        try {
            setLoading(true);
            const user = localStorage.getItem("user");
            const userData = JSON.parse(user);
            if (!userData || !userData.jwtToken || !userData.username) {
              alert("User not authenticated!");
              return;
          }
          const jwtToken = userData.jwtToken;
          const username = userData.username;  
            // Step 1: Call First API to Get Data
            const response = await fetch(`http://localhost:8090/api/user/username/${username}`, {
                method: "GET",
                headers: { "Authorization": `Bearer ${jwtToken}` }
            });

            if (!response.ok) throw new Error("Failed to fetch data");

            const data = await response.json();
            console.log("First API Response:", data);



            let userAppliedTasks = JSON.parse(localStorage.getItem(`appliedTasks_${username}`)) || [];

        if (userAppliedTasks.includes(taskId)) {
            alert("You have already applied for this task!");
            return;
        }



            // Step 2: Call Second API using the received data
            const applyResponse = await fetch("http://localhost:8055/taskManagement/apply-for-task", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwtToken}`
                },
                body: JSON.stringify({
                    taskId:taskId,
                    userId: data.id, // Get from local storage
                    userEmail: data.email
                })
            });

            if (!applyResponse.ok) throw new Error("Failed to apply for task");

            //const result = await applyResponse.json();
            //console.log("Applied Successfully:", result);
            userAppliedTasks.push(taskId);
            localStorage.setItem(`appliedTasks_${username}`, JSON.stringify(userAppliedTasks));
            alert("Applied Successfully!");

        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} , ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
  };

  const isExpired = bounty.status !== "OPEN";

  return (
    <div className="bounty-details">
      <div className="bounty-header">
        <div className="company-info">
          <img src="http://localhost:8081/images/img.png" alt="Company Logo" className="company-logo" />
          <div>
            <p className="company-name">{bounty.author}</p>
            <p className="company-type">Organization</p>
          </div>
        </div>
        <div className="bount-title-div">
          <h1>{bounty.title}</h1>
          <p className="reward">
            <span className="amount">{bounty.bounty}</span> <span className="currency">BTC</span> |{" "}
            <span className="usd-value">${bounty.usdValue}</span>
          </p>
          <span className={`status ${isExpired ? "expired" : "active"}`}>
            {isExpired ? "🔘 Expired" : "🟢 Active"}
          </span>
        </div>
      </div>

      <div className="middle-section">
        <div className="content-container">
          <div className="header-row">
            <div className={`header-item ${activeSection === "Details" ? "active" : ""}`} onClick={() => setActiveSection("Details")}>
              <h2>Details</h2>
            </div>
            <div className={`header-item ${activeSection === "Participants" ? "active" : ""}`} onClick={() => setActiveSection("Participants")}>
              <h2>Participants <span className="counts">{bounty.applicants.length}</span> </h2>
            </div>
            <div className={`header-item ${activeSection === "Winners" ? "active" : ""}`} onClick={() => setActiveSection("Winners")}>
              <h2>Winners</h2>
            </div>
            <div className="header-row-button">
            <button onClick={handleApply} disabled={loading}>
                {loading ? "Applying..." : "Apply"}
            </button>
            </div>
          </div>

          <div className="content-section">
            {activeSection === "Details" && (
              <div className="section">
                <p>{bounty.description}</p>
                <a href="https://github.com/DoraFactory/pqc-cosmos/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="repo-link">
                  PQC-Cosmos Repo
                </a>
              </div>
            )}

{activeSection === "Participants" && (
  <div className="participants-list">
    {bounty.applicants.length > 0 ? (
      bounty.applicants.map((applicant, index) => (
        <div key={index} className="participant-item">
          <img 
            src={`http://localhost:8081/images/img.png`} 
            alt={applicant.username} 
            className="participant-avatar"
          />
          <div className="participant-info">
            <p className="participant-name">{applicant.firstName} {applicant.lastName}</p>
            <p className="participant-username">@{applicant.username}</p>
          </div>
        </div>
      ))
    ) : (
      <p className="no-participants">No participants yet.</p>
    )}
  </div>
)}



            {activeSection === "Winners" && (
              <div className="section">
                <p>{bounty.winners}</p>
                <a href="https://github.com/DoraFactory/pqc-cosmos/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="repo-link">
                  PQC-Cosmos Repo
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="side-card">
          <div className="section">
            <h2>Created At</h2>
            <p>{formatDate(bounty.createdAt)}</p>
          </div>

          <div className="section">
            <h2>Keywords</h2>
            <div className="tags">
              {bounty.keyWords.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="section">
            <h2>Payment Network</h2>
            <p>
              <strong>{bounty.paymentNetwork}</strong> - Transaction: {bounty.transaction}
            </p>
          </div>

          <div className="section">
            <h2>Contact</h2>
            <div className="participant-item">
          <img 
            src={`http://localhost:8081/images/img.png`} 
            alt={bounty.authorusername} 
            className="participant-avatar"
          />
          <div className="participant-info">
            <p className="participant-name">{bounty.author} </p>
            <p className="participant-username">@{bounty.authorusername}</p>
          </div>
        </div>
        <div className="participant-item">
          <img 
            src={`http://localhost:8081/images/emaillogo.svg`} 
            alt={bounty.authorusername} 
            className="participant-avatar"
          />
          <div className="participant-info">
            <p className="participant-name">{bounty.authoremail} </p>
            <p className="participant-username">Email</p>
          </div>
        </div>
            <a href={bounty.author} target="_blank" rel="noopener noreferrer" className="discord-link">
              Join Discord
            </a>
          </div>

          <div className="hunter-guide">
            <h2>Hunter's Guide</h2>
            <p>How to earn crypto as a bounty hunter?</p>
            <button className="guide-button">View Guide</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BountyDetails;
