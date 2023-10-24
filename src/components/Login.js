import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  //const location = useLocation();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // Implement your login logic here (placeholder for now).
    console.log("Login clicked with data:", formData);
  };
  return (
    <Fragment>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="email"
          placeholder="Email or Username"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="submit">Login</button>
      </form>
      <ul>
        <Link to="/forgotpassword" className="NavLink">
          Forgot Your Password?
        </Link>
      </ul>
    </Fragment>
  );
}

export default Login;
