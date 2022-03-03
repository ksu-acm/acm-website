import './App.css';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Container } from "react-bootstrap";


function App() {
  return (
  <div className='App'>
    <Navbar className="navigation" bg="transparent" variant="dark" sticky="top" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className="fs-5 fw-bold" href="#home">
          <img src={logo} height={50} width={50} alt="logo" />
          K-STATE ACM
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
        <Nav className="ms-auto fs-6 fw-bold">
          <Nav.Link>MEMBERS</Nav.Link>
          <Nav.Link>SPONSORS</Nav.Link>
          <Nav.Link>EVENTS</Nav.Link>
          <Nav.Link>CONTACT</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="banner vh-100 d-flex justify-content-center align-items-center">
      <h1 className="fw-bold text-white text-center">K-STATE ASSOCIATION FOR COMPUTING MACHINERY</h1>
    </div>
  </div>
  );
}

export default App;
