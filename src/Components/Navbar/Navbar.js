import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import Logo from '../../images/Spefind-logo.png';
import { BsArrowRight } from 'react-icons/bs';
import './Navbar.css';

const Header = () => {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split('/');

  return (
    <Navbar expand="lg" className="navbar-main">
      <Container>
        <div className="d-flex align-items-center">
          <Navbar.Brand href="/">
            <img src={Logo} alt="logo" className="headerLogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-gap">
            <Nav.Link href="/" className={splitLocation[1] === '' ? 'active' : ''}>
              Home
            </Nav.Link>
            <Nav.Link
              href="./about"
              className={splitLocation[1] === 'about' ? 'active' : ''}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="./explore"
              className={splitLocation[1] === 'explore' ? 'active' : ''}
            >
              Explore
            </Nav.Link>
            <Nav.Link
              href="./blog"
              className={splitLocation[1] === 'blog' ? 'active' : ''}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              href="./contact"
              className={splitLocation[1] === 'contact' ? 'active' : ''}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="./login"
              className={splitLocation[1] === 'login' ? 'active' : ''}
              id="logBtn"
            >
              Log In
              <BsArrowRight className="arrow" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
