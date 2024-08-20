import React from 'react'
import Layout from '../../components/Layout'
import './about.css'



// Layout is the fixed component in our page so we have wrapped all the other function inside it.

  
function About() {
  
  return (
    <div class="about-page">
    <Layout>
      <section id="Heading">
        <div id="head">
          <h2><span>Wel</span>come to <span>L</span>EVEN <span>W</span>ORK</h2>

        </div>
      </section>
    <section>
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src="image/Img1.png" alt="Image 1" />
          </div>
          <div class="slide">
            <img src="image/Img2.png" alt="Image 2" />
          </div>
          <div class="slide">
            <img src="image/Img3.png" alt="Image 3" />
          </div>
          <div class="slide">
            <img src="image/Img1.png" alt="Image 1" />
          </div>
          <div class="slide">
            <img src="image/Img2.png" alt="Image 2" />
          </div>
          <div class="slide">
            <img src="image/Img3.png" alt="Image 3" />
          </div>
          <div class="slide">
            <img src="image/Img1.png" alt="Image 1" />
          </div>
          <div class="slide">
            <img src="image/Img2.png" alt="Image 2" />
          </div>
          <div class="slide">
            <img src="image/Img3.png" alt="Image 3" />
          </div>
        </div>
      </div>
    </section>
    <div>Abhay</div>
    <div>Abhay</div>
    <div>Abhay</div>
    <div>Abhay</div>
    <div>Abhay</div>
    <div>Abhay</div>
    <div>Abhay</div>
    <div>Abhay</div>
    <div>Abhay</div>
    <div>Abhay</div>
    <div>Abhay</div>
    </Layout>
    </div>
  )
}

export default About