import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useArticles } from '../../contexts/ArticleContext'

import Header         from '../../components/Header'
import Footer         from '../../components/Footer'
import NewsArticle    from './NewsArticle'
import ArticleAndNews from '../../components/ArticleAndNews'
import ErrorPage      from '../Not_Found/ErrorPage'

const NewsDetails = () => {
  const {id} = useParams()
  const {article, getArticle} = useArticles()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getArticle(id)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id])

  return (
    <div className='wrapper-grid'>
      <header>
        <Header/>
      </header>
      <main>
        {loading
          ? (""
          ) 
          : article 
          ? (
            <NewsArticle
              title={article.title}
              content={article.content}
              published={article.published.slice(0, 10)}
              category={article.category}
              author={article.author}
              imageUrl={article.imageUrl}
            />
          )
          : (
            <ErrorPage/>
          )
        }
        <ArticleAndNews className="article-and-news article-and-news-subpage"/> 
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default NewsDetails