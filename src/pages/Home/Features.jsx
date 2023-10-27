import React from 'react'
import handshake_icon from '../../assets/images/handshake-icon.svg'
import lightbulb_icon from '../../assets/images/lightbulb-Icon.svg'
import chart_icon from '../../assets/images/chart-icon.svg'
import gear_icon from '../../assets/images/gear-icon.svg'
import FeatureBox from '../../components/FeatureBox'

const Features = () => {

  const features = [
    {icon: handshake_icon,  title: "Business Advice",   description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
    {icon: lightbulb_icon,  title: "Startup Business",  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
    {icon: chart_icon,      title: "Financial Advice",  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
    {icon: gear_icon,       title: "Risk Management",   description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
  ]

  return (
    <section className="features">
      <div className="wrapper-div">
        <div className="container">
          <div className="content-big">
            <p>Features</p>
            <h2>Our Accounting is trusted by thousand of companies</h2>    
            <button className="btn-yellow learn-more">Learn More <i className="fa-solid fa-arrow-up-right-from-square"></i></button>
          </div>
          {features.map((feature, index) => (
            <FeatureBox key={index} icon={feature.icon} title={feature.title} description={feature.description}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features