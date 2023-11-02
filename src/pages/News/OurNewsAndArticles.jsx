import React, { useState, useEffect } from 'react'
import ArticleBox from '../../components/ArticleBox'
import { Link } from 'react-router-dom'


const OurNewsAndArticles = () => {

  const [articles, setArticles] = useState([])

  const getArticles = async () => {
    const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')

    if(!result.ok)
      console.log('error')
    else
      setArticles(await result.json())
  }

  useEffect(() => {
    getArticles()
  }, [] )

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
              <Link to={`/news/${article.id}`} key={article.id}>
                <ArticleBox title={article.title} description={article.content} 
                category={article.category} image={article.imageUrl}/>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OurNewsAndArticles