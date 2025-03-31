import React from "react";
import { FaXTwitter, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa6";
import "../../components/footer/footer.css"


export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">

     
        {/* Left Section - Address and Social Icons */}
        <div className="footer-left">
          <p>2261 Market Street #5039</p>
          <p>San Francisco, CA 94114</p>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <FaDiscord />
            </a>
          </div>
        </div>

        {/* Right Section - Footer Links */}
        <div className="footer-links">
          <div>
            <h4>Documentation</h4>
            <ul>
              <li>Getting Started</li>
              <li>API Reference</li>
              <li>Integrations</li>
              <li>Examples</li>
              <li>SDKs</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Changelog</li>
              <li>Pricing</li>
              <li>Security</li>
              <li>SOC 2</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>Blog</li>
              <li>Brand</li>
              <li>Contact</li>
              <li>Customers</li>
              <li>Philosophy</li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>Acceptable Use</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
