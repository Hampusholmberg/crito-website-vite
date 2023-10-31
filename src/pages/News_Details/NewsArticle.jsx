import React from 'react'
import news_details_img from '../../assets/images/news-details.png'

const NewsArticle = () => {
  return (
    <section class="news-details">

      <div class="container">

        <div class="head">

          <h2>How To Use Digitalization <br/>In The Classroom</h2>
  
          <div>
            <p>Mar 25, 2023</p>
            <i class="fa-solid fa-circle"></i>
            <p>Business</p>
            <i class="fa-solid fa-circle"></i>
            <p>Kimberly Hansen</p>
          </div>
  
        </div>

        <div class="content">
          <div class="left">

            <img src={news_details_img} alt="A picture of a woman sitting in a class room."/>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
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

            <div class="quote">
              <i class="fa-solid fa-quote-right"></i>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
              </p>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            </p>

            <div class="tags">
              <a href="#">Digitalization</a>
              <a href="#">School</a>
              <a href="#">IT</a>
              <a href="#">Design</a>
              <a href="#">Work</a>
              <a href="#">Tech</a>
            </div>

          </div>

          <div class="right">

            <form action="get"><i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Type to search..."/>
            </form>
  
            <div class="recent-posts">
  
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
  
              <a href="#" class="last">
                Figma On Figma: How We Built Our Website Design System
                <br/><span>Jan 14, 2020</span>
              </a>
  
            </div>
  
            <div class="categories">
  
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