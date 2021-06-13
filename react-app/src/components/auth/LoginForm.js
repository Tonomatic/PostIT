import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import { login } from "../../store/session";
import './LoginForm.css'

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

  return (
    <div id="login__background">
      {/* <h1>Hello</h1> */}
      <h1 id="headText">
        Welcome to Post It, the website where you can ask your your friends questions
        about any subject!
        <h3>This is the subtext and more about this project</h3>
      </h1>
      <div id="login__container">
        <h1 id="login__title">Welcome back!</h1>
        <h3 id="login__title--subtitle">Go ask your questions!</h3>
        <form onSubmit={onLogin} id="login__form">
          <div>
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
            <button type="submit" id="button2" onClick={demoLogin2}>Demo2 Login</button>
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
