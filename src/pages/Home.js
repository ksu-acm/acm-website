import '../App.css';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../components/Logo.js';
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
    <div className="offer-container col">
      <h4>Networking Events</h4>
        {/* Add an image about networking */}
      <p>Connect with fellow students, alumni, and tech companies to build lasting professional relationships.</p>
    </div>
    <div className="offer-container col">
      <h4>Hackathons</h4>
        {/* Add an image about hackathons */}
      <p>Participate in exciting coding competitions and hackathons to challenge yourself and win prizes.</p>
    </div>
  </div>
</div>
    <Footer />
  </div>
  );
}

export default Home;
