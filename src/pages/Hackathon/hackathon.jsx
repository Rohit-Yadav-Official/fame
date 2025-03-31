import React from "react";
import "../Hackathon/hackathon.css";

const hackathons = [
  {
    name: "MindCraft 2024",
    date: "March 16–17",
    location: "Online",
    mode: "Online",
    image: "https://dash.hackathons.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MzkwMSwicHVyIjoiYmxvYl9pZCJ9fQ==--9d9bc3cb0b3bb9632f49233bd34c298e9c6e1763/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemVfdG9fbGltaXQiOlsxOTIwLDEwODBdfSwicHVyIjoidmFyaWF0aW9uIn19--797f7952fb61db955e058b888e66d8ecb495e15b/54483986%5B1%5D.jpg",
    url: "https://mindcrafthackathon.com",
  },
  {
    name: "LG Hacks",
    date: "March 22–23",
    location: "San Jose, California",
    mode: "In-Person",
    image: "https://cloud-991he1asg-hack-club-bot.vercel.app/0pxl_20230528_002006781.jpg",
    url: "https://lghacks.com",
  },
  {
    name: "Los Altos Hacks",
    date: "April 5–6",
    location: "San Jose, California",
    mode: "In-Person",
    image: "https://dash.hackathons.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6Mzk0MSwicHVyIjoiYmxvYl9pZCJ9fQ==--5c85021a04c05110e1bbeb94770f9c93feee873b/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsxOTIwLDEwODBdfSwicHVyIjoidmFyaWF0aW9uIn19--0cb308658042f2d6b36d86bf03f4df0c63838d0b/hcbanner.png",
    url: "https://losaltoshacks.com",
  },
  {
    name: "Hack the Nest",
    date: "April 5–6",
    location: "Vienna, Virginia",
    mode: "In-Person",
    image: "https://hackathons-hackclub.s3.amazonaws.com/raxqm2b2ilb16t7abn3babm7n5i7?response-content-disposition=inline%3B%20filename%3D%22hacknight%20background.jpeg%22%3B%20filename%2A%3DUTF-8%27%27hacknight%2520background.jpeg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4OCVI72OYNROZU74%2F20250314%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250314T153539Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=6864db056dae51b4e2a0700bec2a5f6f4e6c250f448ac23aacae04e61dad2208",
    url: "https://hackthenest.org",
  },
  {
    name: "Warrior hacks",
    date: "April 22–23",
    location: "Fremont, California",
    mode: "In-Person",
    image: "https://dash.hackathons.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NDQ3MCwicHVyIjoiYmxvYl9pZCJ9fQ==--737adba6d69139f332752e7e30084f4a88936605/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsxOTIwLDEwODBdfSwicHVyIjoidmFyaWF0aW9uIn19--0cb308658042f2d6b36d86bf03f4df0c63838d0b/hackers.png",
    url: "https://lghacks.com",
  },
  {
    name: "BLU's HACKS 2025",
    date: "March 23–24",
    location: "San Jose, California",
    mode: "In-Person",
    image: "https://dash.hackathons.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NDI5MSwicHVyIjoiYmxvYl9pZCJ9fQ==--eac6f0f76c708da8ac33d02846e0fa182c329d60/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGVnIiwicmVzaXplX3RvX2xpbWl0IjpbMTkyMCwxMDgwXX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--6696b5b4ae62e9942d9b6d207dd4968bc47aaf80/pixel_art_city_dark_black_nigh.jpeg",
    url: "https://lghacks.com",
  },
  {
    name: "Eureka Hacks",
    date: "April 5-6 22–23",
    location: "Oakville, canada",
    mode: "In-Person",
    image: "https://dash.hackathons.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6Mzg5MiwicHVyIjoiYmxvYl9pZCJ9fQ==--176e324da6002f19009a4af2c0c1276d086a9679/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGVnIiwicmVzaXplX3RvX2xpbWl0IjpbMTkyMCwxMDgwXX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--6696b5b4ae62e9942d9b6d207dd4968bc47aaf80/kls_campus.jpeg",
    url: "https://www.hackakhan.org",
  },
  {
    name: "Make Hacks",
    date: "FEB 1-2 22–23",
    location: "San Fran, California",
    mode: "In-Person",
    image: "https://dash.hackathons.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NDQ1NSwicHVyIjoiYmxvYl9pZCJ9fQ==--20d236ae8790f01a2480b5aad161d032b53c22b0/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsxOTIwLDEwODBdfSwicHVyIjoidmFyaWF0aW9uIn19--0cb308658042f2d6b36d86bf03f4df0c63838d0b/DARKWebsiteMainPhoto2024.png",
    url: "https://lghacks.com",
  }
];

const HackathonCard = ({ hackathon }) => {
  return (
    <a href={hackathon.url} target="_blank" rel="noopener noreferrer" className="hackathon-card">
      <img src={hackathon.image} alt={hackathon.name} className="hackathon-image" />
      <div className="hackathon-content">
        <span className="hackathon-mode">{hackathon.mode}</span>
        <h3 className="hackathon-name">{hackathon.name}</h3>
        <p className="hackathon-date">{hackathon.date}</p>
        <p className="hackathon-location">{hackathon.location}</p>
      </div>
    </a>
  );
};

const HackathonList = () => {
  return (
    <>
    <div className="hero-container">
      <div className="overlay"></div>

      <div className="hero-content">
        <h1 className="hackathon-title">Upcoming High School Hackathons</h1>
        <p className="subtitle">
          A curated list of high school hackathons with 750 events across 21 countries.
        </p>
      </div>

      
      {/* <div className="event-tags">
        <span className="tag online">Online</span>
        <span className="tag hybrid">Hybrid</span>
        <span className="in-person">In-Person</span>
      </div> */}
    </div>
    <div className="hackathon-container">
      {hackathons.map((hackathon, index) => (
        <HackathonCard key={index} hackathon={hackathon} />
      ))}
    </div>  </>
  );
};

export default HackathonList;
