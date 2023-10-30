import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ErrorPage from './ErrorPage'

const NotFound = () => {
  return (
    <div className='wrapper-grid'>

        <header>
          <Header />
        </header>

        <main>
            <ErrorPage/>
        </main>

        <Footer/>
    </div>



  )
}

export default NotFound