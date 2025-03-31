import React, { useState, useEffect } from "react";
import "../EditProfile/EditProfile.css";

const EditProfile = ({ onClose }) => {
  const [profile, setProfile] = useState({
    id: "",
    username: "",
    image: "http://localhost:8081/images/img.png",
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    collegeName: "",
    phoneNumber: "",
    degreePursuing: "",
    gender: "",
    active: false,
    birthDay: "",
    keySkills: "",
    resume: "",
  });
  const [emailverified, setEmailverified] = useState(false);
  const [verifying, setVerifying] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
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
          if (data.active === true) {
            setEmailverified(true);
          }
          setProfile((prev) => ({ ...prev, ...data }));
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prev) => ({ ...prev, image: imageUrl }));
      const formData = new FormData();
      formData.append("file", file); // Append file to FormData
      formData.append("type", "images"); // Example: You can pass a type if required
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const token = JSON.parse(storedUser);
      try {
         const response = await fetch(`http://localhost:8090/api/user/${token.username}/upload`, {
          method: "POST",
          body: formData, // Send FormData, NOT query parameters
        });
        if (!response.ok) throw new Error("Upload failed");
  
         
  
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    }
  };

  const handleVerifyEmail = async () => {
    setVerifying(true);
    try {
      const response = await fetch("http://localhost:8090/api/user/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: profile.email }),
      });

      if (response.ok) {
        alert("Verification email sent! Please check your inbox.");
      } else {
        alert("Failed to send verification email.");
      }
    } catch (error) {
      console.error("Error verifying email:", error);
    }
    setVerifying(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const storedUser = localStorage.getItem("user");
      if(storedUser){
        const token = JSON.parse(storedUser);
      const response = await fetch(`http://localhost:8090/api/user/${token.username}/update`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      });
    
    
    
      if (response.ok) {
        alert("Profile updated successfully!");
        onClose();
      } else {
        alert("Failed to update profile");
      }
    }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="edit-profile-modal">
      <div className="edit-profile-content">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>Edit Profile</h2>
        <div className="progress-bar">
          <span style={{ width: "10%" }}></span>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Avatar/Profile Image</label>
          <div className="profile-picture-section">
            <img src={profile.image} alt="Profile" className="profile-image" />
            <label htmlFor="upload-avatar" className="upload-btn">
              Change
            </label>
            <input
              type="file"
              id="upload-avatar"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </div>

          <label>First Name</label>
          <input type="text" name="firstName" value={profile.firstName} onChange={handleChange} required />

          <label>Last Name</label>
          <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} required />

          <label>Email</label>
          <div className="email-verification">
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              required
              disabled={emailverified}
              className={emailverified ? "verified" : ""}
            />
            {!emailverified && (
              <button type="button" className="verify-btn" onClick={handleVerifyEmail} disabled={verifying}>
                {verifying ? "Sending..." : "Verify"}
              </button>
            )}
          </div>

          <label>Location</label>
          <input type="text" name="location" value={profile.location} onChange={handleChange} />

          <label>College Name</label>
          <input type="text" name="collegeName" value={profile.collegeName} onChange={handleChange} />

          <label>Phone Number</label>
          <input type="text" name="phoneNumber" value={profile.phoneNumber} onChange={handleChange} />

          <label>Degree Pursuing</label>
          <input type="text" name="degreePursuing" value={profile.degreePursuing} onChange={handleChange} />

          <label>Gender</label>
          <select name="gender" value={profile.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <label>Birthday</label>
          <input type="date" name="birthDay" value={profile.birthDay} onChange={handleChange} />

          <label>Key Skills</label>
          <textarea name="keySkills" value={profile.keySkills} onChange={handleChange}></textarea>

          <label>Resume (PDF)</label>
          <input type="file" accept="application/pdf" onChange={handleFileUpload} />

          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
