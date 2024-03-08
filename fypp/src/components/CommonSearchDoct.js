import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';

const CommonlySearchDoct = () => {
  const doctorTypes = [
    'General Practitioner',
    'Cardiologist',
    'Orthopedic Surgeon',
    'Dermatologist',
    'Ophthalmologist',
    'Pediatrician',
    'Gynecologist',
    'Psychiatrist',
    'Dentist',
    'Urologist',
  ];

  return (
    <div>
      <Container className="mt-4" style={{ backgroundColor: '#e6e6fa' }}>
  <Card bg="primary" text="white" style={{  borderRadius: '10px', border: 'none' }}>
    <Card.Body>
      <Card.Title className="mb-4">Commonly Searched Doctors</Card.Title>
      <Table striped bordered hover responsive style={{border: 'none' }}>
        <thead>
          <tr>
            <th style={{ border: 'none' }}>Type 1</th>
            <th style={{ border: 'none' }}>Type 2</th>
            <th style={{ border: 'none' }}>Type 3</th>
            <th style={{ border: 'none' }}>Type 4</th>
          </tr>
        </thead>
        <tbody>
          {doctorTypes.map((type, index) => (
            <tr key={index} style={{ border: 'none' }}>
              <td>{type}</td>
              <td>{doctorTypes[index + 1]}</td>
              <td>{doctorTypes[index + 2]}</td>
              <td>{doctorTypes[index + 3]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card.Body>
  </Card>
</Container>


    </div>
  );
};

export default CommonlySearchDoct;
