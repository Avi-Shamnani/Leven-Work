import React from 'react'
import Layout from '../../components/Layout'
import './about.css'

import ExpertLayout from '../../components/ExpertLayout'
import Footer from '../../components/Footer'
// Layout is the fixed component in our page so we have wrapped all the other function inside it.

  
function About() {
  
  return (
    <div class="about-page">
    <Layout>
    </Layout>
      <section id="Heading">
        <div  id="head">
          <h2 className='text-6xl pt-14' ><span>Wel</span>come to <span>L</span>EVEN <span>W</span>ORK</h2>

        </div>
      </section>
    <section>
      <div class="slider">
        <div class="slide-track" >
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
    <div className='faqs w-fulls bg-gray-800  align-middle justify-center p-5 text-2xl rounded-3xl m-10' >
      <h3 className='text-5xl justify-center ml-[300px]'>Mind Blowing Facts About Us🤯</h3>
      <details className=''><summary>How to Reach Us?</summary><div className='ml-10'>You won't <em>be-leaf</em> it's soo <strong>easy</strong>. Just go to Contact Page , Fill <em>Details & sit & relax</em> like <em>PANDA</em>😁 and we will reach You.. 
      <img className='w-60 h-60 ml-32' src="https://images.pexels.com/photos/5504764/pexels-photo-5504764.jpeg?auto=compress&cs=tinysrgb&w=600"></img></div></details>
      <details className=''><summary>How expert😎 we are at our work?</summary><div className='ml-10 pt-2'>Totally <strong>Great!</strong> As Like the <strong>Panda Climbing Tree</strong> 
      <img className='w-60 h-50 ml-32' src='https://images.pexels.com/photos/8788326/pexels-photo-8788326.jpeg?auto=compress&cs=tinysrgb&w=600'></img></div></details>
      <details><summary>Should we need to care once we give marketing to You?😱</summary>
      <div className='ml-10'>A BIG <strong>NOOOOOOOOO....</strong><br/>
      Just take a <em>Chill Pill</em> Like this <em>Panda</em>😁 and rest we will <strong>MANAGE</strong>
      <img className='w-60 h-50 ml-32' src='https://cdn.pixabay.com/photo/2024/08/16/04/35/ai-generated-8972652_1280.jpg' alt='Cute Panda'></img></div></details>
      
    </div>
    <Footer></Footer>
    </div>
  )
}

export default About