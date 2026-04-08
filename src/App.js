import './App.css';
//import logo from './logo.svg';
import Members from './components/Members';
import Sponsors from './components/Sponsors';
import Photos from './components/Photos.js';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import Events from './components/Events.js';
import Logo from './components/Logo.js';
import profile from './img/default_profile.jpeg'
//import mitch from './img/mitchell_hutchinson_med.jpg'
//import manny from './img/manny_adeniji_med.jpg'
import sicheng from './img/sicheng_chen_med.png'
//import laura from './img/laura_legg_med.jpg'
//import nathan from './img/nathan_lee_med.png'
//import jonah from './img/jonah_bogusch_med.png'
import josh from './img/weese_josh_med.jpg'
//import cody from './img/cody_murphy_med.jpg'
import sam from './img/samuel_haynes_med.jpg'
import taj from './img/taj_ikhlaas_med.png'
import emma from './img/emma_lucas_med.jpg'
import daniel from './img/daniel_chang_med.png'
import supriya from './img/supriya_med.jpeg'
import pedro from './img/pedro_med.jpg'
import tim from './img/tim_med.jpeg'
//import nathan from './img/nathan_york_med.png'
import 'bootstrap/dist/css/bootstrap.css';
import boeing from './img/boeing_logo.svg'
import betsol from './img/betsol_logo.png'
import bugcrowd from './img/bugcrowd_logo.svg'
import cboe from './img/cboe_logo.svg'
import cerner from './img/cerner_logo.png'
import civic from './img/civicplus_logo.svg'
import conoco from './img/conoco_logo.png'
import garmin from './img/garmin_logo.svg'
import google from './img/google_logo.svg'
import homebase from './img/homebase_logo.svg'
import jnt from './img/jnt_logo.png'
import koch from './img/koch_logo.svg'
import esports from './img/esports_logo.png'
import netsmart from './img/netsmart_logo.jpg'
import paycom from './img/paycom_logo.png'
import tradebot from './img/tradebot_logo.svg'
import softek from './img/softek_logo.png'
import { Nav, Navbar, Container } from "react-bootstrap";
//import Link from 'react-scroll/modules/components/Link';
import { Component, useRef, useState } from 'react';
import CustomNavbar from './components/Navigation.js'; 
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import EventsPage from "./pages/EventsPage";
import JoinUs from "./pages/JoinUs";


function App() {
  const membersRef = useRef(null);
  const sponsorRef = useRef(null);
  const [active, setActive] = useState("about"); // initially sets about to be active

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   });
  //   setActive("about");
  // }

  // const scrollToMember = () => {
  //   window.scrollTo({
  //     top: membersRef.current.offsetTop - 58,
  //     behavior: "smooth"
  //   });
  //   setActive("members");
  // }

  //   const scrollToSponsors = () => {
  //   window.scrollTo({
  //     top: sponsorRef.current.offsetTop - 58,
  //     behavior: "smooth"
  //   });
  //   setActive("sponsors");
  // }
  // // if we want to change events to be like the mock page, then add another const here

  //   const scrollToContact = () => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: "smooth"
  //   });
  //   setActive("contacts");
  // }

  return (
  <div className='App'>
      <CustomNavbar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/join" element={<JoinUs />} />
      </Routes>
    <Container fluid className="banner vh-100 d-flex justify-content-center align-items-center">
        <div className='col row fw-bold text-white text-center'>
          <Logo/>
        </div>
    </Container>
    <Container fluid className="events-info-cards">
        <div>
          <Events/>
        </div>
    </Container>
    <Container ref={membersRef} fluid className="bg_members justify-content-center align-items-center">
        <div className='col row top-padding fw-bold text-white text-center'>
          <h3 className="d-inline-block row pb-3 text-white text-center">Members</h3>
          <h6 className="d-inline-block row pb-5 text-white text-center">Get to know the officers that make all of the ACM events possible!</h6>
        </div>
          <Container className="pb-4 text-white text-center">
            <div className="row mx-5">
              <div className="col-md">
                <img className="rounded-circle" src={supriya} alt="logo" width="100px" height="100px" />
                <h5 className="pt-3">Supriya Bolla</h5>
                <h6 className="pt-1">President</h6>
              </div>
              <div className="col-md">
                <img className="rounded-circle" src={daniel} alt="logo" width="100px" height="100px" />
                <h5 className="pt-3">Daniel Chang</h5>
                <h6 className="pt-1">Vice President</h6>
              </div>
              <div className="col-md">
                <img className="rounded-circle" src={tim} alt="logo" width="100px" height="100px" />
                <h5 className="pt-3">Timothy Tucker</h5>
                <h6 className="pt-1">Secretary</h6>
              </div>
              <div className="col-md">
                <img className="rounded-circle" src={sicheng} alt="logo" width="100px" height="100px" />
                <h5 className="pt-3">Sicheng Chen</h5>
                <h6 className="pt-1">Treasurer</h6>
              </div>
            </div>
          </Container>
          <Container className="bottom-padding text-white text-center">
            <div className="row mx-5">
              <div className="col-md">
                <img className="rounded-circle" src={emma} alt="logo" width="100px" height="100px" />
                <h5 className="pt-3">Emma Lucas</h5>
                <h6 className="pt-1">Industry Liaison</h6>
              </div>
              <div className="col-md">
                <img className="rounded-circle" src={pedro} alt="logo" width="100px" height="100px" />
                <h5 className="pt-3">Pedro Alcantar-Mendez</h5>
                <h6 className="pt-1">Event Chair</h6>
              </div>
              <div className="col-md">
                <img className="rounded-circle" src={taj} alt="logo" width="100px" height="100px" />
                <h5 className="pt-3">Taj Ikhlaas</h5>
                <h6 className="pt-1">Senior Chair</h6>
              </div>
              <div className="col-md">
                <img className="rounded-circle" src={josh} alt="logo" width="100px" height="100px" />
                <h5 className="pt-3">Dr. Joshua Weese</h5>
                <h6 className="pt-1">Advisor</h6>
              </div>
            </div>
          </Container>
      </Container>
      <Container ref={sponsorRef} fluid className="bg-light d-flex justify-content-center align-items-center">
        <div className='col row top-padding fw-bold text-dark text-center'>
          <h3 className="d-inline-block row pb-3">Sponsors and Partners</h3>
          <Container className="pt-5 text-white text-center">
            <div className="row mx-5">
              <a className="col-md" href="https://www.betsol.com/" rel="noreferrer" target="_blank" style={{height: "100px"}}>
                <div style={{backgroundImage: `url(${betsol})`, backgroundSize: '170px', backgroundPosition: "center center", backgroundRepeat: "no-repeat", height: "100%"}}></div>
              </a>
              <a className="col-md" href="https://www.boeing.com/" rel="noreferrer" target="_blank" style={{height: "100px"}}>
                <div style={{backgroundImage: `url(${boeing})`, backgroundSize: '200px', backgroundPosition: "center center", backgroundRepeat: "no-repeat", height: "100%"}}></div>
              </a>
              <a className="col-md" href="https://www.bugcrowd.com/" rel="noreferrer" target="_blank" style={{height: "100px"}}>
                <div style={{backgroundImage: `url(${bugcrowd})`, backgroundSize: '170px', backgroundPosition: "center center", backgroundRepeat: "no-repeat", height: "100%"}}></div>
              </a>
              <a className="col-md" href="https://www.cboe.com/" rel="noreferrer" target="_blank" style={{height: "100px"}}>
                <div style={{backgroundImage: `url(${cboe})`, backgroundSize: '100px', backgroundPosition: "center center", backgroundRepeat: "no-repeat", height: "100%"}}></div>
              </a>
              <a className="col-md" href="https://www.cerner.com/" rel="noreferrer" target="_blank" style={{height: "100px"}}>
                <div style={{backgroundImage: `url(${cerner})`, backgroundSize: '170px', backgroundPosition: "center center", backgroundRepeat: "no-repeat", height: "100%"}}></div>
              </a>
              <a className="col-md" href="https://www.civicplus.com/" rel="noreferrer" target="_blank" style={{height: "100px"}}>
                <div style={{backgroundImage: `url(${civic})`, backgroundSize: '125px', backgroundPosition: "center center", backgroundRepeat: "no-repeat", height: "100%"}}></div>
              </a>
            </div>
          </Container>
          <Container className="text-white text-center">
            <div className="row mx-5">
              <a className="col-md" href="https://www.conocophillips.com/" rel="noreferrer" target="_blank" style={{height: "100px"}}>
                <div style={{backgroundImage: `url(${conoco})`, backgroundSize: '200px', backgroundPosition: "center center", backgroundRepeat: "no-repeat", height: "100%"}}></div>
              </a>
              <a className="col-md" href="https://www.garmin.com/en-US/" rel="noreferrer" target="_blank" style={{height: "100px"}}>
                <div style={{backgroundImage: `url(${garmin})`, backgroundSize: '170px', backgroundPosition: "center center", backgroundRepeat: "no-repeat", height: "100%"}}></div>
              </a>
              <a className="col-md" href="https://about.google/" rel="noreferrer" target="_blank" style={{height: "100px"}}>
                <div style={{backgroundImage: `url(${google})`, backgroundSize: '150px', backgroundPosition: "center center", backgroundRepeat: "no-repeat", height: "100%"}}></div>
              </a>
              <a className="col-md" href="https://homebase.ai/" rel="noreferrer" target="_blank" style={{height: "100px"}}>
                <div style={{backgroundImage: `url(${homebase})`, backgroundSize: '200px', backgroundPosition: "center center", backgroundRepeat: "no-repeat", height: "100%"}}></div>
              </a>
              <a className="col-md" href="https://www.jntcompany.com/" rel="noreferrer" target="_blank" style={{height: "100px"}}>
                <div style={{backgroundImage: `url(${jnt})`, backgroundSize: '65px', backgroundPosition: "center center", backgroundRepeat: "no-repeat", height: "100%"}}></div>
              </a>
              <a className="col-md" href="https://www.kochind.com/" rel="noreferrer" target="_blank" style={{height: "100px"}}>
                <div style={{backgroundImage: `url(${koch})`, backgroundSize: '150px', backgroundPosition: "center center", backgroundRepeat: "no-repeat", height: "100%"}}></div>
              </a>
            </div>
          </Container>
          <Container className="bottom-padding text-white text-center">
            <div className="row mx-5">
              <a className="col-md" href="https://ksuesports.com/" rel="noreferrer" target="_blank" style={{height: "100px"}}>
                <div style={{backgroundImage: `url(${esports})`, backgroundSize: '100px', backgroundPosition: "center center", backgroundRepeat: "no-repeat", height: "100%"}}></div>
              </a>
              <a className="col-md" href="https://www.ntst.com/" rel="noreferrer" target="_blank" style={{height: "100px"}}>
                <div style={{backgroundImage: `url(${netsmart})`, backgroundSize: '215px', backgroundPosition: "center center", backgroundRepeat: "no-repeat", height: "100%"}}></div>
              </a>
              <a className="col-md" href="https://www.paycom.com/" rel="noreferrer" target="_blank" style={{height: "100px"}}>
                <div style={{backgroundImage: `url(${paycom})`, backgroundSize: '200px', backgroundPosition: "center center", backgroundRepeat: "no-repeat", height: "100%"}}></div>
              </a>
              <a className="col-md" href="https://www.tradebot.com/" rel="noreferrer" target="_blank" style={{height: "100px"}}>
                <div style={{backgroundImage: `url(${tradebot})`, backgroundSize: '170px', backgroundPosition: "center center", backgroundRepeat: "no-repeat", height: "100%"}}></div>
              </a>
              <a className="col-md" href="https://www.softekinc.com/" rel="noreferrer" target="_blank" style={{height: "100px"}}>
                <div style={{backgroundImage: `url(${softek})`, backgroundSize: '200px', backgroundPosition: "center center", backgroundRepeat: "no-repeat", height: "100%"}}></div>
              </a>
            </div>
          </Container>
        </div>
      </Container>
    <Footer />
  </div>
  );
}

export default App;
