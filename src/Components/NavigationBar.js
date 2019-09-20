import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #808080;
    }

    .navbar-brand, .navbar-nav .nav-link {
      color: #FF0000;

     &:hover {
         color: white;
     } 
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">RAGNAROS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='ml-auto'>
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/Games">Games</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/Movies">Movies</Nav.Link></Nav.Item>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)