import React from 'react'
import NavMenu from './NavMenu';
import {NavLink} from 'react-router-dom';
const Header = (props) => {
    return (

  <header className="s-header">
   <div className="header-logo">
        <NavLink to = '/' >
            <h1 className = 'header-logo'> moyen.dev</h1> 
            </NavLink>
        
        </div>

    <NavMenu/>
 
  </header>

    );
}
 
export default Header;
