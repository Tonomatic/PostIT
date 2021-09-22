import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import { login } from "../../store/session";
import './LoginForm.css'
import { FaGithub, FaLinkedin } from "react-icons/fa"

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const demoLogin = async (e) => {
    const email = 'demo@aa.io';
    const password = 'password';
    e.preventDefault();
    setErrors([]);
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  }
  const demoLogin2 = async (e) => {
    const email = 'demo@demo.com';
    const password = 'password';
    e.preventDefault();
    setErrors([]);
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  }

  if (user) {
    return <Redirect to="/" />;
  }
  const redirecting = () => {
    return <Redirect to="/sign-up" />;
  }
  return (
    <div id="login__background">
      {/* <h1>Hello</h1> */}
      <div id="headText">
        <h1>Welcome to Post It!</h1>
        <div id="postsits">Add Friends With similar interests to yours!</div>
        <div id="postsits2">Posts Questions to all your friends!</div>
        <div id="postsits3">Answer questions from your friends!</div>
        <div>A place to write and answer questions!</div>
        {/* <NavLink to="/sign-up">Get Started!</NavLink> */}
        <div id="creator">
          Created By Jose Solis
          <a href="https://github.com/Tonomatic/PostIT" id="logosFront">
            <FaGithub id="links" />
          </a>
          <a href="https://www.linkedin.com/in/jose-solis-17940b71/" id="logosFront">
            <FaLinkedin id="links" />
          </a>
        </div>
      </div>
      <div id="login__container">
        <h1 id="login__title">Welcome back!</h1>
        <h3 id="login__title--subtitle">Go ask your questions!</h3>
        <form onSubmit={onLogin} id="login__form">
          <div className="errorsContainer">
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <label htmlFor="password" id="password--margin">Password</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={updatePassword}
            />
          </div>
          <button type="submit" id="button1">Login</button>
          <div id="demos">
            <button type="submit" id="button2" onClick={demoLogin}>Demo Login</button>
            <button type="submit" id="button2" onClick={demoLogin2}>Demo-2 Login</button>
          </div>
          <div id="register__link">
            <p>Need an account?</p>
            <NavLink to="/sign-up">Register</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
