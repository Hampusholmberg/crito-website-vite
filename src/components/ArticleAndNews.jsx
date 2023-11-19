import React, { useEffect, useState } from 'react'
import { useArticles } from '../contexts/ArticleContext'
import { NavLink } from 'react-router-dom'
import ArticleBox from './ArticleBox'
import GetNewsDay from './functions/GetNewsDay'
import GetNewsMonth from './functions/GetNewsMonth'


const ArticleAndNews = ({className}) => {

  const {articles} = useArticles()
  const [showAllArticles, setShowAllArticles] = useState(false)

  const displayArticles = () => {
    setShowAllArticles(true)
  }

  const hideArticles = () => {
    setShowAllArticles(false)
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
            <NavLink to={'/news'}>
              <button className="btn-transparent">
                Browse Articles<i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </NavLink>
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
                    day={GetNewsDay(article.published)}
                    month={GetNewsMonth(article.published)}
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
                    day={GetNewsDay(article.published)}
                    month={GetNewsMonth(article.published)}
                  />
                </NavLink>
              )))
          }
          {showAllArticles 
            ? (<div className='btn-div'>
                <button onClick={hideArticles} className='btn-yellow' >Show Less</button>
              </div>)
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