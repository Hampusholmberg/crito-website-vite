import React from 'react'

import AboutCompany           from './AboutCompany';
import ArticleAndNews         from '../../components/ArticleAndNews';
import Customers              from './Customers';
import Features               from './Features';
import Footer                 from '../../components/Footer';
import GetNews                from '../../components/GetNews';
import Header                 from '../../components/Header';
import MeetOurTeam            from './MeetOurTeam';
import OurServices            from './OurServices';
import ProjectAndCaseStudies  from './ProjectAndCaseStudies';
import ShowcaseSection        from './ShowcaseSection';
import Testimonial            from './Testimonial';
import WhyChooseUs            from './WhyChooseUs';

const Home = () => {
  return (
    <div className='wrapper-grid'>
      <Header/>
      <main>
        <ShowcaseSection/>
        <Customers/>
        <Features/>
        <AboutCompany/>
        <OurServices/>
        <WhyChooseUs/>
        <ProjectAndCaseStudies/>
        <MeetOurTeam/>
        <Testimonial/>
        <ArticleAndNews className="article-and-news"/> 
        <GetNews/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home