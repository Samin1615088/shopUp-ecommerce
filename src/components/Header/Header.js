import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Navbar</Navbar.Brand>
                <Nav className="ml-auto">
                    <Link className="nav-link mx-md-4" to="/home">Home</Link>
                    <Link className="nav-link mx-md-4" to="/orders">Orders</Link>
                    <Link className="nav-link mx-md-4" to="/admin">Admin</Link>
                </Nav>
                <Link className="ml-md-4 btn btn-outline-info" to="/login">Login</Link>
            </Navbar>
        </>
    );
};

export default Header;