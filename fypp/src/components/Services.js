import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';



const Services = () => {
  return (
    <Container className="mt-4">
        <h3 className="mb-4" style={{ fontSize: '1.3rem' }}>
        What can I help you with today?</h3>
   
      <Row>
        {/* First Column - Two Cards */}
        <Col md={6} xs={12} className="mb-4">
        <Card className="text-white">
      <div
        style={{
          backgroundColor: '#DEBACE',
          color: '#57375D',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '220px', // Set the desired height
          position: 'relative',
        }}
        className="card-img"
      >
        <Card.ImgOverlay>
        <Card.Title>Consult Doctor</Card.Title>
          
          <Card.Text>
          Experience convenient healthcare access anytime, anywhere! Connect with a qualified doctor online through our user-friendly website for prompt and personalized consultations.
          </Card.Text>
          <Card.Text>
            <small>Visit doctor here.</small>
          </Card.Text>
        </Card.ImgOverlay>
      </div>
    </Card>
        
        </Col>

        {/* Second Column - One Card */}
        <Col md={6} xs={12}>
        <Card className="text-white">
      <div
        style={{
          backgroundColor: '#C2DEDC',
          color: '#0766AD',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '220px', // Set the desired height
          position: 'relative',
        }}
        className="card-img"
      >
        <Card.ImgOverlay>
        <Card.Title>Get Medicine</Card.Title>
          
          <Card.Text>
          Effortlessly refill prescriptions and access expert advice from licensed pharmacists on our website. Your online pharmacy for convenient, reliable, and accessible healthcare solutions.
          </Card.Text>
          <Card.Text>
            <small>Get your medicines here.</small>
          </Card.Text>
        </Card.ImgOverlay>
      </div>
    </Card>
         
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
