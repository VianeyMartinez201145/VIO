import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, Row, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import logo from "./logo.png";
import { Liquid } from "../screens/Liquid";
import "./styles.css";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="white" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={logo} // Usa la imagen importada como fuente de la ruta
                height="100"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <SearchBox className="s" />
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link>
                  <i className=""></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link>
                  <i className=""></i>Productos
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/register?redirect=/">
                <Nav.Link>
                  <i className=""></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register?redirect=/">
                <Nav.Link>
                  <i className=""></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register?redirect=/">
                <Nav.Link>
                  <i className=""></i>Regístrate
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i></i>
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Perfil</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Salir
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i></i>Inicia sesión
                  </Nav.Link>
                </LinkContainer>
              )}
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Carrito
                </Nav.Link>
              </LinkContainer>

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenue">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Usuarios</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Productos</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Ordenes</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
