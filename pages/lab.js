
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "../styles/lab.module.css";

function lab() {
  return (
    <Container>
    <Row className={styles.labRow}>
        <Col sm={8} className={styles.labCol}>
            <h1 style={{ marginTop: "100px", marginBottom: "20px" }} className={styles.labHeading}>Laboratory</h1>
            <h3> Fostering Curiosity and Innovation</h3>
            <p style={{ marginTop: "20px", marginBottom: "50px" }}>
            At Kakali, we believe that hands-on learning is essential for developing scientific literacy and critical thinking skills. Our state-of-the-art laboratories provide students with a safe and stimulating environment to explore, experiment, and discover.

            </p>

            <h3>
            Laboratory Facilities:
            </h3>
            <ul>
                <li>Physics Laboratory.</li>
                <li>Chemistry Laboratory.</li>
                <li>Biology Laboratory.</li>
                <li>Computer Science Laboratory.</li>

            </ul>
            <h3>Safety Features:</h3>
            <ul>
                <li>Personal protective equipment (PPE) for students and staff.</li>
                <li>Safety goggles, gloves, and lab coats.</li>
                <li>Emergency shower and eye wash stations.</li>
                <li>Fire extinguishers and first aid kits.</li>
            </ul>
            <h3>Equipment and Software:</h3>
            <ul>
                <li>List of major equipment and software used in each laboratory.</li>
                <li>Images of equipment and software.</li>
            </ul>

            <h3>Student Projects and Achievements:</h3>
            <ul>
                <li>Showcase of student projects and experiments.</li>
                <li>Awards and recognition received by students in science fairs and competitions.</li>
            </ul>

            <h3>Faculty and Staff:</h3>
            <ul>
                <li>Profiles of science teachers and laboratory technicians.</li>
                <li>Contact information and expertise.</li>
            </ul>
        </Col>
        <Col sm={4} className={styles.imgCol}>
            <img src="lab2.svg" width="400" height="400" style={{ marginTop: "150px", marginBottom: "50px" }} className={styles.heroImageInner} />
        </Col>
    </Row>
    {/* <Row>
    <Col sm={4}>
            <img src="eg.jpg" width="400" height="400" style={{ marginTop: "140px", marginBottom: "50px" }} className='heroImageInner' />
        </Col>
        <Col sm={8}>
            <h1 style={{ marginTop: "100px", marginBottom: "20px" }}>Laboratory</h1>
            <p style={{ marginTop: "20px", marginBottom: "50px" }}>A school's medical care is a crucial aspect of its infrastructure, ensuring the safety and well-being of students and staff. A dedicated medical room should be equipped with basic first-aid supplies, essential medications, and comfortable seating or a bed for those who may need rest or immediate attention. Ideally, a trained nurse or medical professional should be present during school hours to handle minor injuries, sudden illnesses, or emergencies. The medical care facility should also include protocols for managing more serious health issues, such as partnerships with local hospitals or clinics for swift response and referrals. Additionally, schools should conduct regular health checks, vaccination drives, and workshops on hygiene and wellness to promote a healthy environment. Clear policies for handling allergic reactions, chronic conditions, and special health needs are essential to ensure every student receives appropriate care.  Overall, a strong medical care system in schools fosters a secure and nurturing environment, providing parents with peace of mind and supporting students' physical and mental health.</p>
        </Col>
       
    </Row>
    */}
</Container>
  )
}

export default lab