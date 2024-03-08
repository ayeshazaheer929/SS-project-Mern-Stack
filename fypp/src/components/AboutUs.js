import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">About Us</h2>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                We are dedicated to providing accessible and quality healthcare services through innovative online doctor consultations and pharmacy solutions.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Values</Card.Title>
              <Card.Text>
                Patient-centricity, Innovation, Integrity, and Collaboration are the core values that guide our every interaction and decision.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Meet the Team</Card.Title>
              <Card.Text>
                Our diverse team of healthcare professionals, technologists, and customer service experts is committed to improving the way healthcare is delivered and experienced.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Unique Features</Card.Title>
              <Card.Text>
                With a focus on user convenience, we offer online doctor consultations, a user-friendly pharmacy module, and personalized healthcare solutions to meet individual needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
