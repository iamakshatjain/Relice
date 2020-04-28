import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
            <Nav.Link active href="/complaint">Complaint</Nav.Link>
            <Nav.Link href="/report">Report</Nav.Link>
            <Nav.Link href="/matched">Matched</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavBar;