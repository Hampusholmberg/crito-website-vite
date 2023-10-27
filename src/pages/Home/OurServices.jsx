import React from 'react'
import background_lines_right from '../../assets/images/background-lines-right.svg'
import ServiceBox from '../../components/ServiceBox'

const OurServices = () => {

  const services = [
    {title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."},
    {title: "Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."},
    {title: "Financial Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."},
    {title: "Risk Management", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."},
  ]

  return (
    <section className="our-services">
      <img className="background-lines" src={background_lines_right} alt="White background lines for design purposes."/>
      <div className="container">
        <div className="head">
          <p>Our Services</p>
          <h3>We Provide The Best<br/>Service For Consulting</h3>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
              <ServiceBox key={index} title={service.title} description={service.description}/>
          ))}
        </div>
        <div className="button">
          <button className="btn-transparent">Browse Services<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
        </div>
      </div>
    </section>
  )
}

export default OurServices