import React            from 'react'
import Header           from '../../components/Header'
import ContactDetails   from './ContactDetails'
import MessageUs        from './MessageUs'
import MapSection       from './MapSection'
import Footer from '../../components/Footer'
import ContactSubpageHeader from './ContactSubpageHeader'

const Contact = () => {
  return (
    <>
      <header>
        <Header/>
        <ContactSubpageHeader/>
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