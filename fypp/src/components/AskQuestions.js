import React, { Component } from 'react'
import { Container, Card, Button } from 'react-bootstrap';

export class AskQuestions extends Component {
  
  render() {
    return (
      <div>
        <Container>
     
     <div className="mt-4">
       <h3 className="mb-4" style={{ fontSize: '1.3rem' }}>
       Questions
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
          height: '130px', // Set the desired height
          position: 'relative',
        }}
        className="card-img"
      >
        <Card.ImgOverlay>
          {/* Remove Card.Title and Card.Text here */}

          {/* Add a list with bold points on the left side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
            <div style={{ flexBasis: '63%' }}>
              <ul style={{ listStyleType: 'disc', padding: '3' }}>
                <li >Discuss your symptoms and get personalized advice from experienced doctors.</li>
                <li >Ask medical questions and receive expert guidance tailored to your health concerns.</li>
                <li >Connect with healthcare professionals to seek answers and insights for your well-being.</li>
              </ul>
            </div>

            {/* Add a Button with a little longer width */}
            <Button variant="primary"  style={{ width: '160px', backgroundColor: '#783cd7',
        border: 'none' }}>
              Ask Question
            </Button>
          </div>
        </Card.ImgOverlay>
      </div>
    </Card>
  
     </Container>
      </div>
    )
  }
}

export default AskQuestions
