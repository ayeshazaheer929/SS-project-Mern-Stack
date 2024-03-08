import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap';

export class Promotions extends Component {
 
  render() {
    return (
        <Container>
     
      <div className="mt-4">
        <h3 className="mb-4" style={{ fontSize: '1.3rem' }}>
        Promotions
        </h3> 
      </div>

   
        {/* First Column - Two Cards */}
        
        <Card className="text-white">
      <div
        style={{
          backgroundColor: '#F1EAFF',
          color: '#57375D',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '190px', // Set the desired height
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
            <small>Get your treatement done from top rated doctors here.</small>
          </Card.Text>
        </Card.ImgOverlay>
      </div>
    </Card>
   
      </Container>
    )
  }
}

export default Promotions
