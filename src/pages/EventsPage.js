import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import events from '../events.json';

function EventsPage() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoveredButton, setHoveredButton] = useState(null);

    return (
        <div style={{ backgroundColor: '#110325', minHeight: '100vh', padding: '60px 0' }}>
            <Container>
                {/* Header */}
                <div className="text-center mb-5">
                    <Link to="/" style={{ color: '#7B00FF', fontSize: '0.9rem', textDecoration: 'none' }}>
                        ← Back to Home
                    </Link>
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
                            <Card className="h-100 border-0 rounded-4" style={{ overflow: 'hidden' }}>

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
        </div>
    );
}

export default EventsPage;