import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown,Form } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-fix">
    <Container fluid>
      <Navbar.Brand href="#"><img src="/Images/Logo.svg" alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0 nav-margin"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Service</Nav.Link>
          <Nav.Link href="#action2">Feature</Nav.Link>
          <Nav.Link href="#action2">Product</Nav.Link>
          <Nav.Link href="#action2">Testimonial</Nav.Link>
          <Nav.Link href="#action2">FAQ</Nav.Link>
          {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown> */}
         
        </Nav>
        <div className='btn-div'>
        <Nav.Link href="#action2" >Login</Nav.Link> 
        <Button>Sign Up</Button>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header