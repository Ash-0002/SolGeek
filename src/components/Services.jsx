import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

const Services = () => {
  return (
    <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000}>
        <div>
            <img src={img1} alt="Item1" />
            <p className='legend'>Full stack</p>
        </div>

        <div>
            <img src={img2} alt="Item1" />
            <p className='legend'>Peer-to-peer Support</p>
        </div>
    </Carousel>
  )
}

export default Services