import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CardWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar className="Nav" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              className="NavTitulo"
              src="https://fontmeme.com/permalink/221212/a9ba95917c8cf3333dc2d049532964a0.png"
            ></img>
          </Navbar.Brand>
          <CartWidget />

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Almacen</Nav.Link>
              <Nav.Link href="#action2">Limpieza</Nav.Link>
              <Nav.Link href="#action3">Perfumeria</Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar producto..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
