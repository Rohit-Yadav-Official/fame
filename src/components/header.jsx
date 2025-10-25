import {useState,useEffect }from 'react';
import '../components/header.css'
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Header() {
  const navigate = useNavigate(); // Initialize navigation
   
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let timeoutId = null;
  useEffect(() => {
    // Check if the user is logged in by looking for the JWT token
    const fetchUser = async () => {
      
        const storedUser = localStorage.getItem("user");

        console.log("Stored user:", storedUser); // Debugging

         if(storedUser){
          const token = JSON.parse(storedUser);

        // Fetch user details
        const response = await fetch(`http://localhost:8090/api/user?username=${token.username}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Parse response as JSON

        setUser({
          name: `${data.firstName} ${data.lastName}`,
          avatar: data.image,
          email: data.email,
        });
      }

    
  };

  fetchUser()
}, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login"); // Redirect to login page after logout
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setDropdownOpen(false), 100); // Add delay to prevent flickering
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="header">
      <div className="header-brand">
        <h1 className="text-2xl font-bold" onClick={() => navigate('/')}>Fame</h1>
      </div>
      
      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <ul className="header-ul">
          <li><a href="" className="header-ul-li" onClick={() => navigate('/jobs')}>Jobs </a></li>
          <li><a href="" className="header-ul-li"  onClick={() => navigate('/bounty')}>Bountys</a></li>
          <li><a href="" className="header-ul-li"   onClick={() => navigate('/project')}>Projects</a></li>
          <li><a href="" className="header-ul-li"  onClick={() => navigate('/hackathon')}>Hackathons</a></li>
          <li><a href="" className="header-ul-li">Contact Us</a></li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}>
        <ul className="mobile-header-ul">
          <li><a href="" className="mobile-header-ul-li" onClick={() => {navigate('/jobs'); closeMobileMenu();}}>Jobs </a></li>
          <li><a href="" className="mobile-header-ul-li"  onClick={() => {navigate('/bounty'); closeMobileMenu();}}>Bountys</a></li>
          <li><a href="" className="mobile-header-ul-li"   onClick={() => {navigate('/project'); closeMobileMenu();}}>Projects</a></li>
          <li><a href="" className="mobile-header-ul-li"  onClick={() => {navigate('/hackathon'); closeMobileMenu();}}>Hackathons</a></li>
          <li><a href="" className="mobile-header-ul-li" onClick={closeMobileMenu}>Contact Us</a></li>
        </ul>
      </nav>
      {user ? (
          <div className="user-profile">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="avatar"
              onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            />
            {dropdownOpen && (
            <div className="dropdown-card"   onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
              <p className="avatar-text">Signed in as <span className="text-black">{user.name}</span></p>
              <p className="avatar-email">{user.email}</p>
              <hr />
              <button className="dropdown-item" onClick={() => navigate("/profile")}>Profile</button>
              <button className="dropdown-item" onClick={() => navigate("/organizations")}>Organizations</button>
              <button className="dropdown-item" onClick={() => navigate("/settings")}>Settings</button>
              <hr />
              <button className="dropdown-item logout" onClick={handleLogout}>Sign out</button>
            </div>
          )}
          </div>
        ) : (
          <div className='header-btn'> 
            {/* <button className="button" onClick={() => navigate("/signup")}>
              Sign Up
            </button> */}
            <button className="button" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        )}
    </div>
  );
}

export default Header;
