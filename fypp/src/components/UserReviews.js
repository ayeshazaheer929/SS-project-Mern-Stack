import React, { Component } from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';


export class UserReviews extends Component {
  render() {
    return (
      <div>
        <Container>
        <div className="mt-4">
       <h3 className="mb-4" style={{ fontSize: '1.3rem' }}>
       Users
       </h3> 
     </div>
        <Row xs={1} md={2} lg={4} className="g-4">
      {[...Array(4)].map((_, idx) => (
        <Col key={idx}>
          <Card className="user-review-card">
            <Card.Body>
              <Card.Title>Huzaifa Ishfaq</Card.Title>
              <Card.Text>
                "Thank you, Dr. abc, for your thorough and compassionate care. Your expertise and genuine concern for my well-being truly made a difference in my healing journey."
              </Card.Text>
              <div className="user-rating">
                <p>Rating:</p>
                <div className="stars">
                  {/* Add your star icons here */}
                  {/* For example, you can use Font Awesome icons or any other library */}
                  ★★★★★
                </div>
              </div>
              <div className="user-remark">
                <p>Remark: Very Good</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </Container>
      </div>
    )
  }
}

export default UserReviews
