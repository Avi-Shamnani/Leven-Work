import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from './Colorful_Abstract_Infinity_Technology_Free_Logo-removebg-preview.png'

// Taking the children as props from the parent
function Layout({ children }) {
  // This function is used to find the location of the current route (in react-router-dom)
  const location = useLocation();
  const navItem = [
    {
      title: "About Us",
      path: "/about",

      // These icons are coming from the remixicons section
      icon: "ri-information-line",
    },
    {
      title: "Services",
      path: "/",
      icon: "ri-service-line",
    },
    {
      title: "Contact Us",
      path: "/contact",
      icon: "ri-user-star-fill",
    },
    {
      title: "Our Team",
      path: "/team",
      icon: "ri-team-line",
    },
    {
      title: "Clients",
      path: "/clients",
      icon: "ri-heart-2-line",
    },
    {
      title: "Our Work",
      path: "/work",
      icon: "ri-home-heart-line",
    },
  ];
  return (
    <div>

      {/* The navigation bar is constant in our site */}
      <div className="fixed bg-[#ffffff] top-0 h-25 w-full z-50 text-[#000]">
        <div className="flex w-full">
        <div className="name-box flex ml-10 justify-start align-middle mt-3 pt-2">
           <img className="h-16 w-16 align-top justify-start bg-gray-900 rounded-full" src = {logo} alt="Leven-work"></img>
           <div className="h-5 ml-5 text-3xl align-bottom flex pt-3">𝑳𝒆𝒗𝒆𝒏𝒘𝒐𝒓𝒌</div>  
        </div>
        <div className="flex w-full justify-end align-middle mt-0 pt-0 mb-2">
          {navItem.map((item, index) => (
            <div key={index} className="flex flex-col justify-end align-middle">
              {/* Showing upper cloud link structure and icon */}
              {location.pathname === item.path && (
                <div className="flex flex-col items-center">
                  <div className="h-5 w-10 text-[#000] rounded-t-full"></div>
                  <div className="h-5 w-20 rounded-t-full text-center">
                    <i className={`${item.icon} text-[#000] text-xl`}></i>
                  </div>
                </div>
              )}
              {/* Here we just want the rounded corners for the edge case so if index === 0 then do round just left side
            and similarly if we are at the last index then we want the rounded corner at right*/}
              <div
                className={`px-7 text-[#000] py-2.5 text-xl ${
                  index === 0 && "rounded-l"
                } 
                ${
                  index === navItem.length - 1 && "rounded-r"
                } flex items-center justify-center space-x-2`}
              >

                {/* If the current route is not active then only icon will be shown in the nav bar */}
                {location.pathname !== item.path && (
                  <i className={`${item.icon} text-[#000] text-xl`}></i>
                )}
                <Link to={`${item.path}`}>{item.title}</Link>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
   
      {/* Main Content */}
      <div className="pt-16">{children}</div>
    </div>
  );
}

export default Layout;
