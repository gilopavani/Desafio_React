import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from "react-bootstrap";
import './Header.css'



const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">
  {/* <i class="bi bi-alarm-fill text-warning" style={{ fontSize: 50 }}></i> */}
  <i class="bi bi-calendar-fill text-warning" id='icone'></i>
    IAgenda
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Sobre</Nav.Link>
      <NavDropdown title="Teste" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          Separated link
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Teste</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      Teste
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default Header
