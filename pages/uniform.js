import React from 'react'
import Table from 'react-bootstrap/Table';
import styles from "../styles/uniform.module.css";
function uniform() {
  return (
    <div className='container'>
    <h1 style={{marginTop:"60px", marginBottom:"60px"}} className={styles.uniHeading}> Our Uniforms</h1>
    <p>
      At Kakali, we take pride in our distinctive and practical uniform,which promotes equality, unity and a sense of belonging among our students. <br /> <br />
      Our uniform id designed to be comfortable,durable and easy to maintain. Students are expected to wear the prescribed uniform from Monday to Friday. <br /> <br />
    </p>


    <h3 style={{ marginBottom:"30px"}}>Our primary school's uniform -</h3>
    <Table striped bordered hover className='container' style={{ marginBottom:"60px"}}>
        
      <thead>
        <tr>
          <th>#</th>
          <th>Class</th>
          <th>Students</th>
          <th>Description</th>
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

    <h3 style={{ marginBottom:"30px"}}>Our secondary school's uniform -</h3>
    <Table striped bordered hover className='container'  style={{ marginBottom:"60px"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Class</th>
          <th>Students</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>V,VI,VII,VIII</td>
          <td>Boys</td>
          <td>Off white shirt, maroon trousers, maroon tie, white socks and black shoes.</td>
        </tr>
        <tr>
          <td>2</td>
          <td>V,VI,VII</td>
          <td>Girls</td>
          <td>Off white shirt, maroon tunic upto knee, maroon tie, white socks, black shoes.</td>
        </tr>
        <tr>
          <td>3</td>
          <td>VII,IX,X</td>
          <td>Girls</td>
          <td>Off white kameez, maroon salwar, dupatta and belt.</td>
        </tr>
        
      </tbody>
    </Table>

    <h3 style={{ marginBottom:"30px"}}>Uniforms for P.T. -</h3>
    <Table striped bordered hover className='container' style={{ marginBottom:"100px"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Class</th>
          <th>Students</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>V,VI</td>
          <td>Boys</td>
          <td>Red polo t-shirt, white pant and 2 red stripes, with white socks and white keds.</td>
        </tr>
        <tr>
          <td>2</td>
          <td>V,VI</td>
          <td>Girls</td>
          <td>Red polo T shirt, white pant with 2 red stripes, with white socks and white keds.</td>
        </tr>
        <tr>
          <td>3</td>
          <td>VII</td>
          <td>Boys</td>
          <td>Yellow polo T shirt, white pant with 2 yellow stripes, with white socks and white keds.</td>
        </tr>
        <tr>
          <td>4</td>
          <td>VII</td>
          <td>Girls</td>
          <td>Yellow polo T shirt, white pant with 2 yellow stripes, with white socks and white keds.</td>
        </tr>
        <tr>
          <td>5</td>
          <td>VIII</td>
          <td>Boys</td>
          <td>Yellow polo T shirt, white pant with 2 yellow stripes, with white socks and white keds.</td>
        </tr>
        <tr>
          <td>6</td>
          <td>VIII</td>
          <td>Girls</td>
          <td>Yellow polo T shirt, white pant with 2 yellow stripes,with dupatta and belt, with white socks and white keds.</td>
        </tr>
        <tr>
          <td>7</td>
          <td>IX</td>
          <td>Boys</td>
          <td>Royal blue polo T shirt, white pant with 2 blue stripes,with white socks and white keds.</td>
        </tr>
        <tr>
          <td>8</td>
          <td>IX</td>
          <td>Girls</td>
          <td>Royal blue polo T shirt, white pant with 2 blue stripes,with dupatta and belt, with white socks and white keds.</td>
        </tr>
        <tr>
          <td>9</td>
          <td>X</td>
          <td>Boys</td>
          <td>Royal blue polo T shirt, white pant with 2 blue stripes, with white socks and white keds.</td>
        </tr>
        <tr>
          <td>8</td>
          <td>X</td>
          <td>Girls</td>
          <td>Royal blue polo T shirt, white pant with 2 blue stripes,with dupatta and belt, with white socks and white keds.</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
  )
}

export default uniform