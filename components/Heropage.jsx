import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import styles from "@/styles/hero.module.css"

function Heropage() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="banner1.jpeg" alt="" className={styles.bannerImage}/>
       
      </Carousel.Item>
      <Carousel.Item>
      <img src="banner2.jpeg" alt="" className={styles.bannerImage}/>
        {/* <ExampleCarouselImage text="Second slide" /> */}
       
      </Carousel.Item>
      <Carousel.Item>
      <img src="banner4.jpeg" alt="" className={styles.bannerImage}/>
        {/* <ExampleCarouselImage text="Third slide" /> */}
       
      </Carousel.Item>
    </Carousel>



  );
}

export default Heropage;