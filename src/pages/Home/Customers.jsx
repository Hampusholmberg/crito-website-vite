import React from 'react'
import img_paperz   from '../../assets/images/paperz.svg'
import img_dorfus   from '../../assets/images/dorfus.svg'
import img_martino  from '../../assets/images/martino.svg'
import img_square   from '../../assets/images/square.svg'
import img_gobona   from '../../assets/images/gobona.svg'

const Customers = () => {
  return (
    <section className="customers">
      <div className="container">
        <div>
          <a href="#" className="first"><img src={img_paperz} alt=""/></a>
          <a href="#" className="last"><img src={img_dorfus} alt=""/></a>
          <a href="#" ><img src={img_martino} alt=""/></a>
          <a href="#"><img src={img_square} alt=""/></a>
          <a className="last" href="#"><img src={img_gobona} alt=""/></a>
        </div>
      </div>
    </section>
  )
}

export default Customers