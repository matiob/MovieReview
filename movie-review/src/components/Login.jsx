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
      res.payload ? navigate("/home") : navigate("/404");
    });
  };

  return (
    <div>
      <div>
        <div>
          <img src={image} alt="user logo" />
          <h1>LOGIN</h1>
          <h2>Sign in to your account</h2>
        </div>
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
          <div>
            <button type="submit">
              <span>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
        <Link to="/register">
        <h3>Register</h3>
      </Link>
      </div>
    </div>
  );
};

export default Login;
