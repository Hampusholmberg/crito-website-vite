import React from 'react'
import Header from '../../components/Header'
import OurNewsAndArticles from './OurNewsAndArticles'
import Footer from '../../components/Footer'
import GetNews from '../../components/GetNews'
import SubpageHeader from '../../components/SubpageHeader'

const News = () => {
  return (
    <>
      <header>
        <Header/>
        <SubpageHeader title="News & Articles"/>
      </header>
      <main>
        <OurNewsAndArticles/>
        <GetNews/>
      </main>
      <footer>
        <Footer/>
      </footer>
        
    </>
  )
}

export default News