import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
// import Pdf from "../../assets/images/Dee_Ann_Scanniello_Resume_Web_Developer_Full_Stack.pdf";
import "./NavBar.css"



// const Size = ({ children }) => <Navbar.Brand style={{ fontSize: 'xx-large' }}>{children}</Navbar.Brand>
// const Bold = ({ children }) => <Navbar.Brand style={{ fontSize: 'bold' }}>{children}</Navbar.Brand>

const NavbarRx = () => {
    return (
        <Navbar className="navbar" responisve="true" variant="dark" expand="lg">
            <NavLink to="/"><Navbar.Brand><span className="navbar-title">Google Book Search</span></Navbar.Brand></NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink to="/search" className="nav-link">Search </NavLink>
                    <NavLink className="nav-link" to="/saved">Saved</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarRx;