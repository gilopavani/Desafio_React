import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from "react-bootstrap";
import useAuth from '../../context/hooks/useAuth';
import './Header.css'



export default function Header() {
  const logout = useAuth().logout;

  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">
    {/* <i class="bi bi-alarm-fill text-warning" style={{ fontSize: 50 }}></i> */}
    <i class="bi bi-calendar-fill text-warning" id='icone'></i>
      IAgenda
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">Home</Nav.Link>
        <Nav.Link href="#pricing">Sobre</Nav.Link>
          {localStorage.getItem('token') ? (<Nav.Link href='/'>  <button onClick={logout}>Logout</button> </Nav.Link>) : (<Nav.Link href='/login'>  <button>Login</button> </Nav.Link>)} 
        <Nav.Link href="/agenda">Agenda</Nav.Link>
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>
  )
  
}

