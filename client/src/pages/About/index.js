import React from "react";
import Layout from "../../components/Layout";
import ExpertLayout from "../../components/ExpertLayout";
import Footer from "../../components/Footer";
import "./about.css";


// Layout is the fixed component in our page so we have wrapped all the other functions inside it.

function About() {
  
  return (
    <div className="about-page">
      <Layout />
      <div className="top"></div>
      
      {/* Herre this color can also be used as the bg 5F8670 */}
      <div className="middle text-[#000] font-semibold justify-center pt-24 align-middle mb-0 pb-0">
        <h1 className="text-6xl text-[#0b7676] justify-center text-center pb-0 font-semibold">
          LevenWork: Your Marketing Mavericks
        </h1>

        <div className="para text-[backcolor] text-[20px] p-5 text-2xl justify-center align-middle text-center">
          <p>
            We're <b className="text-[#0b7676] text-[28px]">Marketing Mavericks</b>, a fearless squad of creative
            strategists redefining the marketing landscape. With a perfect blend
            of artistry and analytics, we craft campaigns that captivate,
            convert, and create lasting impact.
          </p>
          <br />

          <p>
            <b className="text-[#0b7676] text-[28px]">Our expertise is your advantage.</b> We delve deep into your
            brand, understanding its essence to develop strategies that resonate
            with your target audience. From crafting compelling narratives to
            executing flawless campaigns, we've got you covered.
          </p>
          <br />

          <p>
            <b className="text-[#0b7676] text-[28px]">We're not just trendsetters; we're game-changers.</b> Our
            passion for innovation drives us to explore uncharted territories
            and deliver groundbreaking solutions.
          </p>
        </div>
      </div>

      

      <section className="bg-gradient-to-r from-[#d1f3f4] via-[#a4ecf1] to-[#66d5f7]">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src="image/Img1.png" alt="Image 1" />
            </div>
            <div className="slide">
              <img src="image/Img2.png" alt="Image 2" />
            </div>
            <div className="slide">
              <img src="image/Img3.png" alt="Image 3" />
            </div>
            <div className="slide">
              <img src="image/Img1.png" alt="Image 1" />
            </div>
            <div className="slide">
              <img src="image/Img2.png" alt="Image 2" />
            </div>
            <div className="slide">
              <img src="image/Img3.png" alt="Image 3" />
            </div>
            <div className="slide">
              <img src="image/Img1.png" alt="Image 1" />
            </div>
            <div className="slide">
              <img src="image/Img2.png" alt="Image 2" />
            </div>
            <div className="slide">
              <img src="image/Img3.png" alt="Image 3" />
            </div>
          </div>
        </div>
      </section>

      <div className="faqs w-fulls align-middle justify-center p-10 text-2xl text-[#000] rounded-3xl m-10">
        <h3 className="text-5xl justify-center ml-[300px] text-[#0b7676]">
          Mind Blowing Facts About Us🤯
        </h3>
        <details>
          <summary className="text-[#000]">How to Reach Us?</summary>
          <div className="ml-10">
            You won't <em>be-leaf</em> it's soo <strong>easy</strong>. Just go
            to Contact Page, fill in the <em>Details & sit & relax</em> like{" "}
            <em>PANDA</em>😁 and we will reach You..
            <br />
            <br />
            <img
              className="w-60 h-60 ml-96 border-4 rounded-xl"
              src="./images/pandaEat.gif"
              alt="Panda Eating"
            />
            <br />
          </div>
        </details>
        <details>
          <summary className="text-[#000]">How expert😎 we are at our work?</summary>
          <div className="ml-10 pt-2">
            Totally <strong>Great!</strong> As Like the{" "}
            <strong>Panda Climbing Tree</strong>
            <br />
            <br />
            <img
              className="w-60 h-50 ml-96 border-4 rounded-xl"
              src="./images/panda-hye.gif"
              alt="Panda Climbing"
            />
            <br />
          </div>
        </details>
        <details>
          <summary className="text-[#000]">
            Should we need to care once we give marketing to You?😱
          </summary>
          <div className="ml-10">
            A BIG <strong>NOOOOOOOOO....</strong>
            <br />
            Just take a <em>Chill Pill</em> Like this <em>Panda</em>😁 and rest
            we will <strong>MANAGE</strong>
            <br />
            <br />
            <img
              className="w-60 h-50 ml-96 border-4 rounded-xl"
              src="./images/panda.gif"
              alt="Cute Panda"
            />
            <br />
          </div>
        </details>
      </div>

      <Footer />
    </div>
  );
}

export default About;
