import React from "react";
import Layout from "../../components/Layout";
import "./about.css";

import ExpertLayout from "../../components/ExpertLayout";
import Footer from "../../components/Footer";
// Layout is the fixed component in our page so we have wrapped all the other function inside it.

function About() {
  return (
    <div class="about-page">
      <Layout></Layout>
      
      {/* Herre this color can also be used as the bg 5F8670 */}
      <div class="middle" className=" text-[#fff] font-semibold justify-center pt-24 bg-[#219C90] align-middle ">
        <h1 className="text-6xl text-[#FFF455] justify-center text-center pb-14 font-semibold">
          
          LevenWork: Your Marketing Mavericks
        </h1>

        <div class="para" className="text-[backcolor] text-[20px] p-5 text-2xl justify-center align-middle text-center">
          <p className="text-2xl">
            We're <b className="text-[#000] text-[28px]">Marketing Mavericks </b>, a fearless squad of creative
            strategists redefining the marketing landscape. With a perfect blend
            of artistry and analytics, we craft campaigns that captivate,
            convert, and create lasting impact.
          </p>
          <br />

          <p className="text-2xl">
            <b className="text-[#000] text-[28px]" >Our expertise is your advantage. </b> We delve deep into your
            brand, understanding its essence to develop strategies that resonate
            with your target audience. From crafting compelling narratives to
            executing flawless campaigns, we've got you covered.
          </p>
          <br />

          <p className="text-2xl">
            <b className="text-[#000] text-[28px] font-bold">We're not just trendsetters; we're game-changers. </b> Our
            passion for innovation drives us to explore uncharted territories
            and deliver groundbreaking solutions.
          </p>
        </div>
      </div>
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
      <div className="faqs w-fulls bg-gray-800  align-middle justify-center p-10 text-2xl text-[#ffffff] rounded-3xl m-10">
        <h3 className="text-5xl justify-center ml-[300px] text-[#A1DD70]">
          Mind Blowing Facts About Us🤯
        </h3>
        <details className="">
          <summary className="text-[#00FFFF]">How to Reach Us?</summary>
          <div className="ml-10">
            You won't <em>be-leaf</em> it's soo <strong>easy</strong>. Just go
            to Contact Page , Fill <em>Details & sit & relax</em> like{" "}
            <em>PANDA</em>😁 and we will reach You..
            <br/>
            <br/>
            <img
              className="w-60 h-60 ml-96 border-4 rounded-xl"
              src="https://images.pexels.com/photos/5504764/pexels-photo-5504764.jpeg?auto=compress&cs=tinysrgb&w=600"
              ></img>
              <br/>
              
          </div>
        </details>
        <details className="">
          <summary className="text-[#00FFFF]">How expert😎 we are at our work?</summary>
          <div className="ml-10 pt-2">
            Totally <strong>Great!</strong> As Like the{" "}
            <strong>Panda Climbing Tree</strong>
            <br/>
            <br/>
            <img
              className="w-60 h-50 ml-96 border-4 rounded-xl"
              src="https://images.pexels.com/photos/8788326/pexels-photo-8788326.jpeg?auto=compress&cs=tinysrgb&w=600"
              ></img>
              <br/>
              
          </div>
        </details>
        <details>
          <summary className="text-[#00FFFF]">
            Should we need to care once we give marketing to You?😱
          </summary>
          <div className="ml-10">
            A BIG <strong>NOOOOOOOOO....</strong>
            <br />
            Just take a <em>Chill Pill</em> Like this <em>Panda</em>😁 and rest
            we will <strong>MANAGE</strong>
            <br/>
            <br/>
            <img
              className="w-60 h-50 ml-96 border-4 rounded-xl"
              src="https://cdn.pixabay.com/photo/2024/08/16/04/35/ai-generated-8972652_1280.jpg"
              alt="Cute Panda"
              ></img>
              <br/>
              
          </div>
        </details>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About;
