import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "../styles/medical.module.css";

function Medical() {
    return (
        <Container>
            <Row className={styles.mediRow}>
                <Col sm={8} className={styles.medCol}>
                    <h1 style={{ marginTop: "100px", marginBottom: "20px" }} className={styles.medHeading}>Medical Care</h1>
                    <h3>Caring for the Health and Wellbeing of Our Students</h3>
                    <p style={{ marginTop: "20px", marginBottom: "50px" }}>
                    At Kakali, we prioritize the health and wellbeing of our students. Our medical room is a safe and welcoming space where students can receive medical attention and support during school hours. Our school nurse and medical team are dedicated to providing quality care and promoting healthy habits.

                    </p>
                    <h3>Services:</h3>
                    <ul>
                        <li>Medical assessments and treatments.</li>
                        <li>First aid and emergency response.</li>
                        <li>Medication administration.</li>
                        <li>Health education and counseling.</li>
                        <li>Referrals to external healthcare providers.</li>
                    </ul>
                    <h3>Medical Room Facilities:</h3>
                    <ul>
                        <li>Clean and comfortable treatment area.</li>
                        <li>Fully equipped with medical supplies and equipment.</li>
                        <li>Private area for confidential consultations.</li>
                        <li>Access to telemedicine services.</li>
                    </ul>
                    <h3>Emergency Procedures:</h3>
                    <ul>
                        <li>In case of an emergency, please dial [Emergency Contact Number]</li>
                        <li> Follow school protocols for evacuation and emergency response
                        </li>
                    </ul>
                </Col>
                <Col sm={4} className={styles.imgCol}>
                    <img src="medical.svg" width="400" height="400" style={{ marginTop: "150px", marginBottom: "50px", marginLeft:"20px" }} className={styles.heroImageInner} />
                </Col>
            </Row>
        </Container>
    );
}

export default Medical;