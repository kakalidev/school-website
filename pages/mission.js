import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import styles from "../styles/mission.module.css";

function Mission() {
  return (
    <div className='container'>
      <h1 style={{marginBottom:"50px", marginTop:"50px"}} className={styles.missionHeading}>Mission and Vision</h1>
   

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Our mission: "Empowering Minds, Enriching Futures"</Accordion.Header>
        <Accordion.Body className={` d-flex justify-content-center ${styles.abc}`}>
          <p style={{marginTop:"100px", marginLeft:"50px", fontSize:"20px"}} className={styles.accordionPara}> 
          Our mission is to provide a nurturing and stimulating environment where students can achieve their highest potential academically, socially, and personally. We aim to empower students with the skills, knowledge, and values necessary to become lifelong learners and responsible global citizens.
          </p>
          <img src="mission.svg" width="400" height="400" style={{marginTop:"50px",marginBottom:"50px"}} className='heroImageInner'/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Our vision</Accordion.Header>
        <Accordion.Body className={` d-flex justify-content-center ${styles.abc}`}>
        <p style={{marginTop:"100px", marginLeft:"50px", fontSize:"20px"}} className={styles.accordionPara}>
        Our vision is to be a leading educational institution recognized for fostering innovation, inclusivity, and excellence. We strive to create an engaging learning community that inspires curiosity, creativity, and critical thinking in every student.
          </p>
          <img src="mission.svg" width="400" height="400" style={{marginTop:"50px",marginBottom:"50px"}} className='heroImageInner'/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default Mission