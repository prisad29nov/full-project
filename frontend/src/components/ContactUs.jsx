import React from "react";

const ContactUs = () => {
  return (
    <>
      <div>
        <div
          className="mt-5"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            textAlign: "center",
          }}
        >
          <div>
            Phone
            <div>+91 9011569814</div>
          </div>
          <div>
            Email
            <div>psalunke618@gmail.com</div>
          </div>
          <div>
            Address
            <div>Pune, Maharashtra</div>
          </div>
        </div>
      </div>
      <div style={{ border:'2px solid black' ,margin:'50px 350px' }}>
        <div style={{ textAlign: "center" }}>
         <h2>Get in Touch</h2> 
          <div>
            <input type="text" placeholder="Your Name" />
          </div><br />
          <div>
            <input type="email" placeholder="Your Email" />
          </div><br />
          <div>
            <input type="password" placeholder="Your Password" />
          </div><br />
          <div>
            <textarea cols="30" rows="10">
              Message
            </textarea>
          </div><br />
          <div>
            <button className="btn btn-primary">Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
