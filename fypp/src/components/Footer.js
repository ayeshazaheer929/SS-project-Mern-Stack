import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-4" style={{ backgroundColor: '#554994', color: 'white' }}>
      <Container md-4>
        <Row>
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Follow Us</h5>
            <p>Stay connected on social media for updates and news.</p>
            <div className="social-icons">
              <a href="#" className="mr-2"><i className="fab fa-facebook"></i></a>
              <a href="#" className="mr-2"><i className="fab fa-twitter"></i></a>
              <a href="#" className="mr-2"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="mr-2"><i className="fab fa-instagram"></i></a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; 2023 Your Healthcare. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
