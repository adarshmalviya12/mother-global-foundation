import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assests/logo.png'

const Container = styled.div`
position: sticky;
top: 0;
width: 100%;
background-color: crimson;
height: 90px;
box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);

`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: auto;
    width: 80%;
`
const Image = styled.img`
width: 90px;
`
const NLink = styled.ul`
display: flex;
color: white;
font-size: 20px;
margin-inline: auto;


@media screen and (max-width: 768px) {
    display: none;
}
`
const ListItem = styled.li`
margin-right:20px;
`
const Icon = styled.span`
  display: none;
  font-size: 30px;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
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
color: crimson;
background-color: white;
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
   display: none;
}

`

function Navbar() {
    return (
        <>
            <Container>
                <Wrapper>
                    <Image src={Logo} />

                    <NLink >
                        <ListItem><NavLink to=''>Home</NavLink></ListItem>
                        <ListItem><NavLink to='gallary'>Gallary</NavLink></ListItem>
                        <ListItem><NavLink to="donar">Our Donars</NavLink></ListItem>
                        <ListItem> <NavLink to="about">About us</NavLink> </ListItem>
                        <ListItem><NavLink to='contact'>Contact us</NavLink> </ListItem>
                    </NLink>

                    <Icon className="icon-container">
                        <i className="fa-solid fa-bars"></i>
                    </Icon>
                    <Button>Donate</Button>
                </Wrapper>
            </Container>
        </>
    )
}

export default Navbar
