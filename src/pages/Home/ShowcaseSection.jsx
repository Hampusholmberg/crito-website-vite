import React from 'react'
import img_background_lines from '../../assets/images/background-lines.svg'
import img_showcase_image from '../../assets/images/showcase-image.svg'

const ShowcaseSection = () => {
  return (
    <section className="showcase">
      <img className="background-lines" src={img_background_lines} alt="White background lines for design purposes."/>

      <div className="container">

        <div className="showcase-text">

          <h1>We Provide The Best Business Solutions</h1>

          <p>Establish your vision and value proposition and turn them into testable prototypes.</p>

          <div className="showcase-btns">
            <button className="btn-yellow get-consulting">Get Consulting<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
            <button className="btn-transparent learn-more">Learn More<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
          </div>

        </div>

        <img src={img_showcase_image} alt="Man in a black suit holding a tablet"/>

      </div>
    </section>

  )
}

export default ShowcaseSection