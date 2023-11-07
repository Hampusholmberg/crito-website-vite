import React from 'react'
import background_lines from '../assets/images/background-lines.svg'

const SubpageHeader = ({title}) => {
  return (
    <div className="subpage-header">
      <div className="container">
        <img className="background-lines" src={background_lines} alt="White background lines for design purposes."/>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default SubpageHeader