import React from 'react'

const TeamMemberBox = ({image, alt, name, title}) => {
  return (
    <div className="content-box">
        <img src={image} alt={alt}/>
        <p className="name">{name}</p>
        <p className="job-title">{title}</p>
    </div>
  )
}

export default TeamMemberBox