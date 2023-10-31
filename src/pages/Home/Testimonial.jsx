import React from 'react'
import ReviewBox from '../../components/ReviewBox'

import cassandra_warren2  from '../../assets/images/Cassandra-Warren2.png'
import amanda_tulling2    from '../../assets/images/Amanda-Tulling2.png'
import jack_mcDogglas2    from '../../assets/images/Jack-McDogglas2.png'

const Testimonial = () => {

  const reviews = [
    {type: "content-box first", image: cassandra_warren2, alt: "A portrait photograph of a woman.", name: "Cassandra Warren", title: "Business Manager, Dorfus", 
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"},

    {type: "content-box", image: amanda_tulling2, alt: "A portrait photograph of a woman.", name: "Amanda Tulling", title: "Senior Developer, Square", 
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"},

    {type: "content-box", image: jack_mcDogglas2, alt: "A portrait photograph of a man.", name: "Jack McDogglas", title: "Key Account Manager, Gobona", 
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"},
  ]

  return (
    <section className="testimonial">
    <div className="wrapper">
      <div className="container">
        <div className="head">
          <p>Testimonial</p>
          <h2>What Our Client Says</h2>
        </div>
        <div className="content-wrapper">
          {reviews.map((review, index) => (
              <ReviewBox key={index} type={review.type} image={review.image} alt={review.alt} name={review.name} title={review.title} review={review.review}/>
          ))}
        </div>
        <div className="button">
          <button className="btn-black">All Reviews<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Testimonial