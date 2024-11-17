import Heropage from '@/components/Heropage'
import About from '@/components/About'
import Cards from '@/components/Cards'
import React from 'react'
import Char from '@/components/Char'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Parallax from '@/components/Parallax'
import Students from '@/components/Students'

function index() {
  return (
    <>
    
      
      <Heropage/>
      <Cards/>
      <About/>
     
      <Char/>
      <Parallax/>
      <Students/>
      {/* <Contact/> */}
      {/* <Footer/> */}
      
     
    
    
     
     </>
  )
}

export default index