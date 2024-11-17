import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import Link from 'next/link';


const Header=()=> {
  return (
    <Navbar expand="lg" className="mainNav">
      <Container>
     <Link href="/"> <img src="logo.jpeg" width="100" height="90" className='navImage'/></Link>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="/gallery" className='navItems' style={{}}>Gallery</Nav.Link>
            {/* <Link href='/gallery'>Gallery</Link> */}
          
            <NavDropdown title="Infrastructure" id="basic-nav-dropdown" className='navItems'>
              <NavDropdown.Item href="/general">General</NavDropdown.Item>
              <NavDropdown.Item href="/medical">Medical</NavDropdown.Item>
              <NavDropdown.Item href="/lab">Laboratories</NavDropdown.Item>
             
              <NavDropdown.Item href="/library">
                Libraries
              </NavDropdown.Item>
              <NavDropdown.Item href="/playroom">
                Playrooms
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="/history">History</NavDropdown.Item>
              <NavDropdown.Item href="/mission">
                Mission and vision
              </NavDropdown.Item>
              <NavDropdown.Item href="/schoolManagement">School Management</NavDropdown.Item>
              <NavDropdown.Item href="/teacher">Teachers</NavDropdown.Item>
             
              <NavDropdown.Item href="/awards">
                Awards and Accolades
              </NavDropdown.Item>
              <NavDropdown.Item href="/prayer">
                Prayer
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Academics" id="basic-nav-dropdown">
              <NavDropdown.Item href="/uniform">School Uniforms</NavDropdown.Item>
              <NavDropdown.Item href="/calender">
                Holidays
              </NavDropdown.Item>
              <NavDropdown.Item href="/rules">Rules and Regulations</NavDropdown.Item>
              <NavDropdown.Item href="/fees">Fees Structure</NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            {/* <Link href='/contact'>Contact Us</Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;