import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const SearchBar = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [doctorName, setDoctorName] = useState('');

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleDoctorNameChange = (event) => {
    setDoctorName(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Location:', selectedLocation);
    console.log('Doctor Name:', doctorName);
  };

  return (
    <div>
      <Container>
      <div className="mt-4">
        <h3 className="mb-4" style={{ fontSize: '1.3rem' }}>
          Hey, here you can find the best Doctor.
        </h3>
      </div>
        <Row className="mt-4">
          <Col md={6} xs={12}>
            <Form.Group controlId="locationDropdown">
              <Form.Label>Choose Location</Form.Label>
              <Form.Control
                as="select"
                value={selectedLocation}
                onChange={handleLocationChange}
              >
                <option value="">Select Location</option>
                <option value="city1">Lahore</option>
                <option value="city2">Islamabad</option>
                {/* Add more location options as needed */}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6} xs={12}>
            <Form.Group controlId="doctorNameTextArea">
              <Form.Label>Find a Doctor</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                value={doctorName}
                onChange={handleDoctorNameChange}
                placeholder="Enter Doctor's Name"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            
            <Button
      className="mt-3"
      variant="primary"
      style={{
        backgroundImage: 'linear-gradient(to right, #783cd7, #783cd7 )',
        border: 'none',
      }}
      onClick={handleSearch}
    >
      Search
    </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchBar;
