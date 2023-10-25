import React, { Fragment, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function PasswordRecovery() {
  const [formData, setFormData] = useState({ email: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecovery = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setTimeout(() => {
      toast.success("Please check your email!", {
        position: "top-right",
        autoClose: 3000, // Display for 3 seconds
      });
    }, 1000); //the setTimeout function will run after 1000 milliseconds have passed.
  };

  return (
    <Fragment>
      <div
        className="text-2xl font-bold underline"
        style={{ marginTop: "70px" }}
      >
        <span>Please submit your email to reset your password</span>
        <form
          onSubmit={handleRecovery}
          className="my-2 max-w-sm mx-auto bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
        >
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
              onChange={handleInputChange}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <button
            type="submit"
            className="m-1 text-lg bg-blue-500 hover-bg-blue-700 text-white font-normal py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
          >
            Reset Password
          </button>
        </form>
      </div>
      <ToastContainer />
    </Fragment>
  );
}

export default PasswordRecovery;
