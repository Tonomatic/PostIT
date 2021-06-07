import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import "./Logout.css"

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    dispatch(logout());
  };

  return <button onClick={onLogout} id="logout_button">Logout</button>;
};

export default LogoutButton;
