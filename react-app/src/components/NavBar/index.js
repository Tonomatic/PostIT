import React from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import "./NavBar.css"

const redirecting = () => {

  return (
    <Redirect to="/" />
  )
}

const NavBar = () => {
  const { userId } = useParams();
  return (
    <nav className="First_nav">
      <div>
        <NavLink to="/" exact={true} className="tags" activeClassName="active">
          Home
          </NavLink>
      </div>
      <div>
        <NavLink to="/login" exact={true} className="tags" activeClassName="active">
          Login
          </NavLink>
      </div>
      <div>
        <NavLink to="/sign-up" exact={true} className="tags" activeClassName="active">
          Sign Up
          </NavLink>
      </div>
      <div>
        <NavLink to="/users" exact={true} className="tags" activeClassName="active">
          Users
          </NavLink>
      </div>
      <div>
        <LogoutButton />
      </div>
    </nav>
  );
}

export default NavBar;
