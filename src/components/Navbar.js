import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.toggleNav = this.toggleNav.bind(this)
        this.closeNav = this.closeNav.bind(this)

        this.state = {
            navExtended: false
        }
    }

    toggleNav() {
        this.state.navExtended ? document.getElementsByClassName('nav')[0].classList.remove('extended') : document.getElementsByClassName('nav')[0].classList.add('extended')
        this.setState((prev) => ({ navExtended: !prev.navExtended }))
    }

    closeNav() {
        this.state.navExtended && document.getElementsByName('nav')[0].classList.remove('extended')
        this.setState(() => ({ navExtended: false }))
    }

    render() {
        return (
            <div className="nav-animation-container">
                <div className="nav-container">
                    <NavLink onClick={this.closeNav} to="/"><h1>weylin.dev</h1></NavLink>
                    <nav className="nav">
                        <NavLink onClick={this.closeNav} to="/" activeClassName="nav-active"exact={true} >Home</NavLink>
                        <NavLink onClick={this.closeNav} to="/portfolio" activeClassName="nav-active" >Portfolio</NavLink>
                        {/* <NavLink to="/blog" activeClassName="nav-active" >Blog</NavLink> !! STILL IN DEVELOPMENT!! */}
                        <NavLink onClick={this.closeNav} to="/contact" activeClassName="nav-active" >Contact</NavLink>
                    </nav>
                    <button onClick={this.toggleNav} className="nav-toggle">☰</button>
                </div>
                <div className="nav-animation"></div>
            </div>
        );
    }
}

export default Navbar;
