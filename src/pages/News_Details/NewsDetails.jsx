import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NewsArticle from './NewsArticle'
import ArticleAndNews from '../../components/ArticleAndNews'


const NewsDetails = () => {

  const { id } = useParams()

  const [article, setArticle] = useState([])

  useEffect(() => {

    const getArticleDetails = async () => {

      const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)

      const articleData = await result.json()
      setArticle(articleData)
      console.log(articleData)
    };

    getArticleDetails()

  }, [id] )

  return (

    <div className='wrapper-grid'>

        <header>
            <Header/>
        </header>
        <main>
          <NewsArticle
            title={article.title}
            content={article.content}
            author={article.author}
            published={article.published}
            category={article.category}
            imageUrl={article.imageUrl}
          />

            <ArticleAndNews className="article-and-news article-and-news-subpage"/> 
        </main>
        <footer>
            <Footer/>
        </footer>

    </div>
  )
}

export default NewsDetails