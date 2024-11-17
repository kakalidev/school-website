import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "../styles/calender.module.css";

function calender() {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <div className='container'>
            <h1 style={{ marginTop: "60px", marginBottom: "60px" }} className={styles.calHeading}>School Holidays</h1>
            <p>
              We belive that breaks are essential for students' physical and mental well-being. Our holiday calender is designed to provide students with ample time to relax, recharge and engage is extracurricular activities.
            </p>


            <h3 style={{ marginBottom: "30px" }}>Our school's calander -</h3>
            <Table striped bordered hover className='container' style={{ marginBottom: "60px" }}>

              <thead>
                <tr>
                  <th>#</th>
                  <th>Holiday Name</th>
                  <th>Date</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>English New Years Day</td>
                  <td>01-01-2024</td>
                  <td>Monday</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>School Establishment Day (KAKALI)</td>
                  <td>02-01-2024</td>
                  <td>Tuesday</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Swami Vivekananda's birthday</td>
                  <td>12-01-2024</td>
                  <td>Friday</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Netaji's birthday</td>
                  <td>23-01-2024</td>
                  <td>Tuesday</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Republic Day</td>
                  <td>26-01-2024</td>
                  <td>Friday</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Saraswati Puja</td>
                  <td>13-02-2024</td>
                  <td>Tuesday</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Thakur Panchanan Barma's birthday</td>
                  <td>14-02-2024</td>
                  <td>Wednesday</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Sabebarat</td>
                  <td>26-02-2024</td>
                  <td>Monday</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Shivratri</td>
                  <td>08-03-2024</td>
                  <td>Friday</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Dolyatra</td>
                  <td>25-03-2024</td>
                  <td>Monday</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Holi Utsav</td>
                  <td>26-03-2024</td>
                  <td>Tuesday</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Good Friday</td>
                  <td>29-03-2024</td>
                  <td>Friday</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Sri Harichand Thakur's birthday</td>
                  <td>06-04-2024</td>
                  <td>Saturday</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Eid-Ul-Fitr</td>
                  <td>10-04-2024, 11-04-2024</td>
                  <td>Wednesday and Thursday</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Neel Puja</td>
                  <td>12-04-2024</td>
                  <td>Friday</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Ambedkar's birthday and Bengali new years day</td>
                  <td>14-04-2024</td>
                  <td>Sunday</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Mahabir Jayanti</td>
                  <td>21-04-2024</td>
                  <td>Sunday</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>May Day</td>
                  <td>01-05-2024</td>
                  <td>Wednesday</td>
                </tr>

                <tr>
                  <td>19</td>
                  <td>School Foundation Day (Kakali Vidyamandir)</td>
                  <td>02-05-2024</td>
                  <td>Thursday</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Tagore's birthday</td>
                  <td>08-05-2024</td>
                  <td>Wednesday</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Summer Vacation</td>
                  <td>_ _</td>
                  <td>_ _</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Budhha Purnima and Pandit Raghunath Murmu's birthday</td>
                  <td>23-05-2024</td>
                  <td>Thursday</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Eid-Ud-Zuha</td>
                  <td>17-06-2024</td>
                  <td>Monday</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Rath-yatra</td>
                  <td>07-07-2024</td>
                  <td>Sunday</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Muharram</td>
                  <td>17-07-2024</td>
                  <td>Wednesday</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Independence Day</td>
                  <td>15-08-2024</td>
                  <td>Thursday</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Janmashtami</td>
                  <td>26-08-2024</td>
                  <td>Monday</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Fateh-Dwaj-Daham</td>
                  <td>16-09-2024</td>
                  <td>Monday</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Gandhi birthday and Mahalaya</td>
                  <td>02-10-2024</td>
                  <td>Wednesday</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Puja Vacation</td>
                  <td>_ _</td>
                  <td>_ _</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Chhat Puja</td>
                  <td>07-11-2024 and 08-11-2024</td>
                  <td>Thursday and Friday</td>
                </tr>

                <tr>
                  <td>32</td>
                  <td>Birsa Munda's birthday and Guru Nanak's birthday</td>
                  <td>15-11-2024</td>
                  <td>Wednesday</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Christmas Holiday</td>
                  <td>From 25-12-2024 to 31-12-2024</td>
                  <td>Wednesday - Tuesday</td>
                </tr>

              </tbody>
            </Table>


          </div>
        </Col>
        <Col sm={4} className={styles.imgCol}>
        <img src="infra.jpeg" width="400" height="350" style={{marginTop:"200px",marginBottom:"50px"}} className={styles.heroImageInner}/>
        </Col>
      </Row>
    </Container>
  )
}

export default calender