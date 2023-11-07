import React from 'react'

const FeatureBox = ({position, icon, title, description}) => {
  return (
    <a className="content-small" href="#">
      <img src={icon}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  )
}

export default FeatureBox