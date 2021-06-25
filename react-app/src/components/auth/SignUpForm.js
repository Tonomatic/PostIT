import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import { login } from "../../store/session";
import { FaGithub, FaLinkedin } from "react-icons/fa"

import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(username, email, password));
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
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

  return (
    <div id="signup__background">
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
      <div id="signup__container">
        <h1 id="signup__title">Create an account</h1>
        <form onSubmit={onSignUp} id="signup__form">
          <div>
            <label>User Name</label>
            <input
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <label>Repeat Password</label>
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <button type="submit" id="button1">Sign Up</button>
          <div>
            <button type="submit" id="button2" onClick={demoLogin}>Demo Login</button>
            <button type="submit" id="button2" onClick={demoLogin2}>Demo2 Login</button>
          </div>
          <NavLink to="/login" id="login__link">Already have an account?</NavLink>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
