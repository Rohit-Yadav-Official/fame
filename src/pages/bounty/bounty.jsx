import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "../bounty/bounty.css";

const fetchBounties = async () => {
  const { data } = await axios.get("http://localhost:8055/taskManagement");
  return data;
};

const BountyList = () => {
  const earners = [
    { name: 'Chris Park', amount: '$900 USDC', role: 'DeFi Captain in Korea' },
    { name: 'DEFI EMMY', amount: '333 USDC', role: 'DeTA Developer Twitter Competition' },
    { name: 'HogwartsofWeb31', amount: '222 USDC', role: 'DeTA Developer Twitter Competition' },
    { name: 'Duke Of Web3', amount: '420 USDC', role: 'DeTA Developer Twitter Competition' },
    { name: 'Seungjun OH', amount: '1.5k USDC', role: 'Guild Lead' },
    { name: 'LEVI of WEB 3', amount: '200 USDC', role: '' },
    { name: 'Chris Park', amount: '$900 USDC', role: 'DeFi Captain in Korea' },
    { name: 'DEFI EMMY', amount: '333 USDC', role: 'DeTA Developer Twitter Competition' },
    { name: 'HogwartsofWeb31', amount: '222 USDC', role: 'DeTA Developer Twitter Competition' },
    { name: 'Duke Of Web3', amount: '420 USDC', role: 'DeTA Developer Twitter Competition' },
    { name: 'Seungjun OH', amount: '1.5k USDC', role: 'Guild Lead' },
    { name: 'LEVI of WEB 3', amount: '200 USDC', role: '' },
  ];


  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const { data: bounties, isLoading, error } = useQuery({
    queryKey: ["bounties"],
    queryFn: fetchBounties,
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 1,
  });

  if (isLoading) return <p>Loading bounties...</p>;
  if (error) return <p className="error">Failed to load bounties</p>;

  const filteredBounties = bounties.filter((bounty) =>
    [bounty.title, bounty.companyName, bounty.description]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (bounty) => {

    console.log("Bounty object:", bounty); // Debugging
    console.log("Bounty ID:", bounty?.id); // Check if ID exists
    
    if (!bounty?.id) {
        console.error("❌ Error: Bounty ID is undefined!");
        // Prevent navigation if ID is missing
    }

    navigate(`/bounty/${bounty.id}`, { state: { bounty } });
    console.log(bounty)
  };

  return (
    <div className="bounty-page">
      {/* Left Sidebar */}
      
      
      {/* Main Content */}
      <div className="main-content">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search bounties..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="middle-section">    
        <div className="sidebar">
        <div className="sponsor-box">
          <h3>Become a Sponsor</h3>
          <p>Reach 70,000+ crypto talent from one single dashboard</p>
        </div>
        <div className="stats">
          <p><strong>$3,535,930</strong> Total Value Earned</p>
          <p><strong>1535</strong> Opportunities Listed</p>
        </div>
        <div className="how-it-works">
          <h4>How It Works</h4>
          <ul>
            <li><strong>Create your Profile</strong> - by telling us about yourself</li>
            <li><strong>Participate in Bounties & Projects</strong> - to build proof of work</li>
            <li><strong>Get Paid for Your Work</strong> - in global standards</li>
          </ul>
        </div>
        
        <h3 className="recent-learners">RECENT EARNERS</h3>
        <div className="scrolling-list">    
      <ul>
        
        {earners.map((earner, index) => (
          <li key={index}>
            <div className="company-info" >   
             <img
                      src="http://localhost:8081/images/img.png"
                      alt="Company Logo"
                      className="earned-list-avatar"
                    />
            <strong>{earner.name}</strong> - <strong className="scrolling-list-amount">{earner.amount} </strong> <br /> {earner.role}
            </div>
          </li>
        ))}
      </ul>
    </div>
      </div>

        <div className="bounty-container5">
          {filteredBounties.length === 0 ? (
            <p>No bounties found.</p>
          ) : (
            filteredBounties.map((bounty) => {
              const isExpired = bounty.status === "OPEN" ? false : true;

              return (
                <div
                  key={bounty.id}
                  className="bounty-card"
                  onClick={() => handleCardClick(bounty)}
                >
                  <span className={`status ${isExpired ? "expired" : "active"}`}>
                    {isExpired ? "🔘 Expired" : "🟢 Active"}
                  </span>
                  <h3 className="bounty-title">{bounty.title}</h3>
                  <p className="reward">
                    <span className="amount">{bounty.bounty}</span>{" "}
                    <span className="amount">BTC</span> |{" "}
                    <span className="amount-in-usd">${bounty.usdValue}</span>
                  </p>
                  <div className="tags">
                    {bounty.keyWords.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="company-info">
                    <img
                      src="http://localhost:8081/images/img.png"
                      alt="Company Logo"
                      className="company-logo"
                    />
                    <div>
                      <p className="company-name">{bounty.author}</p>
                      <p className="company-type">Organization</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default BountyList;
