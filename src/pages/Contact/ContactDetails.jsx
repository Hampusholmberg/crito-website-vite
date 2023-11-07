import React from 'react'

const ContactDetails = () => {
  return (
    <section className="contact-details">

      <div className="container">

        <div className="content-box">
          <div className="icon">
          <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="text">
          <h3>Visit us</h3>
          <p>Sveavägen 31</p>
          <p>111 34 STOCKHOLM</p>
          </div>
        </div>

        <div className="content-box">
          <div className="icon">
          <i className="fa-solid fa-phone"></i>
          </div>
          <div className="text">
          <h3>Call us</h3>
          <p>+46 (8) 121 470 50</p>
          <p>+46 (8) 121 470 51</p>
          </div>
        </div>

        <div className="content-box">
          <div className="icon">
          <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="text">
          <h3>Email us</h3>
          <p>info@crito.com</p>
          <p>support@crito.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactDetails