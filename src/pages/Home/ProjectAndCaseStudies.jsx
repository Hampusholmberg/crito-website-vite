import React from 'react'
import project01 from '../../assets/images/Project01.png'
import project02 from '../../assets/images/Project02.png'
import project03 from '../../assets/images/Project03.png'
import project04 from '../../assets/images/Project04.png'
import CaseStudyBox from '../../components/CaseStudyBox'

const ProjectAndCaseStudies = () => {

  const caseStudies = [
    {image: project01, title: "Grow your business", url: "#", imgDescription: "A man in a suit reading a business newspaper."},
    {image: project02, title: "Why your client needs a responsive website", url: "#", imgDescription: "Rose gold colored apple products laying on a desk."},
    {image: project03, title: "Educate your employees to get better results", url: "#", imgDescription: "Picture of a notebook, coffee mug, laptop and a ruler."},
    {image: project04, title: "Business Insights is a important piece of your business", url: "#", imgDescription: "A laptop with a business intelligence dashboard active."},
  ]

  return (
    <section className="project-and-case-studies">

    <div className="container">

      <div className="head">
        <p>Project & Case Studies</p>
        <h2>Let’s Look At Our Global Projects</h2>
      </div>

      <div className="content-grid">
        {caseStudies.map((caseStudy, index) => (
            <CaseStudyBox key={index} image={caseStudy.image} title={caseStudy.title} 
                          href={caseStudy.url} alt={caseStudy.imgDescription}/>
        ))}
      </div>

      <div className="button">
        <button className="btn-black">All Recent Projects<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
      </div>

    </div>

  </section>
  )
}

export default ProjectAndCaseStudies