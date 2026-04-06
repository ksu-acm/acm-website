import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import events from '../events.json'; //events.json will be used to update events

function Events() {
    return (
        <section style={{ backgroundColor: '#110325', padding: '60px 0' }}>
            <Container>

                {/* Header */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold" style={{ fontSize: '2.5rem' }}>Upcoming Events</h2>
                </div>

                {/* Cards */}
                <Row className="g-4">
                    {events.map((event, index) => (
                        <Col key={index} md={4}>
                            <Card className="h-100 shadow-sm border-0 rounded-4">

                                {/* Event Image */}
                                <Card.Img
                                    variant="top"
                                    src={event.image}
                                    style={{ height: '220px', objectFit: 'cover', borderRadius: '16px 16px 0 0' }}
                                />

                                <Card.Body className="d-flex flex-column p-4">

                                    {/* Title */}
                                    <Card.Title className="fw-bold mb-3" style={{ fontSize: '1.2rem' }}>
                                        {event.title}
                                    </Card.Title>

                                    {/* Date, Time, Location */}
                                    <div className="mb-3" style={{ fontSize: '0.95rem', color: '#444' }}>
                                        <div className="d-flex align-items-center mb-1">
                                            <span className="me-2"></span> {event.date}
                                        </div>
                                        <div className="d-flex align-items-center mb-1">
                                            <span className="me-2"></span> {event.time}
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="me-2"></span> {event.location}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <Card.Text className="text-muted mb-4" style={{ fontSize: '0.9rem' }}>
                                        {event.description}
                                    </Card.Text>

                                    {/* Register Button */}
                                    <Button
                                        className="mt-auto w-100 fw-bold"
                                        style={{
                                            backgroundColor: '#7B00FF',
                                            border: 'none',
                                            borderRadius: '8px',
                                            padding: '12px',
                                        }}>
                                        Register
                                    </Button>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>
        </section>
    );
}

export default Events;