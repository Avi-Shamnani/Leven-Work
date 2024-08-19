import React from 'react'
import Layout from '../../components/Layout'
import ExpertLayout from '../../components/ExpertLayout'
import Footer from '../../components/Footer'
// Layout is the fixed component in our page so we have wrapped all the other function inside it.

  
function About() {
  return (
    <div>
    <Layout><div>About</div>
    <ExpertLayout></ExpertLayout></Layout>
    <Footer></Footer>
    </div>
  )
}

export default About