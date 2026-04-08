import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import events from '../events.json';
import Navigation from "../components/Navigation.js"
import Footer from '../components/Footer';

function EventsPage() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoveredButton, setHoveredButton] = useState(null);

    return (
        <div style={{ backgroundColor: '#110325', minHeight: '100vh', padding: '0px' }}>
            <Navigation/>
            {/* Header */}
            <div style={{
                background: 'linear-gradient(135deg, #0a0a1a 0%, #2d0060 50%, #6d2f8f 100%)',
                padding: '100px 0 80px 0',
                textAlign: 'center',
                marginBottom: '60px',
            }}>
                <Container>
                    <h1 className="fw-bold text-white" style={{ fontSize: '3.5rem', marginBottom: '20px'}}>
                        Upcoming Events
                    </h1>
                    <p style={{
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '1.1rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                    }}>
                        Join us for exciting events, workshops, and networking opportunities throughout the semester.
                    </p>
                </Container>
            </div>

            <Container>
                {/* Title */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold text-white mt-3" style={{ fontSize: '2.5rem' }}>
                        All Events
                    </h2>
                </div>

                {/* Events Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '24px',
                        paddingBottom: '80px'
                    }}
                >
                    {events.map((event, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                                boxShadow: hoveredIndex === index
                                    ? '0 16px 40px rgba(123, 0, 255, 0.4)'
                                    : 'none',
                                borderRadius: '16px',
                            }}
                        >
                            <Card className="h-100 border-0 rounded-4" style={{ overflow: 'hidden'}}>

                                {/* Event Poster */}
                                <Card.Img
                                    variant="top"
                                    src={event.image}
                                    style={{
                                        height: '220px',
                                        objectFit: 'cover',
                                        objectPosition: 'top',
                                    }}
                                />

                                <Card.Body className="d-flex flex-column p-3" style={{ backgroundColor: '#ffffff' }}>

                                    {/* Date and Time */}
                                    <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '4px' }}>
                                        {event.date} | {event.time}
                                    </p>

                                    {/* Title in purple */}
                                    <Card.Title className="fw-bold" style={{ fontSize: '1.1rem', color: '#7B00FF' }}>
                                        {event.title}
                                    </Card.Title>

                                    {/* Location */}
                                    <p style={{ fontSize: '0.85rem', color: '#555', marginBottom: '12px' }}>
                                        📍 {event.location}
                                    </p>

                                    {/* Register Button */}
                                    <Button
                                        className="mt-auto w-100 fw-bold"
                                        onMouseEnter={() => setHoveredButton(index)}
                                        onMouseLeave={() => setHoveredButton(null)}
                                        style={{
                                            backgroundColor: hoveredButton === index ? '#512888' : '#7B00FF',
                                            border: 'none',
                                            borderRadius: '8px',
                                            padding: '12px',
                                            transition: 'background-color 0.2s ease',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Register
                                    </Button>

                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>

            </Container>
            <Footer/>
        </div>
    );
}

export default EventsPage;