import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="no-underline text-white">
            Online Dictionary
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "aqua" : "white",
              })}
              className="no-underline"
            >
              Dictionary
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="/aboutus"
              style={({ isActive }) => ({
                color: isActive ? "aqua" : "white",
              })}
              className="no-underline"
            >
              About Us
            </NavLink>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
