import React            from 'react'
import Header           from '../../components/Header'
import ContactDetails   from './ContactDetails'
import MessageUs        from './MessageUs'
import MapSection       from './MapSection'
import Footer from '../../components/Footer'

const Contact = () => {
  return (
    <>
      <header>
        <Header/>
      </header>

      <main>
        <ContactDetails/>
        <MessageUs/>
        <MapSection/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>

  )
}

export default Contact