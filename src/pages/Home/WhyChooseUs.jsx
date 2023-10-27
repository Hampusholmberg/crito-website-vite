import React from 'react'
import strategic_planning from '../../assets/images/Strategic-Planning.svg'
import experience_design from '../../assets/images/Experience-Design.svg'
import artificial_intelligence from '../../assets/images/Artificial-Intelligence.svg'
import why_choose_us_image from '../../assets/images/why-choose-us-image.png'
import WhyChooseUsBox from '../../components/WhyChooseUsBox'
import process_excellence from '../../assets/images/Process-Excellence.svg'

const WhyChooseUs = () => {

  const content = [
    {icon: process_excellence, title: "Process Excellence", description: "Lorem, ipsum dolor sit amet consectetur."},
    {icon: strategic_planning, title: "Strategic Planning", description: "Lorem, ipsum dolor sit amet consectetur."},
    {icon: experience_design, title: "Experience Design", description: "Lorem, ipsum dolor sit amet consectetur."},
    {icon: artificial_intelligence, title: "Artificial Intelligence", description: "Lorem, ipsum dolor sit amet consectetur."},
  ]

  return (
    <section className="why-choose-us">

      <div className="background">
      </div>

      <div className="container">
        <div className="left">
          <div className="head">
            <p>Why Choose Us</p>
            <h2>Why We Are The Best Business Consulting Agency</h2>
          </div>
          {
            content.map((content, index) => (
              <WhyChooseUsBox key={index} icon={content.icon} title={content.title} description={content.description} />
            ))
          }
        </div>

        <div className="right">
          <img src={why_choose_us_image} alt="Two women sitting by a table talking to each other and looking in a notebook."/>
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs