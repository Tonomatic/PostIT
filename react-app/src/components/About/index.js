import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect, useParams } from 'react-router-dom';
import "./About.css"


const About = () => {
    const user = useSelector(state => state.session.user);


    return (
        <div class="topAbout">
            <div class="space">
                <img alt="comingSoon" />

                <h1>Jose Solis</h1>
            </div>
            <footer>
                <div class="sm-handle">
                    {/* <a href="https://instagram.com/ronakgiriraj" class="sm-button">
                        <i class="fab fa-instagram">	</i>
                    </a>
                    <a href="https://www.linkedin.com/in/giri-raj-ronak-999257212" class="sm-button">
                        <i class="fab fa-linkedin">	</i>
                    </a>
                    <a href="https://facebook.com/giriraj.ronak" class="sm-button">
                        <i class="fab fa-facebook-f">	</i>
                    </a>
                    <a href="https://twitter.com/2Teching" class="sm-button">
                        <i class="fab fa-twitter">	</i>
                    </a>
                    <a href="https://github.com/ronakgiriraj" class="sm-button">
                        <i class="fab fa-github">	</i>
                    </a> */}
                </div>
                <div class="footer-links">
                    <div class="menu">
                        <h4 class="menu-title">Menu</h4>
                        <a href="#" class="menu-links">Join Me</a>
                        <a href="#" class="menu-links">My Blogs</a>
                        <a href="#" class="menu-links">My Journey</a>
                        <a href="#" class="menu-links">About</a>
                    </div>
                    <div class="menu">
                        <h4 class="menu-title">Other Pages</h4>
                        <a href="#" class="other-links">Contact Us</a>
                        <a href="#" class="other-links">Privacy Policy</a>
                        <a href="#" class="other-links">FAQ</a>
                        <a href="#" class="other-links">Terms of use</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default About;
