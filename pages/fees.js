import React from 'react'
import Table from 'react-bootstrap/Table';
import styles from "../styles/fees.module.css";

function fees() {
  return (
    <div className='container'>
    <h1 style={{marginTop:"60px", marginBottom:"60px"}} className={styles.feeHeading}>Fee Structure</h1>
    <p>We strive to provide high quality education at affordable prices. Our fees structure is designed tobe transparent and easy to understand.</p>


    <h3 style={{ marginBottom:"30px"}}>Our school's fee structure -</h3>
    <Table striped bordered hover className='container' style={{ marginBottom:"60px",width:"60%",marginLeft:"0px",border:"5px black"}}>
        
      <thead>
        <tr>
          <th>#</th>
          <th>Class</th>
         
          <th>Monthly Fees (in Rs.)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Class X</td>
          <td>1150/-</td>
          
        </tr>
        <tr>
          <td>2</td>
          <td>Class IX</td>
          <td>1150/-</td>
         
        </tr>
        <tr>
          <td>3</td>
          <td>Class VIII</td>
          <td>1150/-</td>
         
        </tr>
        <tr>
          <td>4</td>
          <td>Class VII</td>
          <td>1150/-</td>
         
        </tr>
        <tr>
          <td>5</td>
          <td>Class VI</td>
          <td>1100/-</td>
         
        </tr>
        <tr>
          <td>6</td>
          <td>Class V</td>
          <td>1100/-</td>
         
        </tr>
        <tr>
          <td>7</td>
          <td>Class IV</td>
          <td>1050/-</td>
         
        </tr>
        <tr>
          <td>8</td>
          <td>Class III</td>
          <td>1050/-</td>
         
        </tr>
        <tr>
          <td>9</td>
          <td>Class II</td>
          <td>1050/-</td>
         
        </tr>
        <tr>
          <td>10</td>
          <td>Class I</td>
          <td>1050/-</td>
         
        </tr>
        <tr>
          <td>11</td>
          <td>K.G 2</td>
          <td>920/-</td>
         
        </tr>
        <tr>
          <td>12</td>
          <td>K.G 1</td>
          <td>900/-</td>
         
        </tr>
        <tr>
          <td>13</td>
          <td>Nursery</td>
          <td>900/-</td>
         
        </tr>
        <tr>
          <td>14</td>
          <td>Pre Nursery</td>
          <td>850/-</td>
         
        </tr>
        
      </tbody>
    </Table>

    
    </div>
  )
}

export default fees