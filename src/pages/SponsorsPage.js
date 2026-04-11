import '../App.css';
import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import SponsorsPage from '../SponsorsPage.json';
import Navigation from "../components/Navigation.js"
import Footer from '../components/Footer';

function SponsorsPage() {

    return (
        <div className="App">
            <Navigation/>

            <Footer/>
        </div>
    );
}

export default SponsorsPage;