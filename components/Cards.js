import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import styles from "../styles/cards.module.css";
import { Col, Container, Row } from 'react-bootstrap';

function Cards() {
  return (
    <div className="container">
     <h1 className={styles.cardHeading}>Pillars of School</h1>
    <div className='container'>
    <CardGroup className={styles.cardSection}>      
      <Card className={styles.card1}>
        <Card.Img variant="top" src="eg.jpg" />
        <Card.Body>
          <Card.Title>Bandana Roy</Card.Title>
          <Card.Text>
            President
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className={styles.card2}>
        <Card.Img variant="top" src="eg.jpg" />
        <Card.Body>
          <Card.Title>Soumitra Banerjee</Card.Title>
          <Card.Text>
            Secretery and treasurer
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card className={styles.card3}>
        <Card.Img variant="top" src="eg.jpg" />
        <Card.Body>
          <Card.Title>Anajana Chatterjee</Card.Title>
          <Card.Text>
            Vice President
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
    </div>
    <section>

 

    </section>
    </div>
  );
}

export default Cards;