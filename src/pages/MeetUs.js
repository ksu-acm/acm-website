import '../App.css';
import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import MeetUs from '../MeetUs.js';
import Navigation from "../components/Navigation.js"
import Footer from '../components/Footer';

function MeetUs() {
    return (
        <div className="App">
            <Navigation/>

            <Footer/>
        </div>
    );
}

export default MeetUs;