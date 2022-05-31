import React from "react";
import defaultImage from "../assets/user.svg";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendRegisterRequest, sendLogoutRequest } from "../store/user";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useInput();
  const password = useInput();
  const name = useInput();
  const image = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      sendRegisterRequest({
        email: email.value,
        password: password.value,
        name: name.value,
        image: image.value,
      })
    )
      .then(() => dispatch(sendLogoutRequest()))
      .then(() => {
        alert("User created successfully");
        navigate("/home/movies");
      })
      .catch(() => navigate("/404"));
  };

  return (
    <section>
      <div>
        <div>
          <img src={defaultImage} alt="user logo" />
          <h1>REGISTER</h1>
          <h2>Create your account</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div>
            <div>
              <input
                aria-label="Name"
                type="text"
                required
                placeholder="Name"
                {...name}
              />
            </div>
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
            <div>
              <input
                aria-label="Perfil Pic"
                type="text"
                required
                placeholder="URL-Image"
                {...image}
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
              Sign up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
