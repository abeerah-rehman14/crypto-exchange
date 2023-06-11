import React from "react";
//import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Badge } from 'react-bootstrap';
import { BsFilePost } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import {Button} from 'antd';
import { PoweroffOutlined }
from '@ant-design/icons';
import {useNavigate} from "react-router-dom"

function Header() {

  const username = useSelector(state => state.loginUserReducer.loginUser.name)
  const navigate = useNavigate()


  const logout = ()=>{
    navigate("/")
  }

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
         
          <Button icon= {<PoweroffOutlined />} style={{border: "none"}} >Logout</Button>
          <div style={{ position: 'relative', display: 'inline-block' }}>
          
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
//onClick={()=>{editBlog(record)}}
export default Header;
