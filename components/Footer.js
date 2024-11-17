
import React from 'react'
import styles from "../styles/footer.module.css";
import Link from 'next/link';
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.address}>
          <p>Address 1 - 17/1 Jadav Ghosh Road, Sarsuna,Behala</p>
          <p>Address 2 - 220, Bagpota Road, Debinagar</p>
          <p>West Bengal, Kolkata- 700061</p>
          <p>Contact Number : 9331984236, 8910738772, <br /> 6290656183, 8100580808, 9874990560, 9674724559</p>
          <p>Email: kakalividyamandir2005@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer