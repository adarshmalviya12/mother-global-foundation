import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';


const Container = styled.div`
height: 100%;

`


const Image = styled.img`
min-height: 60vh;
max-height: 80vh;
`

function Hero() {
    return (
        <>
            <Container>
                <Carousel showThumbs={false} autoPlay={true} interval={4000} transitionTime={2000} infiniteLoop={true} dynamicHeight={true} animationHandler={'fade'} stopOnHover={false} showStatus={false} >
                    <div className='carousel-image' >
                        <Image src={require('../../assests/img1.png')} alt="loading" />
                    </div >
                    <div className='carousel-image'>
                        <Image src={require('../../assests/img2.png')} alt="loading" />
                    </div>
                    <div className='carousel-image'>
                        <Image src={require('../../assests/img3.jpeg')} alt="loading" />
                    </div>
                </Carousel>
            </Container>
        </>
    )
}

export default Hero
