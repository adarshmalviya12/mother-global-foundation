import React from 'react'
import "./hero.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Hero() {
    return (
        <>
            <Carousel showThumbs={false} autoPlay={true} interval={4000} transitionTime={2000} infiniteLoop={true} dynamicHeight={true} animationHandler={'fade'} stopOnHover={false} showStatus={false} >
                <div className='carousel-image' >
                    <img src={require('../../assests/img1.png')} alt="loading" />
                </div >
                <div className='carousel-image'>
                    <img src={require('../../assests/img2.png')} alt="loading" />
                </div>
                <div className='carousel-image'>
                    <img src={require('../../assests/img3.jpeg')}  alt="loading"/>
                </div>
            </Carousel>
        </>
    )
}

export default Hero
