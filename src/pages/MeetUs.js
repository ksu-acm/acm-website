import '../App.css';
import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Navigation from "../components/Navigation.js"
import Footer from '../components/Footer';
import Members from '../Members.json';
import "../stylesheets/Sponsor.css"

function MeetUs() {
    return (

        <div style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #2d0060 50%, #6d2f8f 100%)', minHeight: '100vh' }}>
            <Navigation/>
            <div style={{padding: '100px 0 80px 0',textAlign: 'center'}}>
                <Container>
                    <h1 className="fw-bold text-white" style={{ fontSize: '3.5rem', margin: 0, marginBottom: '20px' }}>
                        Meet the team!
                    </h1>
                    <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem',maxWidth: '600px',margin: '0 auto'}}>
                        These are the members of K-States ACM club.
                    </p>
                </Container>
            </div>
            <div style={{ padding: '40px 0 80px 0' }}>
                <Container>
                    <div style={{display: 'grid',gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',gap: '24px'}}>
                        {Members.map((member,index) =>(
                            <div className='logo-card' style={{width: "220px",height: "120px",display: "flex", flexDirection:"column",justifyContent: "center",alignItems: "center", margin:"30px" , animationDelay: `${index * 0.15}s`}}>
                                <img src={member.Photo} style={{maxWidth: "100%",maxHeight: "100%",objectFit: "contain" , borderRadius:"50%"}} />
                                <b style={{color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem',maxWidth: '600px',margin: '6px'}}>{member.Title}</b>
                                <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem',maxWidth: '600px',margin: '0 auto'}}>{member.Name}</p>
                                
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
            <Footer/>
        </div>
    );
}

export default MeetUs;