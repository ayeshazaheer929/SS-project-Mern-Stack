import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';

const SearchBar = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [medName, setMedName] = useState('');
  const [quantity, setQuantity] = useState(1); // Added quantity state

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleMedNameChange = (event) => {
    setMedName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Math.max(1, parseInt(event.target.value, 10) || 1)); // Ensure quantity is at least 1
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Location:', selectedLocation);
    console.log('Medicine Name:', medName);
    console.log('Quantity:', quantity);
  };

  return (
    <Container>
      <div className="mt-4">
        <h3 className="mb-4" style={{ fontSize: '1.3rem' }}>
          Hey, find your Medicines easily.
        </h3>
      </div>
      <Row className="mt-4">
        <Col md={4} xs={12}>
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
        <Col md={4} xs={12}>
          <Form.Group controlId="medNameInput">
            <Form.Label>Enter Medicine Name</Form.Label>
            <Form.Control
              type="text"
              value={medName}
              onChange={handleMedNameChange}
              placeholder="e.g., Paracetamol"
            />
          </Form.Group>
        </Col>
        <Col md={2} xs={6}>
          <Form.Group controlId="quantityInput">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min={1}
            />
          </Form.Group>
        </Col>
        <Col md={2} xs={6}>
          <InputGroup className="mt-4">
            <Button
              variant="outline-secondary"
              style={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </Button>
            <Button
              variant="outline-secondary"
              style={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            className="mt-3"
            variant="primary"
            style={{
              backgroundImage: 'linear-gradient(to right, #783cd7, #783cd7)',
              border: 'none',
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
