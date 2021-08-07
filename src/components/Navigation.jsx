import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navigation = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="home">Beautiful Code</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/codeList">All Problems</Nav.Link>
                    <Nav.Link href="/codeUpload">Upload</Nav.Link>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Array</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">String</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Tree</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Dynamic Programming</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;


