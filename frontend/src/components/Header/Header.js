import React from 'react'
import {
  FormControl,
  Form,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Link,useNavigate } from "react-router-dom";
import { logout } from '../../actions/userActions';

function Header({setSearch}) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  }

  return (
    <Navbar  expand="lg" bg="primary" variant="dark">
    <Container>
      <Navbar.Brand>
        <Link to="/">Note Zipper</Link>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
            <Form>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
        </Nav>
        <Nav>
              <Nav.Link href="/mynotes">
                <Link to="/mynotes">
                 My Notes
                </Link>
                </Nav.Link>
              <NavDropdown id="collasible-nav-dropdown">
                <NavDropdown.Item href="/profile"> My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutHandler}>Logout
                </NavDropdown.Item>
              </NavDropdown>
            <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
