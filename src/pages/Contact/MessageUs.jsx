import React from 'react'

const MessageUs = () => {
  return (
    <section class="message-us">
        <div class="container">

        <form method="post" class="content-box">

            <h2>Leave us a message<br/>for any information</h2>
            <input name="c-name" id="c-name" type="text" placeholder="Name*" required/>
            <input name="c-email" id="c-email" type="email" placeholder="Email*" required/>
            <textarea name="c-message" id="c-message" placeholder="Your Message*" required></textarea>

            <button class="btn-yellow" action="submit">
            Send Message<i class="fa-solid fa-arrow-up-right-from-square"></i>
            </button>

        </form>

        </div>
    </section>
  )
}

export default MessageUs