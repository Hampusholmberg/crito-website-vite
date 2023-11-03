import React, { useState, useEffect } from 'react'
import ArticleBox from './ArticleBox'
import { NavLink } from 'react-router-dom'

const ArticleAndNews = ({className}) => {

  const [articles, setArticles] = useState([])
  const [showAllArticles, setShowAllArticles] = useState(false)

  useEffect(() => {

    const getArticles = async () => {
      const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
      setArticles(await result.json())
    }

    getArticles()
  } , [] )

  const displayArticles = () => {
    setShowAllArticles(true)
  }

  return (
    <section className={className}>
      <div className="container">
        <div className="head">
          <div className="left">
            <p>Article & News</p>
            <h2>Get Every Single Articles & News</h2>
          </div>
          <div className="right">
            <form action="news.html">
              <button className="btn-transparent">
                Browse Articles<i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="content-wrapper">
          {showAllArticles 
            ? (
              articles.map((article) => (
                <NavLink to={`/news/${article.id}`} key={article.id}>
                  <ArticleBox
                    title={article.title}
                    description={article.content}
                    category={article.category}
                    image={article.imageUrl}
                  />
                </NavLink>
              )))
            : (
              articles.slice(0, 3).map((article) => (
                <NavLink to={`/news/${article.id}`} key={article.id}>
                  <ArticleBox
                    title={article.title}
                    description={article.content}
                    category={article.category}
                    image={article.imageUrl}
                  />
                </NavLink>
              )))
          }
          {showAllArticles 
            ? ("")
            : (
              <div className='btn-div'>
                <button onClick={displayArticles} className='btn-yellow' >Show All</button>
              </div>)
          }
        </div>
      </div>
    </section>
  )
}

export default ArticleAndNews