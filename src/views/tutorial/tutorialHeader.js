import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

const TutorialHeader = () => {
  return (
    <div>
    {/* <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Zenith Tutorial</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> */}
            <Nav className="justify-content-center"  activeKey="/home">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Courses</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Log in</Nav.Link>
            </Nav>
        {/* </Navbar.Collapse>
    </Navbar> */}
    </div>
  );
}

export default TutorialHeader;