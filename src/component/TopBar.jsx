import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

function TopBar() {
    let {pathname} = useLocation();
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React Crud</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link className={`custom-text ${pathname === '/' ? 'active' : ''}`} to="/" ><Nav.Item>Dashboard</Nav.Item></Link>
          <Link className={`custom-text ${pathname === '/create' ? 'active' : ''}`} to="/create" ><Nav.Item>Create</Nav.Item></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default TopBar
