
const Cont = ()=>
  {

return(

<>

<section className="contact-us">
    <h2 className="contact-us-title">Contact Us</h2>
    <div className="contact-us-content">
        <form className="contact-us-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required/>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required/>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit" className="contact-us-btn">Send Message</button>
        </form>
        <div className="contact-us-info">
            <p className="contact-us-text">You can also reach us at:</p>
            <p className="contact-us-text">Phone: (555) 555-5555</p>
            <p className="contact-us-text">Email: info@roomsavailable.com</p>
        </div>
    </div>
</section>


</>

);

}
  
  export default Cont;