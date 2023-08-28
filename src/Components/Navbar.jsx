import React, { useState } from "react"; // Don't forget to import useState
import Logo from "../Assets/HSM.png";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-100 max-h-14 bg-white flex flex-row justify-between items-center px-4">
      <Link to="/">
        <div className="flex items-center">
          <img src={Logo} alt="HSM Logo" className="max-h-14" />
          <h2 className="font-bold p-2 py-3">HSM Stockholm</h2>
        </div>
      </Link>
      {/* Show menu links on large screens */}
      <div className="hidden lg:block ml-auto">
        <Link to="/Projects" className="px-3 py-2">
          Projekt
        </Link>
        <Link to="/About" className="px-3 py-2">
          Om HSM
        </Link>
        <Link to="/Jobs" className="px-3 py-2">
          Jobba hos oss
        </Link>
        <Link to="/Contact" className="px-3 py-2">
          Kontakta HSM
        </Link>
      </div>
      {/* Integrated hamburger menu code */}
      <div className="relative">
        {/* Show hamburger menu icon only on small screens */}
        <button
          className="lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="3" width="24" rx="1" />
            <rect height="3" width="24" y="7" rx="1" />
            <rect height="3" width="24" y="14" rx="1" />
          </svg>
        </button>
        {isOpen && (
          <div className="fixed top-14 left-0 h-screen w-screen bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white -mt-1 p-4">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.297 6.297a1 1 0 0 0-1.414-1.414L12 10.586 7.117 5.703a1 1 0 1 0-1.414 1.414L10.586 12l-4.883 4.883a1 1 0 1 0 1.414 1.414L12 13.414l4.883 4.883a1 1 0 0 0 1.414-1.414L13.414 12l4.883-4.883z"
                  />
                </svg>
              </button>
              {/* Add your menu links here */}
              <Link to="/Projects" className="block py-2">
                Projekt
              </Link>
              <Link to="/About" className="block py-2">
                Om HSM
              </Link>
              <Link to="/Jobs" className="block py-2">
                Jobba hos oss
              </Link>
              <Link to="/Contact" className="block py-2">
                Kontakta HSM
              </Link>
            </div>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
}
