import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function history() {
  return (
    
    <Container>
      <Row>
        <Col sm={8}>
            <h1 style={{marginTop:"100px",marginBottom:"20px"}}>History of Kakali</h1>
            <p style={{marginTop:"20px",marginBottom:"50px"}}>
              We take pride in 
              recognizing and celebrating the achievements of our students of Kakali, who excel in academics, sports and cultural activities.
            </p>
        </Col>
        <Col sm={4}>
        <img src="awards.svg" width="400" height="400" style={{marginTop:"50px",marginBottom:"50px"}} className='heroImageInner'/>
        </Col>
      </Row>
    </Container>
    
  )
}

export default history