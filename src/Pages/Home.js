import React from "react"
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'

import Payment from '../components/Payment/Payment'
import styled from "styled-components"

const Container = styled.div`
border: 2px solid blue;
width: 100%;
`

function Home() {
    return (
        <>
            <Container> <Hero /> </Container>
            <Container >
                 <About /> 

            </Container>
            <Container> <Payment /> </Container>



        </>
    )
}

export default Home
