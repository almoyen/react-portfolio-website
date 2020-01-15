import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import {Container, Col, Row} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
class NavOpener extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
      }

    closeMenu () {
        this.setState({menuOpen: false})
      }

      toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
      }
    render () {
        return (
            
            <React.Fragment>
                <Container>
                <Row>
                    
                    <Col>
            <Menu isOpen ={this.state.menuOpen} 
          
            onStateChange={(state) => this.handleStateChange(state)}
            noOverlay
            right>
            <nav className="header-nav">
            <span class="header-nav__close" title="close" onClick = {() => this.closeMenu()}><span>Close</span></span>

         <div className="header-nav__content">
     
         <h3>moyen.dev</h3>
         <ul className="header-nav__list">
             <li className="current"><NavLink to="/"  onClick = {() => this.closeMenu()}>Home</NavLink></li>
             <li><NavLink to="/about"  onClick = {() => this.closeMenu()}>About</NavLink></li>
             <li><NavLink to="/services"  onClick = {() => this.closeMenu()}>Services</NavLink></li>
             <li><NavLink to="/works"  onClick = {() => this.closeMenu()}>Works</NavLink></li>
             <li><NavLink to="/contact"  onClick = {() => this.closeMenu()}>Hire Me</NavLink></li>
         </ul>
     
     </div>
     </nav> 
     
     </Menu>

     </Col>

     <Col>
     <span className= "header-menu-toggle"  onClick = {() => this.toggleMenu()}>
     <span className="header-menu-icon"></span></span></Col>
     </Row>
     </Container>
         </React.Fragment> 
        )

    }
}

export default NavOpener;