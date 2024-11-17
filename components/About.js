import React from 'react'
import styles from "../styles/about.module.css";
import Image from "next/image";

function About() {
    return (
        <>
       

        <div className={styles.heroOuter}>
            <div className={styles.hero}>
                <div className={styles.heroImage}>
                    <img src="about.jpeg" width="400" height="400" className={styles.heroImageInner}/>
                </div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Kakali and Kakali Vidyamandir</h1>
                    <h4 style={{marginBottom:"30px"}}>Nursery,K.G & Primary School and High School (Co-educational) </h4>

                    <h3>Empowering Minds, Enhancing Futures</h3>
                    <p className={styles.heroText}>
                        We are revolutionizing education with compassionate teaching. Our collaborative community fosters curiosity, creativity and critical thinking.
                    </p>
                    <p className={styles.heroText}>
                        Join us in shaping the leaders of tomorrow.
                    </p>
                    <button className={styles.heroButton}>Learn More</button>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default About