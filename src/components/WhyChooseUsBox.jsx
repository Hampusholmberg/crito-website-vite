import React from 'react'

const WhyChooseUsBox = ({icon, title, description}) => {
  return (
    <div className="content-box">
        <div className="icon">
        <img src={icon}/>
        </div>

        <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
        </div>
    </div>
  )
}

export default WhyChooseUsBox