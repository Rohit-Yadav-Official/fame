import React from "react";
import "../setting/setting.css"; // Import the CSS file

const wallets = [
  {
    title: "ERC20 Address",
    description: "There is no linked wallet now.",
    buttonText: "Link New Address",
  },
  {
    title: "Lightning Wallet Public Key",
    description: "There is no linked wallet now.",
    buttonText: "Link New Address",
  },
  {
    title: "Vota Wallet",
    description: "There is no linked wallet now.",
    buttonText: "Link New Vota Wallet",
  },
];

const Setting = () => {
  return (
    <div className="wallets-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li className="active">Wallets</li>
          <li>Email Preferences</li>
          <li>Personalized Topics</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="wallets-content">
        <h2>Manage linked wallets</h2>
        <p>
          You can use any linked wallet to log in. The contributions from the
          linked wallets, such as votings, kudos, etc., will be displayed on
          your profile.
        </p>

        {wallets.map((wallet, index) => (
          <div key={index} className="wallet-section">
            <h3>{wallet.title}</h3>
            <p className="wallet-description">{wallet.description}</p>
            <button className="link-button">{wallet.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Setting;