import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Card  from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './ImageCards.css';

function ImageCards () {
    return (
            <Container className='Card-Container'>
                <Row className='Card-Row'>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                              <Card.Title>Stoic</Card.Title>
                              <Card.Text>
                                "Chat I'm cook"
                              </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                              <Card.Title>Stoic</Card.Title>
                              <Card.Text>
                                "Chat I'm cook"
                              </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                              <Card.Title>Stoic</Card.Title>
                              <Card.Text>
                                "Chat I'm cook"
                              </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                              <Card.Title>Stoic</Card.Title>
                              <Card.Text>
                                "Chat I'm cook"
                              </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='Card-Row'>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                              <Card.Title>Stoic</Card.Title>
                              <Card.Text>
                                "Chat I'm cook"
                              </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                              <Card.Title>Stoic</Card.Title>
                              <Card.Text>
                                "Chat I'm cook"
                              </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                              <Card.Title>Stoic</Card.Title>
                              <Card.Text>
                                "Chat I'm cook"
                              </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                              <Card.Title>Stoic</Card.Title>
                              <Card.Text>
                                "Chat I'm cook"
                              </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        
      );
}

export default ImageCards;