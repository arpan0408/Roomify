import React from "react";
import b from "../images/c.jpg"
const About = () => {
  return(
  <>
  

    <section class="about-us">
    <h2 class="about-us-title">About Us</h2>
    <div class="about-us-content">
        <p class="about-us-text">We are a team of passionate and experienced professionals who are dedicated to providing the best rooms and services to our customers. <br /><br />Our mission is to make your stay as comfortable and enjoyable as possible, and we strive to exceed your expectations in every way.</p>
        <img src={b} alt="About Us Image" class="about-us-image"/>
    </div>
</section>

<section class="album">
  <h2 class="album-title">Our Team</h2>
  <div class="album-cards">
      <div class="album-card" style={{background:"#29B6F6"}}>
          <img src="img/Arpan.png" alt="Album Image 1" class="album-image"/>
          <h3>Arpan Kumar</h3>
          <p class="album-text">Bachelor's of Computer Application</p>
      </div>
      <div class="album-card" style={{background:"#29B6F6"}}>
          <img src="img/sant.png" alt="Album Image 2" class="album-image"/>
          <h3>Santosh Prasad</h3>
          <p class="album-text">Bachelor's of Computer Application</p>
          
      </div>
   
  </div>
</section>


  </>);
};
export default About;
