import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styles from "../styles/rule.module.css";

function rules() {
  return (
    <Container>
    <Row className={styles.ruleRow}>
      <Col sm={8} className={styles.ruleCol}>
          <h1 style={{marginTop:"100px",marginBottom:"20px"}} className={styles.ruleHeading}>General Rules</h1>
          <p style={{marginTop:"20px",marginBottom:"50px"}}>
            We strive to maintain a safe, respectful and productive learning environment at Kakali. Our rules and regulations are designed to ensure all students, staffs and visitors feel welcome and supported.
          </p>

          <h3>School Rules and Regulations-</h3>
          <ul>
            <li>Students must be cleaned and wea starched uniforms and must be pared nails.</li>
            <li>Students must be punctual and regular in attendance.</li>
            <li>Guardians are requested to keep in touch with Diary regularly and make sure that the diary is returned duly signed by them.</li>
            <li>For the pupils who are absent from school fore more than three days at a time guardians are requested to send an application to the class teacher stating the reason of the absence.</li>
            <li>Special arrangements cannot be made for the pupils, who for any cause, are absent from the examination.</li>
            <li>Guardians are requested to deposit fees in advance and to clear up the total fees before Annual Examination.</li>
            <li>Parents are requested to clear all the dues upto 31st december before final examination. Defaulters will not bee allowed to sit for the examination.The progress report will be withheld in all such cases.</li>
            <li>An identity card supplied by school must be produced to collect the student daily.</li>
            <li>Please affix recent photograph on ID card and change it every two years.</li>
            <li>Parents are requested to take charge of their children as soon as their classes break. No student will be allowed to leave the school during the school hours. With regard to leave, If necesarry , the decision of the school is final.</li>
            <li>One month notice must be given before a student is withdrawn from the school or one month's fee is to be paid in lieu of notice.</li>
            <li>The school leaving certificate will not be issued until all dues are fully paid T.C fee is Rs 100/- .</li>
            <li>Fees must be paid by the 15th of the current month failing which late fee for Rs 10/- will be charged for every defaulting months. Rs 50/- is to be paid as late fee for delayed payment if it is due for three months and for further enlistment in the attendance register otherwise the name will be deleted.</li>
            <li>The school authority reserves the right to alter any part of rules and regulations at any time, if necessary.</li>
            <li>The Head Mistress is the only authority to decide on any disputed matter and her decisions will be final and binding.</li>
            <li>Guardians are also requested to keep in touch with the notices notified from time to time in the notice board.</li>
            
          </ul>
      </Col>
      
      <Col sm={4} className={styles.imgCol}>
      <img src="eg.jpg" width="400" height="400" style={{marginTop:"200px",marginBottom:"50px"}} className={styles.heroImageInner}/>
      </Col>
    </Row>
    
  </Container>
  )
}

export default rules