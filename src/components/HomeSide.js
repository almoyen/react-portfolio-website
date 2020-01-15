import React from 'react';
import {NavLink} from 'react-router-dom';
const HomeSide = () => {
    return ( 
        <React.Fragment>
            <ul className="home-sidelinks">
            <li><NavLink to = '/about'>About<span>Who am I?</span></NavLink></li>
            <li><NavLink to = '/services'>Services<span>What can I do?</span></NavLink></li>
            <li><NavLink to = '/works'>Works<span>Some of my works</span></NavLink></li>
            <li><NavLink to = '/contact'>Hire Me<span>Get in touch</span></NavLink></li>
        </ul> 

        <ul className="home-social">
            <li className="home-social-title">Follow Me</li>
            <li><a href='https://facebook.com/almoyen'>
                <i className="fab fa-facebook"></i>
                <span className="home-social-text">Facebook</span>
            </a></li>
            <li><a href="https://instagram.com/almoyen/">
                <i className="fab fa-twitter"></i>
                <span className="home-social-text">Instagram</span>
            </a></li>
            <li><a href="https://www.linkedin.com/in/moyen">
                <i className="fab fa-linkedin"></i>
                <span className="home-social-text">LinkedIn</span>
            </a></li>
            <li><a href="https://pph.me/moyen">
                <i className="fab fa-linkedin"></i>
                <span className="home-social-text">Hire Me on PeoplePerHour</span>
            </a></li>
            
        </ul>
        </React.Fragment>
     );
}
 
export default HomeSide;
