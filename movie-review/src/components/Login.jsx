import React from "react";
import image from "../assets/user.svg";
import useInput from "../hooks/useInput";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendLoginRequest } from "../store/user";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useInput();
  const password = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      sendLoginRequest({
        email: email.value,
        password: password.value,
      })
    ).then((res) => {
      console.log("RES->", res);
      res.payload ? navigate("/") : navigate("/404");
    });
  };

  return (
    <section className="login">
      <div className="card">
        <img src={image} className="card-img-top" alt="user logo" />
        <div className="card-body">
          <h5 className="card-title">LOGIN</h5>
          <p className="card-text">Sign in to your account</p>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div>
              <div>
                <input
                  aria-label="Email address"
                  type="text"
                  required
                  placeholder="Email address"
                  {...email}
                />
              </div>
              <div>
                <input
                  aria-label="Password"
                  type="password"
                  required
                  placeholder="Password"
                  {...password}
                />
              </div>
            </div>
            <div className="buttonWrap">
              <button type="submit" className="btn btn-primary">
                Sign In
                <svg
                  className="svg-icon"
                  role="img"
                  height="10"
                  width="10"
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </form>
          <div className="registerLogin">
            <Link to="/register">
              <h3>Register</h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
