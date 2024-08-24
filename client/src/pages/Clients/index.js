import React from 'react';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import './Clients.css'; // Make sure the CSS file is in the correct path

function Clients() {
  return (
    <div className='main-container'>
      <Layout>
        <div className="heading-container bg-[#f51e1e]">
          <h1 id="mainheading" >Our Clients</h1>
          <img src="images/img1.png" alt="Client Image" />
        </div>

        <div className="content ">
          <br />
          <h1 style={{ textDecoration: 'underline', textDecorationThickness: '1px' }} className='text-4xl'>"Your Vision, Our Mission"</h1>
          <br />
          <p style={{ fontSize: '20px' }}> "Welcome to <b>Leven Work!</b>"</p>
          <br />
          <h2 className='text-xl'>"Partnering with us will propel your brand to its peak potential and set new standards of Excellence."</h2>
          <br />
          <p>
            <b style={{ color: 'aqua' }}className='text-3xl'>Ready to unleash your brand's full potential?</b> Let's embark on this exciting
            journey together.
          </p>
          <br />
          <div className=''>
          <img id="image" className='justify-center' src="images/handshake.png" style={{ width: '600px', height: '400px' }} alt="Handshake" />
          </div>
          <br /><br />
          <p>
            {`We're excited to work with forward-thinking businesses
            to elevate their digital presence. While we're a new agency, our team is equipped with the skills,
            creativity, and passion to deliver outstanding results.`}
          </p>
          <p style={{ fontSize: '20px', color: 'aqua' }}><b>Want to see the Minds Behind Your Success...</b></p>
          <br />
          <button id="team" style={{ fontSize: '20px' }} onClick={() => window.location.href = "/team"}><b>See Brilliant Minds</b></button>
          <br /><br />

          <div className="only-images flex">
            <div className="image-row">
              <img src="images/grp1.png" alt="Image 1" className="imgdiv" />
              <img src="images/grp2.png" alt="Image 2" className="imgdiv" />
            </div>
            <div className="image-row">
              <img src="images/grp3.png" alt="Image 3" className="imgdiv" />
              <img src="images/grp4.png" alt="Image 4" className="imgdiv" />
            </div>
          </div>
          <br /><br /><br />
          <div className='bg-slate-800 px-0 pt-20 pb-5 rounded-full'>
          <p  style={{ color: 'aqua', fontSize: '20px' }}><b>Are You Ready to Take Your Brand to New Heights....!!! If Yes Then <a className='font-bold bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]  transition-all  border-solid border-4 border-gray-100 p-2 rounded-full text-black' href='/contact'>Join Us</a></b></p>
          <br /><br />
          <h2 className='text-xl'>We Will be happy to be part of one more success story.</h2>
          </div>
          <br /><br />
          <div className='bg-[#284b63] rounded-full py-5'>
          <p>{`At Leven Work,
            our team is a dynamic group of passionate strategists, creative thinkers, and tech enthusiasts 
            dedicated to making your brand shine. Each member brings unique skills and experience, 
            all united by a shared goal: to elevate your business and drive lasting impact.`}
          </p>
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
}

export default Clients;
