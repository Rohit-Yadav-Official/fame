import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Hero from './components/hero/hero'
import BountyProjects from './components/Group/group'
import BountyProjects1 from './components/Group/group1'
import BountyProjects3 from './components/Group/group2'
import Footer from './components/footer/footer'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import JobDashboard from './pages/jobs/jobs'
import BountyList from './pages/bounty/bounty'
import UserProfile from './pages/UserProfile/UserProfile'
import BountyDetails from './pages/bounty/bountypages/bountydata'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hackathon from './pages/Hackathon/hackathon'
import ProjectPage from './pages/projects/project'
import ProjectDetails from './pages/projects/projectDetails/ProjectDetails'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Header />
      <Routes>
        {/* Home Page - Shows all components */}
        <Route path="/" element={
          <>
            <Hero />
            <BountyProjects />
            <BountyProjects3 />
            <BountyProjects1 />
            <Footer />
          </>
        } />
        
        {/* Login Page - Shows only Header, Login, and Footer */}
        <Route path="/login" element={
          <>
            <Login />
            <Footer />
          </>
        } />
        <Route path="/jobs" element={
          <>
            <JobDashboard />
            <Footer />
          </>
        } />
        <Route path="/bounty" element={
          <>
            <BountyList />
            <Footer />
          </>
        } />

        <Route path="/hackathon" element={
          <>
            <Hackathon />
            <Footer />
          </>
        } />

        <Route path="/project" element={
          <>
            <ProjectPage/>
            <Footer />
          </>
        } />
        
        
       
        <Route path="/project/:projectId" element={<ProjectDetails />} />
     

   

        <Route path="/bounty/:id" element={<BountyDetails />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/signup" element={
          <>
            <Signup />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
    </>
  )
}

export default App
