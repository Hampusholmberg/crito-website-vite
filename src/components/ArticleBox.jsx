import React from 'react'

const ArticleBox = ({image, alt, day, month, title, description, url, category}) => {
  return (
    <div className="content-box">
      <div className="img-div">
        <img src={image} alt={alt}/>
        <div className="date">
          <p className="day">{day}</p>
          <p className="month">{month}</p>
        </div>
      </div>

      <div className="text">
        <p>{category}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ArticleBox