import React from 'react'

const CaseStudyBox = ({image, title, alt, href}) => {
  return (
    <a href={href} className="content-box">
      <div className="upper">
        <img src={image} alt={alt}/>
        <h3>{title}</h3>
      </div>
      <div className="lower">
        <p>Read More<i className="fa-solid fa-arrow-up-right-from-square"></i></p>
      </div>
    </a>
  )
}

export default CaseStudyBox