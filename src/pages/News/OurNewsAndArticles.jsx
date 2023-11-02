import React, { useState, useEffect } from 'react'
import ArticleBox from '../../components/ArticleBox'
import { Link, NavLink } from 'react-router-dom'


const OurNewsAndArticles = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {

    const getArticles = async () => {

      const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
      setArticles(await result.json())
    }

    getArticles()
  }, [] )

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  } 

  return (
    <>
      <section className="our-news-and-articles">
        <div className="container">
          <div className="head">
            <div className="left">
              <h2>Our News & Articles</h2>
            </div>
          </div>
          <div className="content-wrapper">
            {articles.map((article) => (
              <Link onClick={scrollToTop} to={`${article.id}`} key={article.id}>
                <ArticleBox
                  title={article.title} 
                  description={article.content} 
                  category={article.category} 
                  image={article.imageUrl}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OurNewsAndArticles