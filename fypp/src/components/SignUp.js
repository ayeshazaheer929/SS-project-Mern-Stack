import React, { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SignUp = () => {
  const [doctorInfo, setDoctorInfo] = useState({
    name: '',
    email: '',
    password: '',
    specialty: '',
    experience: '',
    importantDocs: '',
    license: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here, for example, send the doctorInfo to the server
    console.log('Doctor Signup Info:', doctorInfo);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '400px', padding: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="text-center mb-4">Doctor Signup</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={doctorInfo.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={doctorInfo.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              value={doctorInfo.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formSpecialty">
            <Form.Label>Specialty</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your specialty"
              name="specialty"
              value={doctorInfo.specialty}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formExperience">
            <Form.Label>Experience</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your experience"
              name="experience"
              value={doctorInfo.experience}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formImportantDocs">
            <Form.Label>Important Docs</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter important documents"
              name="importantDocs"
              value={doctorInfo.importantDocs}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formLicense">
            <Form.Label>License</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your license"
              name="license"
              value={doctorInfo.license}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Link to="/signup" className="w-100 mt-3">
  <Button variant="primary" type="submit">
    Sign Up
  </Button>
</Link>
        </Form>
      </Card>
    </Container>
  );
};

export default SignUp;
