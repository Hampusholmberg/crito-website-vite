import React from 'react'

const NewsArticle = ({title, content, author, published, category, imageUrl}) => {
  return (
    <section className="news-details">

      <div className="container">

        <div className="head">
          <h2>{title}</h2>
          <div>
            <p>{published}</p>
            <i className="fa-solid fa-circle"></i>
            <p>{category}</p>
            <i className="fa-solid fa-circle"></i>
            <p>{author}</p>
          </div>
        </div>

        <div className="content">
          <div className="left">
            <img src={imageUrl}/>
            <p>
              {content}
            </p>
            <p>
              Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
            </p>
            <p>
              Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
            </p>
            <div className="quote">
              <i className="fa-solid fa-quote-right"></i>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            </p>

            <div className="tags">
              <a href="#">Digitalization</a>
              <a href="#">School</a>
              <a href="#">IT</a>
              <a href="#">Design</a>
              <a href="#">Work</a>
              <a href="#">Tech</a>
            </div>

          </div>

          <div className="right">

            <form action="get"><i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Type to search..."/>
            </form>
  
            <div className="recent-posts">
              <h3>Recent Posts</h3>
                <a href="#">
                How To Blow Through Capital At An Incredible Rate
                <br/><span>Jan 14, 2020</span>
              </a>
              <a href="#">
                Design Studios That Everyone Should Know About?
                <br/><span>Jan 14, 2020</span>
              </a>
              <a href="#">
                How did we get 1M+ visitors in 30 days without anything!
                <br/><span>Jan 14, 2020</span>
              </a>
              <a href="#" className="last">
                Figma On Figma: How We Built Our Website Design System
                <br/><span>Jan 14, 2020</span>
              </a>
            </div>
  
            <div className="categories">
              <h3>Categories</h3>
              <a href="#">Technology - <span>20 Posts</span></a>
              <a href="#">Freelancing - <span>07 Posts</span></a>
              <a href="#">Writing - <span>16 Posts</span></a>
              <a href="#">Marketing - <span>11 Posts</span></a>
              <a href="#">Business - <span>35 Posts</span></a>
              <a href="#">Education - <span>14 Posts</span></a>
            </div>  
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsArticle