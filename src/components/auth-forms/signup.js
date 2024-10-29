import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  //axios.defaults.withCredentials=true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://connectize.co/api/auth/registration/", {
        username,
        email,
        password1,
        password2,
      })
      .then((res) => {
        if (res) {
          console.log(res);

          navigate("/success");
        }
      })
      .catch((err) => console.log(err));
  };

  const fields = [
    {
      name: "username",
      type: "email",
      label: "Username",
      placeholder: "Enter Username",
    },
    {
      name: "email",
      type: "email",
      label: "Email Address",
      placeholder: "Enter a valid email address",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter a 8 digit password",
    },
    {
      name: "confirm_password",
      type: "password",
      label: "Confirm Password",
      placeholder: "Enter the same password as above",
    },
  ];
  return (
    <section>
      <h1 style={{ marginTop: "4%" }}>Create new account</h1>
      <form onSubmit={handleSubmit} className="w-full">
        <div>
          <br />
          <div>
            <label htmlFor="username">Username</label>
            <br />
            <br />
            <input
              type="email"
              className="form-control"
              style={{ height: "50px" }}
              placeholder="Username@example.com"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label>Company email</label>
            <br />
            <br />
            <input
              type="text"
              className="form-control"
              style={{ height: "50px" }}
              placeholder="Company@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label>Password</label>
            <br />
            <br />
            <input
              type="password"
              className="form-control"
              style={{ height: "50px" }}
              placeholder="**********"
              required
              onChange={(e) => setPassword1(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label>Confirm Password</label>
            <br />
            <br />
            <input
              type="password"
              className="form-control"
              style={{ height: "50px" }}
              placeholder="**********"
              required
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input type="checkbox" /> I agree to{" "}
            <a>
              <Link to="/">
                <b>Terms and Condition</b>
              </Link>
            </a>
          </div>
          <br />
          <div>
            <button
              type="submit"
              className="btn btn-dark w-75 rounded-pill"
              style={{ height: "50px" }}
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Signup;
