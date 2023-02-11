import React from 'react'
import './about.css'
import styled from 'styled-components'

const Container = styled.div`
padding: 4rem 6rem;
@media (max-width: 768px) {
   padding: 4rem;
 }
`
const Wrapper = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 5px;

  webkit-box-shadow: 0px 0px 15px -4px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 15px -4px rgba(0,0,0,0.75);
box-shadow: 0px 0px 15px -4px rgba(0,0,0,0.75);

 @media (max-width: 768px) {
 padding: 1rem 1.4rem;
 }

@media( max-width:425px){
    display: flex;
    flex-direction: column;
}
`
const Left = styled.div`
width: 100%;
`
const ImageContainer = styled.div`
  margin: 10px;
  padding-left:3.5rem;
  height: 500px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;

    @media (max-width:1024px ){
    margin: 7px;
    padding-left: 1rem;
    height: 350px;
    width: 350px;
}
@media (max-width: 768px) {
    margin: 5;
    height: 200px;
    width: 200px;
 }

     @media (max-width:425px ){
   padding: 0;
 
}

`
const Image = styled.img`
width: 20rem;
border-radius: 30px 30px 30px 30px;
-moz-border-radius: 30px 30px 30px 30px;
-webkit-border-radius: 30px 30px 30px 30px;
  border: 7px double crimson;
    @media (max-width:1024px ){
    width: 16rem;
}
    @media (max-width:768px ){
    width: 14rem;
}
    @media (max-width:425px ){
    width: 14rem;
    margin-inline: auto;
 
}
`
const Right = styled.div`
 width:  100%;
`

const InfoContainer = styled.div`
width: 100%;

`
const InfoHeading = styled.h1`
font-size: 2rem;
margin-bottom: 20px;
color: crimson;
@media (max-width:1024px ){
    font-size: 1.6rem;
}
    @media (max-width:769px ){
    font-size: 1.4rem;
    margin-bottom: 16px;
}
`
const InfoPara = styled.p`
 font-size: 2rem;
 @media (max-width:1024px ){
     font-size: 1.6rem;
    }
    @media (max-width:769px ){
       font-size: 1.4rem;
   }
`

const Button = styled.button`
width: 150px;
padding: 12px;
margin-top: 10px;
border: none;
border-radius: 15px;
font-size: 15px;
font-weight: bold;
color: white;
background-color: crimson;
cursor: pointer;

@media (max-width:1024px ){
  width  :120px ;
  padding:8px;
  font-size: 12px;
  margin-top: 8px;
}
@media (max-width:768px ){
  width  :100px ;
  padding:6px;
  font-size: 10px;
  margin-top: 6px;
}
`

function About() {
    return (
        <>
            <Container >

                <Wrapper >
                    <Left>
                        <ImageContainer>
                            <Image src={require('../../assests/about-image.png')} alt="loading..." />
                        </ImageContainer>
                    </Left>
                    <Right>
                        <InfoContainer>
                            <InfoHeading>सौ सिंधुताई सपकाळ जनविकास सामाजिक बहुउद्देशीय फाऊंडेशन.</InfoHeading>
                            <InfoPara>The Sindhutai Sapkal Foundation aims to improve the lives of underprivileged children and families in the Melghat region by providing them with education, healthcare, and other facilities for their overall development.</InfoPara>
                            <Button >Discover More</Button>
                        </InfoContainer>
                    </Right>
                </Wrapper>
            </Container>
        </>
    )
}

export default About
