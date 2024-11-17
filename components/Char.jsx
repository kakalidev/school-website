import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from "../styles/char.module.css";
function Char() {
    return (
        <div className='container'>
            <h1 style={{marginTop:"100px"}} className={styles.charHeading} > Key differentiating characteristics of the School</h1>
            <Row style={{marginTop:"100px", marginBottom:"100px"}} className={styles.rowSection}>
                <Col>
                
                    <Card className={styles.card1}>
                        <Card.Img variant="top" src="academy1.webp" className={styles.img1}/>
                        <Card.Body>
                            <Card.Title className={styles.cardHeading}>Tomorrow’s Leaders</Card.Title>
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
                            <Card.Title className={styles.cardHeading}>Making a Difference</Card.Title>
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
                            <Card.Title className={styles.cardHeading}>Strong Bond That Lasts</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                       
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Char