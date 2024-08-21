import React, { useState, useEffect } from "react";
import "./footer1.css"; // Import the CSS file
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      setIsFooterVisible(scrollPosition + clientHeight >= pageHeight);
      console.log("isFooterVisible:", isFooterVisible); // Added line
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="body">
      
      <footer >
        
          <div id="row">
            <div id="col" className="flex flex-col justify-between space-between align-middle">
              <img src={logo} alt="Company Logo" className="logo " />
              <h2 >Leven Work</h2>
              <br></br>
              <p className="ml-0 justify-center">
                {/* Thanks for being part of our online community! We're dedicated
                to providing valuable insights, resources, and expertise to help
                you navigate the world of digital marketing, and we're always
                here to help you achieve your online goals and objectives. */}
                Great job reaching the end of the page! You've just taken another big step towards unlocking the full potential of your business .

              </p>
            </div>
            <div id="col">
              <div id="contact-info">
                <h3>Contact Us</h3>
                <ul>
                <li><ion-icon name="call-outline"></ion-icon>Phone : 123434224</li>
                <li><ion-icon name="mail-outline"></ion-icon>Email :example@gmail.com</li>
                </ul>
              </div>
            </div>
            <div id="col">
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Missions</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div id="col" className=
            "social-icons-container">
                <div id="social_icons">
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href="#" title="Facebook"><ion-icon name="logo-facebook"></ion-icon></a></li>
                        <li><a href="#" title="Twitter"><ion-icon name="logo-twitter"></ion-icon></a></li>
                        <li><a href="#" title="Instagram"><ion-icon name="logo-instagram"></ion-icon></a></li>
                        <li><a href="#" title="GitHub"><ion-icon name="logo-github"></ion-icon></a></li>
                        <li><a href="#" title="LinkedIn"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                    </ul>
                </div>
            </div>
          </div>
     

        <a href="#" id="back-to-top" onClick={backToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
        <hr />
        <div id="copyright">
          &copy; 2024 LEVEN WORK. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
