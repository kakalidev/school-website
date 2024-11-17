import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "../styles/playroom.module.css";


function Playroom() {
  return (
    <Container>
      <Row style={{marginTop:"50px", marginBottom:"100px"}} className={styles.playRow}>
        <Col sm={8} className={styles.playCol}>
            <h1 style={{marginTop:"50px",marginBottom:"20px"}} className={styles.playHeading}>Playroom</h1>
            <h3>Where Learning Meets Fun
            </h3>
            <p style={{marginTop:"20px",marginBottom:"50px"}}>
            Welcome to our playroom, a vibrant and engaging space where students can explore, create, and learn through play. Our playroom is designed to foster social, emotional, and cognitive development in a safe and supportive environment.
            </p>

            <h3>Features:
            </h3>
            <ul>
              <li>Age-appropriate toys and materials.</li>
              <li>Interactive play stations (e.g., art, music, drama)</li>
              <li>Soft play area for younger students.</li>
              <li>Reading nook with diverse book selection.</li>
              <li>Building and construction zones (e.g. LEGO, blocks)</li>
            </ul>
            <h3>Playroom Activities:</h3>
            <ul>
              <li>Free play.</li>
              <li>Guided play sessions.</li>
              <li>Arts and crafts.</li>
              <li>Storytime.</li>
              <li>Indoor games (e.g., board games, puzzles)</li>
            </ul>
            <h3>Benefits of Play:</h3>
            <ul>
              <li>Enhances creativity and imagination.</li>
              <li>Develops social skills and friendships.</li>
              <li>Boosts problem-solving and critical thinking.</li>
              <li>Supports emotional intelligence and self-regulation.</li>
              <li>Fosters physical development and gross motor skills.</li>
            </ul>
            <h3>Safety and Supervision:</h3>
            <ul>
              <li>Trained staff and teachers provide supervision.</li>
              <li>Safe and clean environment.</li>
              <li>Ratio of adults to children ensures individual attention.</li>
            </ul>
           
        </Col>
        <Col sm={4} className={styles.imgCol}>
        <img src="playroom.svg" width="400" height="400" style={{marginTop:"50px",marginBottom:"50px"}} className={styles.heroImageInner}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Playroom;