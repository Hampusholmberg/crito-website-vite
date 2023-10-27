import React from 'react'
import background_wavy_lines from '../assets/images/background-wavy-lines.svg'

const GetNews = () => {
  return (
    <section className="get-news">
    <img src={background_wavy_lines} alt="Decorative background lines."/>
    <div className="container">

      <h2>Get News Updates By Signup</h2>

      <form method="post" name="newsletter-email">

        <input type="email" placeholder="username@domain.com" name="newsletter-email" required/>

        <button className="btn-yellow" action="submit">
          Subscribe<i className="fa-solid fa-arrow-up-right-from-square"></i>
        </button>

      </form>

    </div>
  </section>
  )
}

export default GetNews