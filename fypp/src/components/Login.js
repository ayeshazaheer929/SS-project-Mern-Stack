import React from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Login = () => {
  const handleLogin = () => {
    // Add your login logic here
  };

  const handleSignUp = () => {
    // Add your sign-up logic here
  };

  const handleGoogleLogin = () => {
    // Add your Google login logic here
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '400px', padding: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="text-center mb-4">User Login</h2>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter your username" />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </Form.Group>
          <Link to="/userLogin">
  <Button variant="primary" className="w-100 mb-3" onClick={handleLogin}>
    Login
  </Button>
</Link>
          
          <Link to="/doctorLogin">
              <Button variant="link" onClick={handleSignUp}>
                login as a Doctor
              </Button>
            </Link>

            <Link to="/pharmacyLogin">
              <Button variant="link" onClick={handleSignUp}>
                Login as a Pharmacy
              </Button>
            </Link>

          <div className="text-center">
            <p className="mb-1">Don't have an account? </p>
            
            <Link to="/signup">
              <Button variant="link" onClick={handleSignUp}>
                Sign Up as Doctor
              </Button>
            </Link>
            <Link to="/userSignup">
              <Button variant="link" onClick={handleSignUp}>
                Sign Up as User
              </Button>
            </Link>
            
          </div>

          <div className="text-center mt-3">
            <p>Or login with</p>
            <Button variant="outline-primary" onClick={handleGoogleLogin}>
              Login with Google
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;

