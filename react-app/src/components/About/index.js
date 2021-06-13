import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect, useParams } from 'react-router-dom';
import "./About.css"
import LogoutButton from "../auth/LogoutButton"
import { FaGithub, FaLinkedin } from "react-icons/fa"
const About = () => {
    const user = useSelector(state => state.session.user);


    return (
        <div class="topAbout">
            {/* <div class="space">
                <img alt="comingSoon" />

                <h1>Jose Solis</h1>
            </div> */}
            <footer>
                <div class="sm-handle">
                    <div />
                    <div />
                    <a href="https://github.com/Tonomatic/PostIT" class="sm-button">
                        <FaGithub id="linkss" />
                    </a>
                    <a href="https://www.linkedin.com/in/jose-solis-17940b71/" class="sm-button">
                        <FaLinkedin id="linkss" />
                    </a>
                    {/* <a href="https://facebook.com/giriraj.ronak" class="sm-button">
                        <i class="fab fa-facebook-f">	</i>
                    </a>
                    <a href="https://twitter.com/2Teching" class="sm-button">
                        <i class="fab fa-twitter">	</i>
                    </a> */}
                    <div />
                    <LogoutButton id="otherCompo" />
                </div>
                {/* <div class="footer-links">
                    <div class="menu">
                        <h4 class="menu-title">Menu</h4>
                        <a href="#" class="menu-links">Join Me</a>
                        <a href="#" class="menu-links">My Blogs</a>
                        <a href="#" class="menu-links">My Journey</a>
                        <a href="#" class="menu-links">About</a>
                    </div>

                </div> */}
            </footer>
        </div>
    );
}

export default About;
