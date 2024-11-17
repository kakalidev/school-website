
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from "../styles/gallery.module.css";
function gallery() {
  return (
    <>
    <div className="container">
    <h1 className='galleryHeading'>Gallery</h1>
    </div>
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3 abc"
      fill
    >
      <Tab eventKey="home" title="Kakali Kindergarten">
        <div className="container">
           
            <Container className={styles.studentMain}>

            <Row style={{marginTop:"100px", marginBottom:"100px"}} className="rowSection">
                <Col>
                
                    <Card className={styles.card1}>
                        <Card.Img variant="top" src="gal6.jpeg" className="img1"/>
                        
                      
                    </Card>
                </Col>
                <Col>
                <Card className={styles.card1}>
                        <Card.Img variant="top" src="gal7.jpeg" className="img1"/>
                        
                      
                    </Card>
                       
                  
                </Col>
                <Col>
                <Card className={styles.card1}>
                        <Card.Img variant="top" src="gal8.jpeg" className="img1"/>
                        
                      
                    </Card>
                </Col>
            </Row>
            <Row style={{marginBottom:"100px"}} className="rowSection">
                <Col>
                
                <Card className={styles.card1}>
                        <Card.Img variant="top" src="gal9.jpeg" className="img1"/>
                        
                      
                    </Card>
                </Col>
                <Col>
                <Card className={styles.card1}>
                        <Card.Img variant="top" src="gal10.jpeg" className="img1"/>
                        
                      
                    </Card>
                </Col>
                <Col>
                <Card className={styles.card1}>
                        <Card.Img variant="top" src="gal11.jpeg" className="img1"/>
                        
                      
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
        
      </Tab>
      <Tab eventKey="profile" title="Kakali Vidyamandir">
       <div className="container">
       <Container className={styles.studentMain}>
            
            <Row style={{marginTop:"100px", marginBottom:"100px"}} className="rowSection">
                <Col>
                
                <Card className={styles.card1}>
                        <Card.Img variant="top" src="gal3.jpeg" className="img1"/>
                        
                      
                    </Card>
                </Col>
                <Col>
                <Card className={styles.card1}>
                        <Card.Img variant="top" src="gal4.jpeg" className="img1"/>
                        
                      
                    </Card>
                </Col>
                <Col>
                <Card className={styles.card1}>
                        <Card.Img variant="top" src="gal5.jpeg" className="img1"/>
                        
                      
                    </Card>
                </Col>
            </Row>
            <Row style={{marginBottom:"100px"}} className="rowSection">
                <Col>
                
                <Card className={styles.card1}>
                        <Card.Img variant="top" src="gal13.jpeg" className="img1"/>
                        
                      
                    </Card>
                </Col>
                <Col>
                <Card className={styles.card1}>
                        <Card.Img variant="top" src="gal14.jpeg" className="img1"/>
                        
                      
                    </Card>
                </Col>
                <Col>
                <Card className={styles.card1}>
                        <Card.Img variant="top" src="gal15.jpeg" className="img1"/>
                        
                      
                    </Card>
                </Col>
            </Row>
        </Container>
       </div>
      </Tab>
     
    </Tabs>
    </>
  );
}

export default gallery;