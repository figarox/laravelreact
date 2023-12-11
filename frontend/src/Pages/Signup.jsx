import { useState } from "react";
import "../Style/login.css";
import { Link } from "react-router-dom";
import axiosClient from "../axios.js";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState({ __html: "" });

  const [show, setShow] = useState(true);
  const [inputType, setInputType] = useState("password");

  const changeShowPass = () => {
    setShow(!show);
    setInputType(inputType === "password" ? "text" : "password");
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: "" });

    axiosClient
      .post("/signup", {
        name: fullName,
        email,
        password,
        password_confirmation: passwordConfirmation,
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        if (error.response) {
          const errorsFinal = Object.values(error.response.data.errors).reduce(
            (accum, next) => [...accum, ...next],
            []
          );
          console.log(errorsFinal);
          setError({ __html: errorsFinal.join("<br>") });
        }
        console.error(error);
      });
  };

  return (
    <>
      <div className="bodyLogin">
        <div className="window-login">
          <div className="text">
            <h2>Sign up to your account v2023</h2>
            <p>
              Or <Link to="/">Login with your account</Link>
            </p>
          </div>

          {error.__html && (
            <div className="errorsForm" dangerouslySetInnerHTML={error}></div>
          )}

          <form onSubmit={onSubmit} className="login">
            <input
              name="fullname"
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(ev) => setFullName(ev.target.value)}
              required
            ></input>

            <input
              name="email"
              type="text"
              autoComplete="email"
              placeholder="Email address"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              required
            ></input>

            <input
              id="showpass"
              name="password"
              type={inputType}
              placeholder="Password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              required
            ></input>
            {show ? (
              <ion-icon
                onClick={changeShowPass}
                id="eye-off-outline"
                name="eye-off-outline"
              ></ion-icon>
            ) : (
              <ion-icon
                onClick={changeShowPass}
                id="eye-outline"
                name="eye-outline"
              ></ion-icon>
            )}

            <input
              id="showpass2"
              name="passwordConfirmation"
              type={inputType}
              placeholder="passwordConfirmation"
              value={passwordConfirmation}
              onChange={(ev) => setPasswordConfirmation(ev.target.value)}
              required
            ></input>
            {show ? (
              <ion-icon
                onClick={changeShowPass}
                id="eye-off-outline"
                name="eye-off-outline"
              ></ion-icon>
            ) : (
              <ion-icon
                onClick={changeShowPass}
                id="eye-outline"
                name="eye-outline"
              ></ion-icon>
            )}

            <button className="sing-in">Sing in</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
