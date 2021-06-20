import React from 'react'
import { Navbar ,Container,Nav,NavDropdown  } from 'react-bootstrap'
export const Header = () => {
    return (
      < div className="header">
            <Navbar className="Nav" bg="light" expand="lg">
      <Container>
    <Navbar.Brand href="https://www.codingninjas.com/">
        <img  src="https://www.codingninjas.com/assets-landing/images/CNLOGO.svg" width="90" height="90">
        </img>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        
        <NavDropdown title="Courses" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">C++ Foundation With DSA</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">JAVA Foundation With DSA</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Interview Preparation Course</NavDropdown.Item>
          <NavDropdown.Divider />
        
        </NavDropdown>
        <NavDropdown title="Practice" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Code problems</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Interview Experience</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Guided Path</NavDropdown.Item>
          <NavDropdown.Divider />
          
        </NavDropdown>
        <Nav.Link href="#home">Events</Nav.Link>
        <Nav.Link href="#home">Codingninjas</Nav.Link>
        <Nav.Link href="#home">Blogs</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
       </div>
    )
}
