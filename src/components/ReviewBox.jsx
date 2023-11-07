import React from 'react'

const ReviewBox = ({type, review, image, alt, name, title}) => {
  return (
    <div className={type}>
      <div className="stars">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <p>{review}</p>
      <div className="reviewer">
        <img src={image} alt={alt}/>
        <p className="name">{name}</p>
        <p className="title">{title}</p>
      </div>
    </div>
  )
}

export default ReviewBox