import React from 'react'
import {useNavigate} from 'react-router-dom'

const ErrorPage = () => {

  const navigate = useNavigate();

  return (
    <section className='error-page container'>
      <div>
        <h2>
          404- Page not Found 
        </h2>
        <i className="fa-solid fa-face-frown"/>
      </div>
        <button onClick={() => navigate(-1)} className='btn btn-yellow'>
          Go Back
        </button>
    </section>
  )
}

export default ErrorPage