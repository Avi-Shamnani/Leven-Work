import React from 'react'
import Layout from '../../components/Layout'
// import Footer from '../../components/Footer'

// Getting the Footer File
import Footer from '../../components/Footer'

// Layout is the fixed component in our page so we have wrapped all the other function inside it.

function Clients() {
  return (
    <div className='clients-page'>
    <Layout><div>Clients</div></Layout>
    <Footer></Footer>
    </div>
  )
}

export default Clients