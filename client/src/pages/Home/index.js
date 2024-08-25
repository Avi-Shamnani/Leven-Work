import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';

import Footer from '../../components/Footer';
import './Services.css'; // Import your CSS file

// Importing the Expert Layout
import ExpertLayout from '../../components/ExpertLayout';

// Define the Home component
function Home() {
  // Define the initial state for image index for each section
  const [imageIndex, setImageIndex] = useState({
    section1: 0,
    section2: 0,
    section3: 0,
    section4: 0,
  });

  // Function to handle image switching
  const switchImage = (section, imagesLength) => {
    setImageIndex(prevState => ({
      ...prevState,
      [section]: prevState[section] + 1 >= imagesLength ? 0 : prevState[section] + 1,
    }));
  };

  // Effect for switching images when hovering
  useEffect(() => {
    const imageContainers = document.querySelectorAll('.b-image');

    imageContainers.forEach((imageContainer, index) => {
      const images = imageContainer.querySelectorAll('img');
      const section = `section${index + 1}`;

      let hoverCount = 0;

      imageContainer.addEventListener('mouseover', () => {
        hoverCount++;
        switchImage(section, images.length);
      });
    });
  }, []);

  // Render the Home component
  return (<>
    <Layout>
    </Layout>
      <div className="main-container mt-10 h-fit">

        <div className="top-container ">
          <div className="left-section">
            <h1 style={{ fontSize: '65px', fontWeight: 'bold' , color : '#0b7676' }}>Our <br /> Ser<span class="black">vi</span>ces</h1>
          </div>
          <div className="right-section">
            <div className="curved-shape " style={{fontSize: '20px'}}>
            Welcome to our <b style={{fontSize : '25px'}}>digital agency</b>, where innovation meets execution to elevate your brand. 
                    We craft impactful strategies, stunning visuals, and seamless online experiences that resonate. 
                    Partner with us to turn your vision into powerful digital realities.
            </div>
          </div>
        </div>

        <div className="bottom-container">
          {/** Section 1 **/}
          <div className="bottom-section-1">
            <div className="bs1-left b-image" data-hover-text="Digital Marketing">
              <img src={`images/image1.jpg`} alt="pic 1" className="fixed-size-image" />
              <img src={`images/image11.jpg`} alt="pic 2" className="fixed-size-image" style={{ display: imageIndex.section1 === 1 ? 'block' : 'none' }} />
              <img src={`images/image12.avif`} alt="pic 3" className="fixed-size-image" style={{ display: imageIndex.section1 === 2 ? 'block' : 'none' }} />
              {/* Add more images as needed */}
            </div>
            <div className="bs1-right b-text">
              <h2 className="mt-10" style={{ fontSize: '35px', fontWeight: 'bold', color: '#000' }}>Digital Marketing :</h2>
              <pre >
                - SEO (Search Engine Optimization) <br />
                - PPC (Pay-Per-Click) Advertising <br />
                - Social Media Marketing <br />
                - Email Marketing <br />
                - Content Marketing <br />
                - Influencer Marketing <br />
                - PR Marketing
              </pre>
            </div>
          </div>

          {/** Section 2 **/}
          <div className="bottom-section-2">
            <div className="bs2-left b-text">
              <h2 className="mt-10" style={{ fontSize: '35px', fontWeight: 'bold' , color: '#000' }}>Creative Services :</h2>
              <pre>
                - Graphic Design <br />
                - Logo Design <br />
                - Branding <br />
                - Video Production <br />
                - Photography
              </pre>
            </div>
            <div className="bs2-right b-image" data-hover-text="Creative Services">
              <img src={`./images/grp1.png`} alt="pic 1" className="fixed-size-image" />
              <img src={`./images/image21.webp`} alt="pic 2" className="fixed-size-image" style={{ display: imageIndex.section2 === 1 ? 'block' : 'none' }} />
              <img src={`./images/image22.png`} alt="pic 3" className="fixed-size-image" style={{ display: imageIndex.section2 === 2 ? 'block' : 'none' }} />
              <img src={`./images/image23.jpg`} alt="pic 4" className="fixed-size-image" style={{ display: imageIndex.section2 === 3 ? 'block' : 'none' }} />
              <img src={`./images/image24.jpg`} alt="pic 5" className="fixed-size-image" style={{ display: imageIndex.section2 === 4 ? 'block' : 'none' }} />
              {/* Add more images as needed */}
            </div>
          </div>

          {/** Section 3 **/}
          <div className="bottom-section-3" >
            <div className="bs3-left b-image" data-hover-text="Web Development">
              <img src={`./images/image3.jpg`} alt="pic 1" className="fixed-size-image" />
              <img src={`./images/image31.png`} alt="pic 2" className="fixed-size-image" style={{ display: imageIndex.section3 === 1 ? 'block' : 'none' }} />
              <img src={`./images/image32.png`} alt="pic 3" className="fixed-size-image" style={{ display: imageIndex.section2 === 2 ? 'block' : 'none' }} />
              <img src={`./images/image33.jpg`} alt="pic 4" className="fixed-size-image" style={{ display: imageIndex.section2 === 3 ? 'block' : 'none' }} />
              {/* Add more images as needed */}
            </div>
            <div className="bs3-right b-text">
              <h2 className="mt-10" style={{ fontSize: '35px', fontWeight: 'bold', color: '#000' }}>Web Development :</h2>
              <pre >
                - Website Design <br />
                - Website Development <br />
                - E-commerce Solutions <br />
                - Web Maintenance <br />
                - Web Analytics
              </pre>
            </div>
          </div>

          {/** Section 4 **/}
          <div className="bottom-section-4 ">
            <div className="bs4-left b-text">
              <h2 className="mt-10" style={{ fontSize: '35px', fontWeight: 'bold', color: '#000' }}>Content Creation :</h2>
              <pre >
                - Blog Writing <br />
                - Copywriting <br />
                - Video Scriptwriting <br />
                - Social Media Content Creation <br />
                - Podcasting

              </pre>
            </div>
            <div className="bs4-right b-image " data-hover-text="Content Creation">
              <img src={`./images/image41.jpg`} alt="pic 1" className="fixed-size-image" />
              <img src={`./images/image4.png`} alt="pic 2" className="fixed-size-image" style={{ display: imageIndex.section4 === 1 ? 'block' : 'none' }} />
              <img src={`./images/e-commerce.jpg`} alt="pic 3" className="fixed-size-image" style={{ display: imageIndex.section4 === 2 ? 'block' : 'none' }} />
              {/* Add more images as needed */}
            </div>
          </div>
        </div>     {/* DIV OF BOTTOM CONTAINER*/}
      </div>      {/* DIV OF MAIN-CONTAINER*/}
    <ExpertLayout></ExpertLayout>
    <Footer></Footer>
    </>
  );
}

export default Home;
