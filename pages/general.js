import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "../styles/general.module.css";

function General() {
  return (
    <Container>
      <Row className={styles.rowSection}>
        <Col sm={8} className={styles.genCol}>
            <h1 style={{marginTop:"100px",marginBottom:"20px"}} className={styles.generalHeading}>General</h1>
            <h3>Providing a Supportive and Inspiring Environment</h3>
            <p style={{marginTop:"20px",marginBottom:"50px"}}>
            At Kakali, we believe that a well-designed infrastructure plays a crucial role in fostering academic excellence, creativity, and overall student well-being. Our school's infrastructure is carefully planned to provide a safe, comfortable, and stimulating environment for our students to learn and grow.
            </p>

            <h3>Campus Overview:
            </h3>
            <ul>
              <li>Spacious classrooms with natural light and ventilation</li>
              <li>Modern laboratories for science, technology.</li>
              <li>Well-equipped libraries with extensive book collections.</li>
              <li>State-of-the-art auditorium and performance spaces.</li>
              <li>Outdoor playgrounds and sports facilities.</li>
            </ul>

            <h3>Academic Facilities:</h3>
            <ul>
              <li>Classrooms: [number] with interactive whiteboards and digital tools</li>
              <li>Laboratories: [number] for physics, chemistry, biology, and computer science</li>
              <li>Libraries: [number] with [number] books and digital resources</li>
              <li>Art and Music Rooms: [number] with specialized equipment</li>
            </ul>
            <h3>Recreational Facilities:</h3>
            <ul>
              <li>Playground: [size] with [equipment]</li>
              <li>Sports Fields: [type]</li>
            </ul>

            <h3>Safety and Security:</h3>
            <ul style={{marginBottom:"100px"}}>
              <li>Secure entrance and exit points.</li>
              <li>CCTV surveillance.</li>
              <li>Fire alarms and sprinkler systems.</li>
              <li>Trained security personnel.</li>
            </ul>
        </Col>
        <Col sm={4}>
        <img src="infra.jpeg" width="400" height="450" style={{marginTop:"150px",marginBottom:"50px"}} className={styles.heroImageInner}/>
        </Col>
      </Row>
    </Container>
  );
}

export default General;