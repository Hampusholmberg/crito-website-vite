import React from 'react'
import article_news1 from '../../assets/images/article-news1.png'
import article_news2 from '../../assets/images/article-news2.png'
import article_news3 from '../../assets/images/article-news3.png'
import article_news4 from '../../assets/images/article-news4.png'
import article_news5 from '../../assets/images/article-news5.png'
import article_news6 from '../../assets/images/article-news6.png'
import article_news7 from '../../assets/images/article-news7.png'
import article_news8 from '../../assets/images/article-news8.png'
import article_news9 from '../../assets/images/article-news9.png'

import ArticleBox from '../../components/ArticleBox'
import Header from '../../components/Header'

const OurNewsAndArticles = () => {

  const articles = [
    {image: article_news1, alt: "A picture of a woman sitting in a class room.", day: "25", month: "Mar",  
    title: "How To Use Digitalization In The classNameroom", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},

    {image: article_news2, alt: "An image of the first page of ChatGPT.", day: "17", month: "Mar",  
    title: "How To Implement ChatGPT In Your Projects", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},

    {image: article_news3, alt: "A photograph of books about programming stacked on top of each other.", day: "13", month: "Mar",  
    title: "The Guide To Support Modern CSS Design", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},

    {image: article_news4, alt: "A picture of people sitting down taking notes from what looks like a seminar.", day: "12", month: "Mar",  
    title: "Why You Need To Implement The Five S's", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},

    {image: article_news5, alt: "A photograph of an office landscape.", day: "07", month: "Mar",  
    title: "Get More Involved With Your End Users", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},

    {image: article_news6, alt: "A photograph of modern looking office landscape.", day: "02", month: "Mar",  
    title: "Guided Tour Of Our New Head Office In Stockholm", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},

    {image: article_news7, alt: "A photograph of a laptop with business intelligence software running.", day: "28", month: "Feb",  
    title: "Using Business Intelligence To Get Insights Into Our Businesses", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},

    {image: article_news8, alt: "A picture of apple products in rose gold.", day: "18", month: "Feb",  
    title: "Apple Has Released New Products. Are They Any Good?", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},

    {image: article_news9, alt: "A photograph of an open notebook and some office supplies.", day: "11", month: "Feb",  
    title: "How To Improve Your Teams And Get A Better Result", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
  ]

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
            {articles.map((article, index) => (
              <ArticleBox key={index} image={article.image} alt={article.alt} day={article.day}
              month={article.month} title={article.title} description={article.description} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OurNewsAndArticles