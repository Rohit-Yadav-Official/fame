
import React from 'react';
import '../../components/hero/hero.css'
import heroimage from '../../assets/image.png'


function hero(){

  return (

    <section className="hero">
  <div className="hero-content">

    <h1>All in one Platform for developers</h1>
    <p>
  Find <span style={{ color: '#ffffff', fontWeight: 'bold' }}>Work</span>.
  Hire <span style={{ color: '#ffffff', fontWeight: 'bold' }}>Talent</span>.
  Get Paid in <span style={{ color: '#ffffff', fontWeight: 'bold' }}>Crypto</span>
</p>
  </div>
  <div>
    <img className="hero-image"src={heroimage} alt="" />
  </div>
</section>

  )



};
export default hero;
