import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Badge } from 'react-bootstrap';
import { BsFilePost } from 'react-icons/bs';
import { useSelector } from 'react-redux';

function Header({blogCount}) {

  //useSelector(state=> console.log(state))
  const username = useSelector(state => state.loginUserReducer.loginUser.name)

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>Welcome to Crypto Exchange, {username}  !</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
           
          </Nav>
         

          <div style={{ position: 'relative', display: 'inline-block' }}>
          <BsFilePost size={37} style={{color: 'darkolivegreen'}}/>
          <Badge pill style={{ position: 'absolute', bottom: -5, right: -5 }}>
            
          </Badge>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
