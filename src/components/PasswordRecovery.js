import React, { Fragment, useState } from "react";

function PasswordRecovery() {
  const [formData, setFormData] = useState({ email: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecovery = () => {
    // Implement your password recovery logic here (placeholder for now).
    console.log("Recovery clicked with data:", formData);
  };

  return (
    <Fragment>
      <h2>Password Recovery</h2>
      <form onSubmit={handleRecovery}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <button type="submit">Recover Password</button>
      </form>
    </Fragment>
  );
}

export default PasswordRecovery;
