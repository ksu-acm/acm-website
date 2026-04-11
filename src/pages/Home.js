import '../App.css';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../components/Logo.js';
import hack from '../img/hack_picture.jpeg'
//import profile from '../img/default_profile.jpeg'
//import mitch from '../img/mitchell_hutchinson_med.jpg'
//import manny from '../img/manny_adeniji_med.jpg'
import sicheng from '../img/sicheng_chen_med.png'
//import laura from '../img/laura_legg_med.jpg'
//import nathan from '../img/nathan_lee_med.png'
//import jonah from '../img/jonah_bogusch_med.png'
//import josh from '../img/weese_josh_med.jpg'
//import cody from './img/cody_murphy_med.jpg'
import sam from '../img/samuel_haynes_med.jpg'
import taj from '../img/taj_ikhlaas_med.png'
import emma from '../img/emma_lucas_med.jpg'
import daniel from '../img/daniel_chang_med.png'
//import supriya from '../img/supriya_med.jpeg'
import pedro from '../img/pedro_med.jpg'
//import tim from '../img/tim_med.jpeg'
//import nathan from './img/nathan_york_med.png'
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
      <p>Participate in exciting coding competitions and hackathons to challenge yourself and win prizes.</p>
      <img src={hack} style={{maxWidth: "100%",maxHeight: "60%",objectFit: "contain", margin:"10px"}}/>
      
    </div>
  </div>
</div>
    <Footer />
  </div>
  );
}

export default Home;
