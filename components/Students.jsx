import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from "../styles/char.module.css";
function Students() {
  return (
    <Container className={styles.studentMain}>
            <h1 style={{marginTop:"100px"}} className={styles.charHeading}> Established Students</h1>
            <p className={styles.charPara}>We are proud of our vibrant and diverse alumni coummunity.</p>
            <Row style={{marginTop:"100px", marginBottom:"100px"}} className={styles.rowSection}>
                <Col>
                
                    <Card className={styles.card1}>
                        <Card.Img variant="top" src="academy1.webp" className={styles.img1}/>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                      
                    </Card>
                </Col>
                <Col>
                    <Card className={styles.card1}>
                        <Card.Img variant="top" src="academy2.webp" className={styles.img1} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                       
                    </Card>
                </Col>
                <Col>
                    <Card className={styles.card1}>
                        <Card.Img variant="top" src="academy3.webp" className={styles.img1}/>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                       
                    </Card>
                </Col>
            </Row>
            <Row style={{marginBottom:"100px"}} className={styles.rowSection}>
                <Col>
                
                    <Card className={styles.card1}>
                        <Card.Img variant="top" src="academy1.webp" className={styles.img1}/>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                      
                    </Card>
                </Col>
                <Col>
                    <Card className={styles.card1}>
                        <Card.Img variant="top" src="academy2.webp" className={styles.img1} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                       
                    </Card>
                </Col>
                <Col>
                    <Card className={styles.card1}>
                        <Card.Img variant="top" src="academy3.webp" className={styles.img1}/>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                       
                    </Card>
                </Col>
            </Row>
        </Container>
  )
}

export default Students