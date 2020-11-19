import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const SystemNavbar = () => {

    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Auto</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link href="#">Purchase</Nav.Link>
                    <Nav.Link href="#">My Orders</Nav.Link>
                    <Nav.Link href="#">Sell</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default SystemNavbar;