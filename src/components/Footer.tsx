import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Footer = () => {

    return (
        <Navbar bg="light" variant="light"  className="justify-content-center">
            <Nav>
                <p className="text-center mt-4 mb-4">© Auto 2020</p>
            </Nav>
        </Navbar>
    )
}

export default Footer;