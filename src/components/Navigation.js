import '../App.css';
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Container } from "react-bootstrap";

function Navigation() {
    return(
        <Navbar className="navigation" bg="light" variant="light" sticky="top" expand="lg" collapseOnSelect>
        <Container>
            <Navbar.Brand className="fw-bold">
            <img src={logo} alt="logo" width="40px" height="40px" />{' '}
            K-STATE ACM
            </Navbar.Brand>
            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse>
            <Nav className="ms-auto fw-bold fs-6">
                <Nav.Link href="#meet-us">MEET US</Nav.Link>
                <Nav.Link href="#sponsors">SPONSORS</Nav.Link>
                <Nav.Link href="#events">EVENTS</Nav.Link>
                <Nav.Link href="#contact">CONTACT</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Navigation;

// No longer in use