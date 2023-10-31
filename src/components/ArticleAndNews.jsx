import React from 'react'
import article_news1 from '../assets/images/article-news1.png'
import article_news2 from '../assets/images/article-news2.png'
import article_news3 from '../assets/images/article-news3.png'
import ArticleBox from './ArticleBox'

const ArticleAndNews = ({className}) => {

  const articles = [
    {category: "Business", url: "/newsDetails", image: article_news1, alt: "A picture of a woman sitting in a className room.", day: "25", month: "Mar",  
    title: "How To Use Digitalization In The classNameroom", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},

    {category: "Business", url: "/newsDetails", image: article_news2, alt: "A picture of a woman sitting in a className room.", day: "25", month: "Mar",  
    title: "How To Use Digitalization In The classNameroom", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},

    {category: "Business", url: "/newsDetails", image: article_news3, alt: "A picture of a woman sitting in a className room.", day: "25", month: "Mar",  
    title: "How To Use Digitalization In The classNameroom", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
  ]
  
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
          {articles.map((article, index) => (
              <ArticleBox key={index} category={article.category} image={article.image} alt={article.alt} day={article.day} 
              month={article.month} title={article.title} description={article.description} url={article.url}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArticleAndNews