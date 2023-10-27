import React from 'react'
import background_wavy_lines_footer from '../assets/images/background-wavy-lines-footer.svg'
import logotype_white from '../assets/images/logotype-white.svg'

const Footer = () => {
  return (
    <footer>
    <div className="upper">
      <img className="background-lines" src={background_wavy_lines_footer}/>

      <div className="container">
      
        <div className="logo-and-text">
          <img src={logotype_white} alt="Crito logotype"/>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
        </div>

        <div className="content-box">
          <p className="footer-header">Company</p>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Works</a>
          <a href="#">Career</a>
        </div>

        <div className="content-box">
          <p className="footer-header">Help</p>
          <a href="#">Customer Support</a>
          <a href="#">Delivery Details</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="content-box last">
          <p className="footer-header">Resources</p>
          <a href="#">Free eBooks</a>
          <a href="#">Development Tutorial</a>
          <a href="#">How to - Blog</a>
          <a href="#">Youtube Playlist</a>
        </div>

        <div className="content-box last">
          <p className="footer-header">Link</p>
          <a href="#">Free eBooks</a>
          <a href="#">Development Tutorial</a>
          <a href="#">How to - Blog</a>
          <a href="#">Youtube Playlist</a>
        </div>

      </div>
    </div>

    <div className="lower"> 
      <div className="container">
            
        <div className="copyright">
          <p>&#169; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
        </div>

        <div className="social-media">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer