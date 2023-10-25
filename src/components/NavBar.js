import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CartCount from "./CartCount";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); //We initially want our isMenuOpen state be set to false
  const location = useLocation();

  /**/
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); //when we click on the menu on a small screen, our isMenuOpen will be set to true
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 w-full border-gray-200 bg-gray-50 dark:bg-gray-600 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="w-full md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-900 dark:text-white"
          >
            Menu
          </button>
        </div>
        {/* If our isMenuOpen is true, our css will be "block" and we'll see it, if isMenuOpn is false our css will be "hidden" and the menu will go away. */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium justify-center mt-4 md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li className="md:mr-2">
              <Link
                to="/home"
                className="block py-2 pl-3 pr-4 text-white rounded hover-bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark-text-white md-dark:hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent"
              >
                Home
              </Link>
            </li>
            <li className="md:mr-2">
              <Link
                to="/registration"
                className="block py-2 pl-3 pr-4 text-white rounded hover-bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark-text-white md-dark:hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent"
              >
                Register
              </Link>
            </li>
            <li className="md:mr-2">
              <Link
                to="/login"
                className="block py-2 pl-3 pr-4 text-white rounded hover-bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark-text-white md-dark:hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent"
              >
                Log In
              </Link>
            </li>
            <li className="md:mr-2">
              <Link
                to="/forgotpassword"
                className="block py-2 pl-3 pr-4 text-white rounded hover-bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark-text-white md-dark:hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent"
              >
                Forgot Your Password?
              </Link>
            </li>
            <li className="md:mr-2">
              <Link
                to="/productsoffered"
                className="block py-2 pl-3 pr-4 text-white rounded hover-bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark-text-white md-dark:hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent"
              >
                Products Offered
              </Link>
            </li>
            <li className="flex-grow"></li>
            <li>
              <CartCount />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
