import React from 'react'
import img_about_company from '../../assets/images/about-company-1.png'

const AboutCompany = () => {
  return (
    <section className="about-company">
      <div className="container">
        <div className="left">
          <img src={img_about_company} alt=""/>

          <div className="textbox">
            <p className="name">Samantha Brown, <span>Founder</span></p>
            <p className="quote">"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
          </div>
        </div>

        <div className="right">

          <div className="textbox">
            <p className="head">About Company</p>
            <h2>We Are Business Consulting & Credit Repair Experts</h2>
            <p className="about-company-text first">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
            <p className="about-company-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
          </div>

          <div className="buttons">
            <button className="btn-black">Learn More<i className="fa-solid fa-arrow-up-right-from-square"></i></button>

          <a href="#">
            <div className="btncontainer">
              <button className="btn-play">&#9658;</button><p>Intro Video</p>
            </div>
          </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCompany