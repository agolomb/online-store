import React, { Fragment } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Registration from "./components/Registration";
import Login from "./components/Login";
import PasswordRecovery from "./components/PasswordRecovery";
import ProductsOffered from "./components/ProductsOffered";
import ProductDetail from "./components/ProductDetail";
import { CartProvider } from "./components/CartContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <CartProvider>
            <NavBar></NavBar>
            <Routes>
              <Route path="/home" element={<HomePage />}></Route>
              <Route path="/registration" element={<Registration />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route
                path="/forgotpassword"
                element={<PasswordRecovery />}
              ></Route>
              <Route
                path="/productsoffered"
                element={<ProductsOffered />}
              ></Route>
              <Route
                path="/productsoffered/:id"
                element={<ProductDetail />}
              ></Route>
            </Routes>
          </CartProvider>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
