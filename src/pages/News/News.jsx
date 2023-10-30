import React from 'react'
import Header from '../../components/Header'
import OurNewsAndArticles from './OurNewsAndArticles'
import Footer from '../../components/Footer'
import NewsSubpageHeader from './NewsSubpageHeader'
import GetNews from '../../components/GetNews'

const News = () => {
  return (
    <>
      <header>
        <Header/>
        <NewsSubpageHeader/>
      </header>
      <main>
        <OurNewsAndArticles/>
        <GetNews/>
      </main>
        <Footer/>
    </>
  )
}

export default News