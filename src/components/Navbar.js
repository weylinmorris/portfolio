import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <nav className="nav">
                    <h1>weylin.dev</h1>
                    <NavLink onClick={this.animateNavbar} to="/" activeClassName="nav-active"exact={true} >Home</NavLink>
                    <NavLink to="/portfolio" activeClassName="nav-active" >Portfolio</NavLink>
                    {/* <NavLink to="/blog" activeClassName="nav-active" >Blog</NavLink> !! STILL IN DEVELOPMENT!! */}
                    <NavLink to="/contact" activeClassName="nav-active" >Contact</NavLink>
                </nav>
                <div className="nav-animation"></div>
            </div>
        );
    }
}

export default Navbar;
