import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NewsArticle from './NewsArticle'
import ArticleAndNews from '../../components/ArticleAndNews'
import ErrorPage from '../Not_Found/ErrorPage'


const NewsDetails = () => {

  const {id} = useParams()

  const [article, setArticle] = useState({})

  useEffect(() => {

    const getArticles = async () => {

      const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)

      if (result.ok) {
        const data = await result.json()
        setArticle(data)
      }
      else {
        setArticle(false)
      }
    }

    getArticles()
  }, [id] )

  return (
    <div className='wrapper-grid'>
      <header>
        <Header/>
      </header>
      <main>
        {article
          ? (
            <NewsArticle
              title={article.title}
              content={article.content}
              author={article.author}
              published={article.published}
              category={article.category}
              imageUrl={article.imageUrl}
            />
          ) 
          : (
        <ErrorPage/>
          )}
        <ArticleAndNews className="article-and-news article-and-news-subpage"/> 
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default NewsDetails