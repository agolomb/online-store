import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <Fragment>
      <div className="font-sans" style={{ marginTop: "70px" }}>
        <p className="text-5xl font-bold">Welcome to Alex Golomb's store.</p>
        <p className="text-4xl font-medium p-5">
          Please note the following before you begin shopping:
        </p>
        <div className="p-1">
          <ul>
            <li className="text-2xl p-3">
              If this is your first time shopping here please register with us{" "}
              <Link to="/registration" className="text-blue-500 underline">
                here
              </Link>{" "}
            </li>
            <li className="text-2xl p-3">
              If you have an account with us please log in{" "}
              <Link to="/login" className="text-blue-500 underline">
                here
              </Link>{" "}
            </li>
            <li className="text-2xl p-3">
              Questions or concerns? Please email us at{" "}
              <span className="font-bold">alexonlinestore@email.com</span>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;
