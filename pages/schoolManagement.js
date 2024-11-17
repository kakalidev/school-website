import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import styles from "../styles/cards.module.css";
import { Col, Container, Row } from 'react-bootstrap';

function schoolManagement() {
  return (
    <div className='container'>
   <h1 className={styles.manageHeading}> School Management</h1>
   <p style={{marginTop:"30px", marginBottom:"50px"}}>
    At Kakali, we pride ourselves on having a dedicated and experienced management team that stives to provide a supportive and inclusive learning environment of our students.
   </p>

   <h3>Pillars of Our School-</h3>
    <CardGroup className={styles.cardSection}>      
      <Card className={styles.card1}>
        <Card.Img variant="top" src="eg.jpg"/>
        <Card.Body>
          <Card.Title>Bandana Roy</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
         
        </Card.Footer>
      </Card>
      <Card className={styles.card2}>
        <Card.Img variant="top" src="eg.jpg" />
        <Card.Body>
          <Card.Title>Soumitra Chatterjee</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      <Card className={styles.card3}>
        <Card.Img variant="top" src="eg.jpg" />
        <Card.Body>
          <Card.Title>Anajana Chatterjee</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup className={styles.cardSection}>      
      <Card className={styles.card1}>
        <Card.Img variant="top" src="eg.jpg"/>
        <Card.Body>
          <Card.Title>Swapna Banerjee</Card.Title>
          <Card.Text>
           Member
          </Card.Text>
        </Card.Body>
        <Card.Footer>
         
        </Card.Footer>
      </Card>
      <Card className={styles.card2}>
        <Card.Img variant="top" src="eg.jpg" />
        <Card.Body>
          <Card.Title>Madhushree Mukherjee</Card.Title>
          <Card.Text>
           Member
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      <Card className={styles.card3}>
        <Card.Img variant="top" src="eg.jpg" />
        <Card.Body>
          <Card.Title>Soumi Banerjee</Card.Title>
          <Card.Text>
           Member
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup className={styles.cardSection2}>      
      <Card className={styles.card4}>
        <Card.Img variant="top" src="eg.jpg"/>
        <Card.Body>
          <Card.Title>Madhumita Mukherjee Roy</Card.Title>
          <Card.Text>
           Member
          </Card.Text>
        </Card.Body>
        <Card.Footer>
         
        </Card.Footer>
      </Card>
      <Card className={styles.card5}>
        <Card.Img variant="top" src="eg.jpg" />
        <Card.Body>
          <Card.Title>Soumitra Chatterjee</Card.Title>
          <Card.Text>
           Member
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      <Card className={styles.card6}>
        <Card.Img variant="top" src="eg.jpg" />
        <Card.Body>
          <Card.Title>Anajana Chatterjee</Card.Title>
          <Card.Text>
           Member
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
    </CardGroup>
    
    <section>

 

    </section>
    </div>
  )
}

export default schoolManagement