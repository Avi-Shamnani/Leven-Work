import React from "react";
import { Link, useLocation } from "react-router-dom";

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
      title: "Contact",
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
      {/* Main Content */}
      <div className="">{children}</div>

      {/* The navigation bar is constant in our site */}
      <div className="fixed bottom-10 left-0 right-0 w-full">
        <div className="flex w-full justify-center">
          {navItem.map((item, index) => (
            <div className="flex flex-col justify-end">
              {/* Showing upper cloud link structure and icon */}
              {location.pathname === item.path && (
                <div className="flex flex-col items-center">
                  <div className="h-5 w-10 bg-primary rounded-t-full"></div>
                  <div className="h-5 w-20 bg-primary rounded-t-full text-center">
                    <i className={`${item.icon} text-white text-xl`}></i>
                  </div>
                </div>
              )}
              {/* Here we just want the rounded corners for the edge case so if index === 0 then do round just left side
            and similarly if we are at the last index then we want the rounded corner at right*/}
              <div
                className={`px-12 bg-primary text-secondary py-2.5 text-xl ${
                  index === 0 && "rounded-l"
                } 
            ${
              index === navItem.length - 1 && "rounded-r"
            } flex items-center justify-center space-x-2`}
              >

                {/* If the current route is not active then only icon will be shown in the nav bar */}
                {location.pathname !== item.path && (
                  <i className={`${item.icon} text-secondary text-xl`}></i>
                )}
                <Link to={`${item.path}`}>{item.title}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Layout;
