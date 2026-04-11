import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import events from '../events.json';

function Events() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoveredButton, setHoveredButton] = useState(null);

    return (
        <section style={{ backgroundColor: '#110325', padding: '60px 0' }}>
            <Container>

                {/* Header */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold text-white" style={{ fontSize: '2.5rem' }}>Upcoming Events</h2>
                </div>

                {/* Scrollable Row */}
                <div
                    className="hide-scrollbar"
                    style={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: '24px',
                        paddingBottom: '16px',
                        scrollSnapType: 'x mandatory',
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none',
                        flex: 1,
                        justifyContent: 'center'
                    }}
                >
                    {events.map((event, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                minWidth: '320px',
                                maxWidth: '320px',
                                scrollSnapAlign: 'start',
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

                                    {/* Title */}
                                    <Card.Title className="fw-bold" style={{ fontSize: '1.1rem', color: '#7B00FF' }}>
                                        {event.title}
                                    </Card.Title>

                                    {/* Location */}
                                    <p style={{ fontSize: '0.85rem', color: '#555', marginBottom: '12px' }}>
                                        {event.location}
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
        </section>
    );
}

export default Events;