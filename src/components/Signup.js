import React, { useState } from "react";
import AuthApiService from "../services/auth-api-service";

function Signup(props) {
  const [error, setError] = useState("");
  const [passwords, setPasswords] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const { user_name, child_name, email, password, confirm_pass } = e.target;

    setError("");
    setPasswords("");
    if (password.value !== confirm_pass.value) {
      setPasswords("Passwords do not match.");
      return false;
    }
    AuthApiService.postUser({
      user_name: user_name.value,
      child_name: child_name.value,
      email: email.value,
      password: password.value,
    })
      .then((user) => {
        user_name.value = "";
        child_name.value = "";
        email.value = "";
        password.value = "";
        confirm_pass.value = "";
        props.history.push("/");
      })
      .catch((res) => {
        setError(res.error);
      });
  }
  return (
    <div className="signup">
      <h3>Sign up for an account</h3>
      <div className="errors">
        {passwords}
        {error}
      </div>
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username-signup" className="inputslabels">
            USERNAME
          </label>
          <input
            type="text"
            name="user_name"
            id="username-signup"
            className="inputslabels loginsignup"
          />
          <label htmlFor="child-signup" className="inputslabels">
            CHILD'S FIRST NAME
          </label>
          <input
            type="text"
            name="child_name"
            id="child-signup"
            className="inputslabels loginsignup"
          />
          <label htmlFor="email-signup" className="inputslabels">
            EMAIL
          </label>
          <input
            type="text"
            name="email"
            id="email-signup"
            className="inputslabels loginsignup"
          />
          <label htmlFor="password-signup" className="inputslabels">
            PASSWORD
          </label>
          <input
            type="password"
            name="password"
            id="password-signup"
            className="inputslabels loginsignup"
          />
          <label htmlFor="confirm-signup" className="inputslabels">
            CONFIRM PASSWORD
          </label>
          <input
            type="password"
            name="confirm_pass"
            id="confirm-signup"
            className="inputslabels loginsignup"
          />
          <input
            type="submit"
            value="SIGN UP"
            id="signup-submit"
            className="inputslabels loginsignup"
          />
        </form>
      </div>
    </div>
  );
}

export default Signup;
