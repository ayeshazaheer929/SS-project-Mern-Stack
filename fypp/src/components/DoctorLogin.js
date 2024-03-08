import React from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DoctorLogin = () => {
  const handleDoctorLogin = () => {
    // Add your doctor login logic here
  };

  const handleUserLogin = () => {
    // Logic for redirecting to user login, if needed
  };

  const handlePharmacyLogin = () => {
    // Logic for redirecting to pharmacy login, if needed
  };

  const handleGoogleLogin = () => {
    // Add your Google login logic here for doctors
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '400px', padding: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="text-center mb-4">Doctor Login</h2>
        <Form>
          <Form.Group controlId="formDoctorUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter your username" />
          </Form.Group>

          <Form.Group controlId="formDoctorPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </Form.Group>

          <Button variant="primary" className="w-100 mb-3" onClick={handleDoctorLogin}>
            Login
          </Button>

          <div className="mb-3">
            <Link to="/login">
              <Button variant="link" className="w-100" onClick={handleUserLogin}>
                Login as a User
              </Button>
            </Link>

            <Link to="/pharmacyLogin">
              <Button variant="link" className="w-100" onClick={handlePharmacyLogin}>
                Login as a Pharmacy
              </Button>
            </Link>
          </div>

          <div className="text-center">
      
            <Button variant="outline-primary" onClick={handleGoogleLogin} className="mt-3" >
              Login with Google
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default DoctorLogin;
