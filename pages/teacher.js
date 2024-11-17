import React from 'react'
import Table from 'react-bootstrap/Table';
import styles from "../styles/teacher.module.css";
function teacher() {
  return (
    <div className='container'>
    <h1 style={{marginTop:"60px", marginBottom:"60px"}} className={styles.teacherHeading}>Meet Our Teachers</h1>
    <p>
      Our dedicated and passionate teachers are the backbone of Kakali. With years of experience and expertise in their respective subjects, they provide a supportive and stimulating learning environments for our students.
    </p>


    <h3 style={{ marginBottom:"30px"}}>Teacher Profiles</h3>
    <Table striped bordered hover className='container' style={{ marginBottom:"60px"}}>
        
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Qualification</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Pre Nursery to class IV</td>
          <td>Boys</td>
          <td>Maroon pant, ties with monogram and cream colour shirts.</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Pre Nursery to class IV</td>
          <td>Girls</td>
          <td>Maroon tunics, tiees with monogram and cream colour blouses and belts.</td>
        </tr>
        
      </tbody>
    </Table>

    
    </div>
  )
}

export default teacher