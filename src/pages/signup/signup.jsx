import React, { useState } from "react";
import "../signup/signup.css"; // Import external CSS file

export default function Signup() {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // Reset error

    // **Validation checks**
    if (username.length < 5) {
      setError("Username must be at least 5 characters long.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (!role) {
      setError("Please select a role.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8089/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password,email, role }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData.error || "Signup failed");
      }
      try {
        const response = await fetch("http://localhost:8089/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });
    
        if (!response.ok) {
          // If response is not OK (e.g., 401), throw an error
          const errorData = await response.json();
          throw new Error(errorData.error || "Login failed");
        }
    
        const jsonData = await response.json(); // Parse JSON response
        localStorage.setItem("user", JSON.stringify(jsonData));
     
        alert("Signup successful! Redirecting...");
         window.location.href = "/"; // Redirect to homepage // Redirect to dashboard or homepage
      } catch (error) {
        alert(error.message); // Show correct error message
      }
    }  
    catch (error) {
      setError(error.message); // Display error message
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="signup-title">Create Account</h1>
        <p className="signup-subtitle">
          Already have an account?{" "}
          <a href="/login" className="login-link">Login.</a>
        </p>

        {error && <p className="error-message">{error}</p>}

        <form className="signup-form" onSubmit={handleSignup}>
          <div className="signup-input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="alan.turing"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="signup-input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="alan.turing@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="signup-input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="signup-input-group">
            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="" disabled>Select your role</option>
              <option value="USER">User</option>
              <option value="COMPANY">Company</option>
            </select>
          </div>

          <button type="submit" className="signup-continue-btn">
            Create account →
          </button>
        </form>

        <div className="signup-separator">
          <hr />
          <span>OR</span>
          <hr />
        </div>

        <div className="signup-social-login">
          <button className="signup-social-btn">🔗 Login with GitHub</button>
          <button className="signup-social-btn">🌍 Login with Google</button>
          <button className="signup-social-btn">Login with SSO</button>
        </div>

        <p className="signup-terms">
          By signing in, you agree to our{" "}
          <a href="#" className="signup-terms-link">Terms of Service</a> and{" "}
          <a href="#" className="signup-terms-link">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
