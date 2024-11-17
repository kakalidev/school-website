import React from 'react'
import styles from "../styles/contact.module.css";
import Link from 'next/link';
function contact() {
  return (
    <div className="container">
    <div className={styles.contact}>
        <h1 style={{marginTop:"50px"}}>Contact Us</h1>
        <h3 style={{marginTop:"20px"}}>Get in touch with Kakali School</h3>

        <p>We welcome your inquiries, feedback and suggestions. Please feel free to contact us.</p>

        <iframe className={styles.map} src="https://docs.google.com/forms/d/e/1FAIpQLSdtRSWZhbDKIIgERWboOHkJpUZhiW7e1KSxdWAdalhSEuAPgA/viewform?embedded=true" width="700" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

        <h3 style={{marginTop:"50px"}}>Here are maps of our two schools to help you locate easily.</h3>
        <h3 style={{marginTop:"50px", marginBottom:"50px"}}>Kakali Primary and Kindergarten School and Kakali Vidyamandir</h3>
        
        <div className={styles.schoolMap}>
            <div className='map1'>
             <h4>Main Building (Building 1)</h4>
              <Link href="https://maps.app.goo.gl/cGcyjYdZ5Mn6AhAp8"><img src="map2.jpeg" alt="" height={200} className={styles.mapImage1}/></Link>  
            </div>
            <div className='map1'>
                 <h4 style={{marginLeft:"50px"}}>New Building (Building 2)</h4>
               <Link href="https://maps.app.goo.gl/DTkU3RAa7aAJvshBA"> <img src="map1.jpeg" alt="" height={200} style={{marginLeft:"50px"}} className={styles.mapImage2}/></Link>
            </div>
           
        </div>
    </div>
    </div>
  )
}

export default contact