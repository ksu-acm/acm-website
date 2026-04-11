import '../App.css';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../components/Logo.js';
import hack from '../img/hack_picture.jpeg'
import net from '../img/networking.png'
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from "react-bootstrap";
import Navigation from "../components/Navigation.js"


function Home() {
  return (
  <div className='App'>
    <Navigation/>
    <Container fluid className="banner vh-100 d-flex justify-content-center align-items-center">
        <div className='col row fw-bold text-white text-center'>
          <Logo/>
        </div>
    </Container>
  <div className="club-items text-center">
    <div className="row mx-0">
      <div className="col">
        <h2>8</h2>
        <p>Officers</p>
      </div>
      <div className="col">
        <h2>92</h2>
        <p>Members</p>
      </div>
      <div className="col">
        <h2>40</h2>
        <p>Events</p>
      </div>
      <div className="col">
        <h2>6</h2>
        <p>Emails/Newsletters</p>
      </div>
    </div>
</div>
<div className="offer-items">
  <h1>What We Offer</h1>
  <p>Join a thriving community of students passionate about technology and innovation</p>
  <div className="row">
    <div className="offer-container col" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', padding: '0' }}>
    <img src={net} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 16px', background: 'linear-gradient(to top, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.4) 80%,transparent)'
      }}>
      <h4 style={{ color: '#fff', fontWeight: 'bold', marginBottom: '4px' }}>Networking Events</h4>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginBottom: 0 }}>
            Connect with fellow students, alumni, and tech companies to build lasting professional relationships.
          </p>
        </div>
      </div>
    <div className="offer-container col" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', padding: '0' }}>
      <img src={hack} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 16px', background: 'linear-gradient(to top, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.4) 80%,transparent)'
          }}>
          <h4 style={{ color: '#fff', fontWeight: 'bold', marginBottom: '4px' }}>Hackathons</h4>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginBottom: 0 }}>
              Participate in exciting coding competitions and hackathons to challenge yourself and win prizes.
            </p>
            </div>
          </div>
        </div>
      </div>
    <Footer />
  </div>
  );
}

export default Home;
