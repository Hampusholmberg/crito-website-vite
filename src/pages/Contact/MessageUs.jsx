import React, { useState } from 'react'
import ValidateName     from '../../components/functions/ValidateName'
import ValidateEmail    from '../../components/functions/ValidateEmail'
import ValidateMessage  from '../../components/functions/ValidateMessage'


const MessageUs = () => {
  const apiUrl = 'https://win23-assignment.azurewebsites.net/api/contactform'

  const [name, setName] = useState("")
  const [nameError, setNameError] = useState(false)
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [message, setMessage] = useState("")
  const [messageError, setMessageError] = useState(false)

  const submitForm = async (e) => {
    e.preventDefault()
    const messageForm = {name, email, message}
    let validatedInputs = 0

    ValidateName(name)
      if (!ValidateName(name)) {
        setNameError(true)
        setName("")
      } else {
        setNameError(false)
        validatedInputs++
      }

    ValidateEmail(email)
      if (!ValidateEmail(email)) {
        setEmailError(true)
        setEmail("")
      } else {
        setEmailError(false)
        validatedInputs++
      }

    ValidateMessage(message)
      if (!ValidateMessage(message)) {
        setMessageError(true)
        setMessage("")
      } else {
        setMessageError(false)
        validatedInputs++
      }

    if (validatedInputs === 3) {

      const json = JSON.stringify(messageForm)

      const result = await fetch(apiUrl, {
        method: "POST", 
        headers: {
          'content-type': 'application/json'
        },
        body: json        
      })
      if (result.ok) {
        setName(""), setEmail(""), setMessage("")
        alert("Message has been sent.")
      } else
        alert("There was an error, your message has not been sent.")
    }
  }

  return (
    <section className="message-us">
      <div className="container">
        <form className="content-box" noValidate onSubmit={submitForm}>
          <h2>Leave us a message<br/>for any information</h2>
          <input 
            className={nameError ? 'error' : ''}
            type="text" 
            placeholder={nameError ? 'Please enter your name' : 'Name*'}
            onChange={(e) => {setName(e.target.value)}}
            value={name}
            required/>
          <input 
            className={emailError ? 'error' : ''}
            type="email" 
            placeholder={emailError ? 'Please enter a valid email address' : 'Email*'}
            onChange={(e) => {setEmail(e.target.value)}}
            value={email}
            required/>
          <textarea 
            className={messageError ? 'error' : ''}
            placeholder={messageError ? 'Please write a message' : 'Your Message*'}
            id="c-message" 
            onChange={(e) => {setMessage(e.target.value)}} 
            value={message}
            required>
          </textarea>
          <button            
            className="btn-yellow" 
            action="submit">
            Send Message<i className="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </form>
      </div>
    </section>
  )
}

export default MessageUs