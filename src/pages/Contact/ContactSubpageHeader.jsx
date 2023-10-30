import React from 'react'
import background_lines from '../../assets/images/background-lines.svg'

const ContactSubpageHeader = () => {
  return (
    <div class="subpage-header">
        <div class="container">
            <h1>Let's Connect</h1>
            <img class="background-lines" src={background_lines} alt="White background lines for design purposes."/>
        </div>
    </div>
  )
}

export default ContactSubpageHeader