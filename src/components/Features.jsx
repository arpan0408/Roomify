const Features =()=>
  {

return(

<>
<section className="features" >
  <h2 className="features-title" style={{color:"white",textShadow:"2px 2px black"}}>Why Choose Us?</h2>
  <div className="features-cards">
      <div className="feature-card">
          <h3 className="feature-title" style={{color:"white",textShadow:"1px 1px #7E57C2"}}>Wide Range of Options</h3>
          <p className="feature-description">We offer a wide range of rooms to fit your needs and budget.</p>
      </div>
      <div className="feature-card">
          <h3 className="feature-title" style={{color:"white",textShadow:"1px 1px #7E57C2"}}>Easy Booking Process</h3>
          <p className="feature-description">Book your room in just a few clicks.</p>
      </div>
      <div className="feature-card">
          <h3 className="feature-title" style={{color:"white",textShadow:"1px 1px #7E57C2"}}>Secure Payment Gateway</h3>
          <p className="feature-description">Our payment system is secure and trustworthy.</p>
      </div>
      <div className="feature-card" style={{marginLeft:"28em"}}>
          <h3 className="feature-title" style={{color:"white",textShadow:"1px 1px #7E57C2"}}>24/7 Customer Support</h3>
          <p className="feature-description">Our customer support team is available 24/7 to assist you.</p>
      </div>
  </div>
</section>
</>
);}

  export default Features;