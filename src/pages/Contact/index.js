import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
// This is to navigate to the home route rather than the index.html
import { useNavigate } from "react-router-dom";

// Importing the external css
import "./Contact.css";

function Contact() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [flagUrl, setFlagUrl] = useState("https://flagcdn.com/w320/in.png");
  const [phone, setPhone] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // navingating to the home page
  const navigate = useNavigate();

  const closeForm = () => {
    navigate("/");
  };

  // Fetch country data from REST Countries API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);

  // Handle country code selection and flag display
  const handleCountryCodeChange = (e) => {
    const countryCode = e.target.value;
    setSelectedCountryCode(countryCode);

    // Find the selected country from the fetched data
    const country = countries.find(
      (country) =>
        country.idd &&
        country.idd.root &&
        countryCode ===
          country.idd.root +
            (country.idd.suffixes ? country.idd.suffixes[0] : "")
    );

    if (country && country.flags && country.flags.png) {
      setFlagUrl(country.flags.png);
    } else {
      setFlagUrl("");
    }
  };

  // Handle phone number input
  const handlePhoneChange = (e) => {
    let phoneNumber = e.target.value.replace(/\D/g, ""); // Remove any non-numeric characters
    if (phoneNumber.length > 10) {
      setErrorMsg("Please enter a 10-digit phone number");
    } else {
      setErrorMsg("");
    }
    setPhone(phoneNumber);
  };

  return (<>
    <Layout>
       
      <div className="contact-page">
        <section className="container  bg-yellow-900">
          <header>Contact Us</header>
          <span className="close-btn" onClick={closeForm}>
            ×
          </span>

          {/* Adding the method post and handling the form in create route */}
          <form action="/addUser" method="post" className="form">
            {/* Full Name */}
            <div className="input-box">
              <label htmlFor="Name">Full Name</label>
              <input type="text" placeholder="Enter Full Name" required />
            </div>

            {/* Email */}
            <div className="input-box">
              <label htmlFor="Email">Email</label>
              <input type="email" placeholder="Enter email-id" required />
            </div>

            {/* Mobile Number */}
            <div className="input-box">
              <label>Mobile Number</label>
              <div className="phone-input flex">
                {/* Country Code Dropdown */}
                <select
                  id="country-code"
                  value={selectedCountryCode}
                  onChange={handleCountryCodeChange}
                >
                  <option value="">Select Country Code</option>
                  {countries.map((country, index) =>
                    country.idd && country.idd.root ? (
                      <option
                        key={index}
                        value={
                          country.idd.root + (country.idd.suffixes[0] || "")
                        }
                      >
                        {country.idd.root + (country.idd.suffixes[0] || "")}
                      </option>
                    ) : null
                  )}
                </select>
                {/* Display Flag */}
                {flagUrl && (
                  <img
                    src={flagUrl}
                    alt="Country flag"
                    style={{ width: "50px", height: "40px", marginLeft: "5px" }}
                  />
                )}
              </div>
              <input
                className="inline"
                type="tel"
                id="phone"
                placeholder="Enter Mobile no."
                required
                inputMode="numeric"
                minLength="10"
                maxLength="10"
                value={phone}
                onChange={handlePhoneChange}
                pattern="[0-9]*" // This will allow only numbers
              />

              <p id="error-msg">{errorMsg}</p>
            </div>

            {/* Business */}
            <div className="input-box">
              <label htmlFor="business">Business</label>
              <input
                type="text"
                placeholder="What Business do you have?"
                required
              />
            </div>

            {/* Services */}
            <div className="dropdown">
              <label htmlFor="services">Services</label>
              <select name="services" id="services" required>
                <optgroup label="Services">
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Web Development">Web Development</option>
                  <option value="App Development">App Development</option>
                </optgroup>
              </select>
            </div>

            {/* Location */}
            <div className="input-box">
              <label htmlFor="location">Location</label>
              <input type="text" placeholder="Location" required />
            </div>

            {/* Message */}
            <div className="input-box">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Message"
                style={{ textAlign: "center" }}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button id="submit-btn" type="submit">
              Connect With Us Now!
            </button>
          </form>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.9769343156877!2d80.81024617444585!3d24.55545917812968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847fcef946cea3%3A0xaa6be478fdf07ef2!2sSatna%20Smart%20City%20Incubation%20Center!5e0!3m2!1sen!2sin!4v1723737857816!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </section>
      </div>
    </Layout>
      <Footer></Footer>
      </>
  );
}

export default Contact;
