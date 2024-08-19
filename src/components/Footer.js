import React from 'react';
import './footer1.css'; // Import the CSS file
import logo from './Colorful_Abstract_Infinity_Technology_Free_Logo-removebg-preview.png'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="left-col">
          <div className="logo">
            <img 
              src={logo}
              alt="Company Logo" 
            />
            <h2>Leven Work</h2>
          </div>
          <div className="footer-column">
            <p>Thanks for being part of our online community! We're dedicated to providing valuable insights,
              resources, and expertise to help you navigate the world of digital marketing, and we're always
              here to help you achieve your online goals and objectives.
            </p>
          </div>
          <div className="footer-column">
            <div className="contact-info">
              <h3>Contact-Us</h3>
              <ul>
                <li><ion-icon name="call-outline"></ion-icon>Phone: 123434224</li>
                <li><ion-icon name="mail-outline"></ion-icon>Email: example@gmail.com</li>
                <li><ion-icon name="location-outline"></ion-icon>Address: Incubation Centre Satna</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-column side-bar">
          <div className="Quick-links">
            <h3>Quick-links</h3>
            <ul>
              <li><a href="#"><ion-icon name="home-outline"></ion-icon></a></li>
              <li><a href="#"><ion-icon name="build-outline"></ion-icon></a></li>
              <li><a href="#"><ion-icon name="newspaper-outline"></ion-icon></a></li>
              <li><a href="#"><ion-icon name="build-outline"></ion-icon></a></li>
              <li><a href="#"><ion-icon name="newspaper-outline"></ion-icon></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-column side-bar">
          <div className="social_icon">
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
      <div className="footer-copyright">
        &copy; 2024 LEVEN WORK. All rights reserved.
        <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
      </div>
      <a href="#" className="back-to-top">
        <ion-icon name="arrow-up-circle-outline"></ion-icon>
      </a>
    </footer>
  );
}

export default Footer;
