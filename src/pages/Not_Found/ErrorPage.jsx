import React from 'react'
import {NavLink} from 'react-router-dom'

const ErrorPage = () => {
  return (
    
    <section className='error-page container'>
        <h2>
            404- Page not Found
        </h2>

        <NavLink to='/'>
            Home
        </NavLink>
    </section>

  )
}

export default ErrorPage