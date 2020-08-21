import React, { useState } from "react";
import TokenService from "../services/token-service";
import AuthApiService from "../services/auth-api-service";
import logo from "../img/kidslearn2.png";

function Login(props) {
  const [error, setError] = useState("");

  function handleSubmitJwtAuth(ev) {
    ev.preventDefault();
    setError("");
    const { user_name, password } = ev.target;
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        props.clearScore();
        props.history.push("/progress");
      })
      .catch((res) => {
        setError(res.error);
      });
  }

  function renderform() {
    return (
      <>
        <h2>WELCOME</h2>
        <div className="errors">{error}</div>
        <div className="login-form">
          <form onSubmit={handleSubmitJwtAuth}>
            <label htmlFor="username" className="inputslabels">
              USERNAME
            </label>
            <input
              required
              type="text"
              name="user_name"
              id="username"
              className="inputslabels loginsignup"
            />
            <label htmlFor="password" className="inputslabels">
              PASSWORD
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              className="inputslabels loginsignup"
            />

            <input
              type="submit"
              value="LOG IN"
              id="login-btn"
              className="inputslabels"
            />
          </form>
          <p className="sign-up">
            <button
              onClick={() => props.history.push("/sign-up")}
              className="signup-anchor"
            >
              SIGN UP
            </button>
          </p>
        </div>
      </>
    );
  }

  function renderLogo() {
    return (
      <img
        src={logo}
        alt="Kids Learn Logo"
        title="KidsLearn"
        className="selectedAnimal"
      />
    );
  }

  return (
    <div className="login">
      {!TokenService.hasAuthToken() ? renderform() : renderLogo()}
    </div>
  );
}

export default Login;
