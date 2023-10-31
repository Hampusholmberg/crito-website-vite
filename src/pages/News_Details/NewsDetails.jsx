import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NewsArticle from './NewsArticle'
import ArticleAndNews from '../../components/ArticleAndNews'

const NewsDetails = () => {

  return (

    <div className='wrapper-grid'>

        <header>
            <Header/>
        </header>
        <main>
            <NewsArticle/>
            <ArticleAndNews className="article-and-news article-and-news-subpage"/> 
        </main>
        <footer>
            <Footer/>
        </footer>

    </div>
  )
}

export default NewsDetails