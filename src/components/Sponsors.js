import '../App.css';
import boeing from '../img/boeing_logo.svg'
import betsol from '../img/betsol_logo.png'
import bugcrowd from '../img/bugcrowd_logo.svg'
import cboe from '../img/cboe_logo.svg'
import cerner from '../img/cerner_logo.png'
import civic from '../img/civicplus_logo.svg'
import conoco from '../img/conoco_logo.png'
import garmin from '../img/garmin_logo.svg'
import google from '../img/google_logo.svg'
import homebase from '../img/homebase_logo.svg'
import jnt from '../img/jnt_logo.png'
import koch from '../img/koch_logo.svg'
import esports from '../img/esports_logo.png'
import netsmart from '../img/netsmart_logo.jpg'
import paycom from '../img/paycom_logo.png'
import tradebot from '../img/tradebot_logo.svg'
import softek from '../img/softek_logo.png'
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from "react-bootstrap";

function Sponsors() {
    return(
        <Container fluid className="bg-light d-flex justify-content-center align-items-center">
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
      
    );
}

export default Sponsors;