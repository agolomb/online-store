import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CartCount from "./CartCount";
import "./navbar.css";
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="NavBar">
      <button className="MenuButton" onClick={toggleMenu}>
        ☰ Menu
      </button>
      <ul className={`NavList ${isMenuOpen ? "open" : ""}`}>
        <li className="NavItem">
          <Link to="/registration" className="NavLink">
            Register
          </Link>
        </li>
        <li className="NavItem">
          <Link to="/login" className="NavLink">
            Log In
          </Link>
        </li>
        <li className="NavItem">
          <Link to="/forgotpassword" className="NavLink">
            Forgot Your Password?
          </Link>
        </li>
        <li className="NavItem">
          <Link to="/productsoffered" className="NavLink">
            Products Offered
          </Link>
        </li>
        <li className="NavItem">Shopping Cart</li>
        <li className="NavItem">
          <CartCount /> {/* Include the CartCount component here */}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
