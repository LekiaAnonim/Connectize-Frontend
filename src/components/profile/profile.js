import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo";
import { getSession } from "../../lib/session";
import useRedirect from "../../hooks/useRedirect";

function Profile() {
  const session = getSession();
  useRedirect(!session, "/login");
  return (
    <main>
      <div className="container py-4">
        <Logo />
        <div className="mx-auto flex flex-col justify-center items-center text-center">
          <h1 className="text-xl font-semibold">
            Would you like to set up <br />
            your profile now?
          </h1>
          <img
            src="/images/pasportOne.png"
            alt="passport"
            style={{ width: "150px" }}
            className="my-5"
          />
          <div>
            <Link
              to="/home"
              style={{ width: "250px" }}
              className="btn btn-warning rounded-pill mb-3 ms-3"
            >
              Let's Go
            </Link>
            <Link
              to="/"
              style={{ width: "250px" }}
              className="btn btn-secondary rounded-pill mb-3 ms-3"
            >
              Not Now
            </Link>
            {/* <button
              style={{ width: "250px" }}
              className="btn btn-secondary rounded-pill mb-3 ms-3"
            >
              Not Now
            </button> */}
          </div>
        </div>
      </div>
      {/* <footer className="text-center py-5">
        <p>ALL RIGHT RESERVED &copy; 2024</p>
      </footer> */}
    </main>
  );
}

export default Profile;
