import '../App.css';
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <Navbar className="navigation custom-nav" sticky="top" expand="lg" collapseOnSelect>
        <Container>
            <Navbar.Brand className="fw-bold">
            <img src={new URL("https://upload.wikimedia.org/wikipedia/commons/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg")}
             alt="logo" width="35px" height="35px" />{' '}
            K-STATE ACM
            </Navbar.Brand>
            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse>
            <Nav className="ms-auto fw-bold fs-6">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link href="#meet-us">Meet Us</Nav.Link>
                <Nav.Link href="#sponsors">Sponsors</Nav.Link>
                <Nav.Link as={Link} to="/events">Events</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Navigation;