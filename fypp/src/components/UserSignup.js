// userSignup.js

import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

const UserSignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async() => {
    // Implement your signup logic here
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    console.log('User signed up:', { username, email, password });
    try {
        console.log('Fetch URL:', 'http://localhost:8000/signup');
        const response = await fetch('http://localhost:8000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });
  
        if (response.ok) {
          console.log('User signed up successfully');
          // Optionally, you can redirect the user or perform other actions after successful signup
        } else {
          console.log('Error signing up:', response.statusText);
        }
      } catch (error) {
        console.error('Error signing up:', error);
      }
    
  };

  return (
    <Container>
      <div className="mt-5 d-flex justify-content-center align-items-center">
        <Card style={{ width: '400px', padding: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h2 className="text-center mb-4">User Sign Up</h2>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleSignUp} className="w-100 mt-3">
              Sign Up
            </Button>
          </Form>
        </Card>
      </div>
      {/* Add space here, you can customize the height as needed */}
      <div style={{ height: '40px' }} />
      {/* Continue with your Footer component */}
    </Container>
  );
};

export default UserSignUp;
