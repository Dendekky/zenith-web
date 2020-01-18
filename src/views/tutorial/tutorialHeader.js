import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


const TutorialHeader = () => {
  return (
        <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/tutorial">Zenith Tutorial</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-center"  id="basic-navbar-nav">
                <Nav activeKey="/">
                  <OverlayTrigger
                  placement='bottom'
                  overlay={
                    <Tooltip id='bottom'>
                      Navigate back to the homepage.
                    </Tooltip>
                    }>
                  <Nav.Link href="/">
                      HOME
                  </Nav.Link>
                  </OverlayTrigger>
                  <OverlayTrigger
                  placement='bottom'
                  overlay={
                    <Tooltip id='bottom'>
                      Find out more about the courses you can register for.
                    </Tooltip>
                    }>
                  <Nav.Link href="#home">
                    COURSES
                  </Nav.Link>
                  </OverlayTrigger>
                  <OverlayTrigger
                  placement='right'
                  overlay={
                    <Tooltip id='right'>
                      Take a go at some of our random quizzes, tests and have fun.
                    </Tooltip>
                    }>
                  <NavDropdown title="TESTS" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/randomtests">Random Fun Quiz</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Zenith Quiz</NavDropdown.Item>
                  </NavDropdown>
                  </OverlayTrigger>
                <Nav.Link href="#link">BLOG</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
              <Nav.Link href="#link">LOGIN</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
        </div>
  );
}

export default TutorialHeader;