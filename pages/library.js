import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "../styles/lib.module.css";

function library() {
  return (
    <Container>
    <Row className={`d-flex flex-col-reverse {styles.libRow}`}>
        <Col sm={8} className={styles.libCol}>
            <h1 style={{ marginTop: "100px", marginBottom: "20px" }} className={styles.libHeading}>Library</h1>
            <h3>Empowering Minds, Expanding Horizons</h3>
            <p style={{ marginTop: "20px", marginBottom: "50px" }}>
            Welcome to Kakali school's library, a vibrant hub of learning and exploration. Our library provides students, teachers, and staff with access to a vast collection of resources, fostering academic excellence, creativity, and a love for reading.

            </p>

            <h3>Library Features:</h3>
            <ul>
                <li>Book Collection: Over 10000 books, including fiction, non-fiction, biographies, and reference materials</li>
                <li>Digital Resources: Online databases, e-books, and educational software</li>
                <li>Research Assistance: Trained librarians provide guidance on research skills and information literacy</li>
                <li>Quiet Study Areas: Comfortable seating and quiet spaces for individual study</li>
                <li> Collaborative Workspaces: Group study tables and multimedia facilities
                </li>
            </ul>

            <h3>Library Services:</h3>
            <ul>
                <li>Book Borrowing: Students can borrow books for up to [number] weeks</li>
                <li>Interlibrary Loan: Access to books from other libraries.</li>
                <li>Research Help: Librarians provide research assistance and guidance</li>
                <li>Literacy Programs: Author visits, book clubs, and reading challenges</li>
                <li>Digital Literacy: Training on digital tools and online resources</li>
            </ul>
            <h3>Collections:</h3>
            <ul>
                <li>Fiction: Novels, poetry, and short stories</li>
                <li>Non-Fiction: Biographies, history, science, and more</li>
                <li>Reference: Encyclopedias, dictionaries, and atlases</li>
                <li>Reference: Encyclopedias, dictionaries, and atlases</li>
            </ul>
            <h3>Library Team:</h3>
            <ul>
                <li>Librarian: [Name], [Qualifications], [Contact Information]</li>
                <li>Library Assistants: [Names], [Contact Information]</li>
            </ul>
        </Col>
        <Col sm={4} className={styles.imgCol}>
            <img src="lib.svg" width="300" height="300" style={{ marginTop: "150px", marginBottom: "50px" }} className={styles.heroImageInner} />
        </Col>
    </Row>
    {/* <Row>
    <Col sm={4}>
            <img src="eg.jpg" width="400" height="400" style={{ marginTop: "140px", marginBottom: "50px" }} className='heroImageInner' />
        </Col>
        <Col sm={8}>
            <h1 style={{ marginTop: "100px", marginBottom: "20px" }}>Library</h1>
            <p style={{ marginTop: "20px", marginBottom: "50px" }}>A school's medical care is a crucial aspect of its infrastructure, ensuring the safety and well-being of students and staff. A dedicated medical room should be equipped with basic first-aid supplies, essential medications, and comfortable seating or a bed for those who may need rest or immediate attention. Ideally, a trained nurse or medical professional should be present during school hours to handle minor injuries, sudden illnesses, or emergencies. The medical care facility should also include protocols for managing more serious health issues, such as partnerships with local hospitals or clinics for swift response and referrals. Additionally, schools should conduct regular health checks, vaccination drives, and workshops on hygiene and wellness to promote a healthy environment. Clear policies for handling allergic reactions, chronic conditions, and special health needs are essential to ensure every student receives appropriate care.  Overall, a strong medical care system in schools fosters a secure and nurturing environment, providing parents with peace of mind and supporting students' physical and mental health.</p>
        </Col>
       
    </Row> */}
    {/* <Row style={{marginBottom:"100px"}}>
        <Col sm={8}>
            <h1 style={{ marginTop: "100px", marginBottom: "20px" }}>Library</h1>
            <p style={{ marginTop: "20px", marginBottom: "50px" }}>A school's medical care is a crucial aspect of its infrastructure, ensuring the safety and well-being of students and staff. A dedicated medical room should be equipped with basic first-aid supplies, essential medications, and comfortable seating or a bed for those who may need rest or immediate attention. Ideally, a trained nurse or medical professional should be present during school hours to handle minor injuries, sudden illnesses, or emergencies. The medical care facility should also include protocols for managing more serious health issues, such as partnerships with local hospitals or clinics for swift response and referrals. Additionally, schools should conduct regular health checks, vaccination drives, and workshops on hygiene and wellness to promote a healthy environment. Clear policies for handling allergic reactions, chronic conditions, and special health needs are essential to ensure every student receives appropriate care.  Overall, a strong medical care system in schools fosters a secure and nurturing environment, providing parents with peace of mind and supporting students' physical and mental health.</p>
        </Col>
        <Col sm={4}>
            <img src="eg.jpg" width="400" height="400" style={{ marginTop: "150px", marginBottom: "50px" }} className='heroImageInner' />
        </Col>
    </Row> */}
</Container>
  )
}

export default library