import React from 'react'
import our_services_line from '../assets/images/Our-services-line.png'

const ServiceBox = ({title, description}) => {
  return (
    <a className="content-box" href="#">
        <img src={our_services_line}/>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
            <i className="fa-solid fa-arrow-right btn-black-round"></i>
        </div>
    </a>
  )
}

export default ServiceBox