import ArticleBox from '../../components/ArticleBox'
import { Link } from 'react-router-dom'
import GetNewsDay from '../../components/functions/GetNewsDay'
import GetNewsMonth from '../../components/functions/GetNewsMonth'
import { useArticles } from '../../contexts/ArticleContext'


const OurNewsAndArticles = () => {

  const {articles} = useArticles()

  return (
    <section className="our-news-and-articles">
      <div className="container">
        <div className="head">
          <div className="left">
            <h2>Our News & Articles</h2>
          </div>
        </div>
        <div className="content-wrapper">
          {articles.map((article) => (
            <Link to={`${article.id}`} key={article.id}>
              <ArticleBox
                title={article.title} 
                description={article.content} 
                category={article.category} 
                image={article.imageUrl}
                day={GetNewsDay(article.published)}
                month={GetNewsMonth(article.published)}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurNewsAndArticles