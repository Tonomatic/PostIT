import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect, useParams } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import "./NavBar.css"
import ReactModal from 'react-modal'
import Adding from "../Adding/index"

const redirecting = () => {

  return (
    <Redirect to="/" />
  )
}

const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const [open, setOpen] = useState(false);
  const { userId } = useParams();

  const opening = () => {
    setOpen(true)
  }
  const close = () => {
    setOpen(false)
  }

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <div class="topDog">
      {/* <nav className="Second_nav">
        <div className="logOut">
          <LogoutButton />
        </div>
      </nav> */}
      <nav className="First_nav">
        <div>
          <NavLink to="/" exact={true} className="tags" activeClassName="active">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/posts" exact={true} className="tags" activeClassName="active">
            MyPosts
          </NavLink>
        </div>
        <div>
          <NavLink to="/friends" exact={true} className="tags" activeClassName="active">
            Friends
          </NavLink>
        </div>
        <div>
          <NavLink to="/answers" exact={true} className="tags" activeClassName="active">
            Answers
          </NavLink>
        </div>
        <div id="AddContainer">
          <ReactModal
            isOpen={open}
            onRequestClose={close}
            className="editable"
          // onRequestClose={close}
          >
            <h2>Post a new Question!</h2>
            <Adding />
          </ReactModal>
          <div id="addButton" onClick={opening}>
            +
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
