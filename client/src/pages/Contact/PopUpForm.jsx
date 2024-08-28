import React from 'react'
import { useNavigate } from "react-router-dom";

function PopUpForm() {

  const navigate = useNavigate();

  const closeForm = () => {
    navigate("/");
  };


  return (
    <div>
        <div>
            Want To Connect With Us:
        </div>
        <div>
            <form action="/contact">
            <div className="input-box">
                <label htmlFor="Name">Full Name <span>*</span></label>
                <input
                  type="text"
                  name="name"
                  value="aman"
                  
                  placeholder="Enter Full Name"
                  required
                />
              </div>

              {/* Email */}
              <div className="input-box">
                <label htmlFor="Email">Email<span>*</span></label>
                <input
                  type="email"
                  name="email"
                  value="aman@gmail"
                  
                  placeholder="Enter email-id"
                  required
                />
              </div>
            </form>
        </div>
    </div>
  )
}

export default PopUpForm