import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import './Services.css'; // Import your CSS file

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
      [section]: (prevState[section] + 1) % imagesLength,
    }));
  };

  // Effect for switching images when hovering
  useEffect(() => {
    let intervalId;
    const imageContainers = document.querySelectorAll('.b-image');

    imageContainers.forEach((imageContainer, index) => {
      const images = imageContainer.querySelectorAll('img');
      const section = `section${index + 1}`;
      imageContainer.addEventListener('mouseover', () => {
        intervalId = setInterval(() => {
          switchImage(section, images.length);
        }, 2500);
      });

      imageContainer.addEventListener('mouseout', () => {
        clearInterval(intervalId);
      });
    });

    return () => clearInterval(intervalId);
  }, []);

  // Render the Home component
  return (
    <Layout>
      <div className="main-container mt-10">

        <div className="top-container">
          <div className="left-section">
            <h1 style={{ fontSize: '65px', fontWeight: 'bold' }}>Our <br /> Services</h1>
          </div>
          <div className="right-section">
            <div className="curved-shape">
            Welcome to our full-service digital agency, where creativity meets technology to drive
                    your business forward. We specialize in a comprehensive range of services designed to
                    elevate your brand in the digital landscape. From Digital Marketing strategies like SEO,
                    PPC, and Social Media Marketing that increase your online visibility, to Creative Services
                    including Graphic Design, Logo Design, and Video Production that breathe life into your
                    brand identity. Our Web Development expertise ensures your online presence is not only
                    aesthetically pleasing but also functional, with offerings like Website Design, E-commerce
                    Solutions, and Web Analytics. Additionally, our Content Creation team crafts compelling
                    narratives through Blog Writing, Copywriting, and Video Scriptwriting, ensuring your message
                    resonates across all platforms. Partner with us to transform your ideas into impactful digital
                    experiences.
            </div>
          </div>
        </div>

        <div className="bottom-container">
          {/** Section 1 **/}
          <div className="bottom-section-1">
            <div className="bs1-left b-image" data-hover-text="Digital Marketing">
              <img src={`images/image1.png`} alt="pic 1" className="fixed-size-image" />
              <img src={`images/image11.webp`} alt="pic 2" className="fixed-size-image" style={{ display: imageIndex.section1 === 1 ? 'block' : 'none' }} />
              <img src={`images/image12.jpg`} alt="pic 3" className="fixed-size-image" style={{ display: imageIndex.section1 === 2 ? 'block' : 'none' }} />
              {/* Add more images as needed */}
            </div>
            <div className="bs1-right b-text">
              <h2 className='mt-10'>Digital Marketing :</h2>
              <pre>
                - SEO (Search Engine Optimization) <br />
                - PPC (Pay-Per-Click) Advertising <br />
                - Social Media Marketing <br />
                - Email Marketing <br />
                - Content Marketing
              </pre>
            </div>
          </div>

          {/** Section 2 **/}
          <div className="bottom-section-2">
            <div className="bs2-left b-text">
              <h2 className='mt-28'>Creative Services :</h2>
              <pre>
                - Graphic Design <br />
                - Logo Design <br />
                - Branding <br />
                - Video Production <br />
                - Photography
              </pre>
            </div>
            <div className="bs2-right b-image mt-0" data-hover-text="Creative Services">
              <img src={`./images/image2.avif`} alt="pic 1" className="fixed-size-image" />
              <img src={`images/image21.webp`} alt="pic 2" className="fixed-size-image" style={{ display: imageIndex.section2 === 1 ? 'block' : 'none' }} />
              {/* Add more images as needed */}
            </div>
          </div>

          {/** Section 3 **/}
          <div className="bottom-section-3">
            <div className="bs3-left b-image" data-hover-text="Web Development">
              <img src={`images/image3.png`} alt="pic 1" className="fixed-size-image" />
              <img src={`images/image31.png`} alt="pic 2" className="fixed-size-image" style={{ display: imageIndex.section3 === 1 ? 'block' : 'none' }} />
              {/* Add more images as needed */}
            </div>
            <div className="bs3-right b-text">
              <h2 className='mt-10'>Web Development :</h2>
              <pre>
                - Website Design <br />
                - Website Development <br />
                - E-commerce Solutions <br />
                - Web Maintenance <br />
                - Web Analytics
              </pre>
            </div>
          </div>

          {/** Section 4 **/}
          <div className="bottom-section-4">
            <div className="bs4-left b-text">
              <h2 className='mt-20'>Content Creation :</h2>
              <pre>
                - Blog Writing <br />
                - Copywriting <br />
                - Video Scriptwriting <br />
                - Social Media Content Creation <br />
                - Podcasting
              </pre>
            </div>
            <div className="bs4-right b-image" data-hover-text="Content Creation">
              <img src={`images/image4.png`} alt="pic 1" className="fixed-size-image" />
              <img src={`images/image41.png`} alt="pic 2" className="fixed-size-image" style={{ display: imageIndex.section4 === 1 ? 'block' : 'none' }} />
              {/* Add more images as needed */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
