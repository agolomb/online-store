import React, { Fragment, useState } from "react";

function Registration() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistration = () => {
    // Implement your registration logic here (placeholder for now).
    console.log("Registration clicked with data:", formData);
  };

  return (
    <Fragment>
      <h2>Registration</h2>
      <form onSubmit={handleRegistration}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        <button type="submit">Register</button>
      </form>
    </Fragment>
  );
}

export default Registration;
