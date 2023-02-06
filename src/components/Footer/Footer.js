import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'
function Footer() {
    return (
        <>
            <footer className='footer' >
                <div className="footer__container">

                    <div className="footer__upper">
                        <div className="footer__logo footer-content">
                            <img src={require('../../assests/logo.png')} alt="loading..." />
                        </div>
                        <ul className='footer__links footer-content'>
                            <li><NavLink to=''>Home</NavLink></li>
                            <li><NavLink to='gallary'>Gallary</NavLink></li>
                            <li><NavLink to="donar">Our Donars</NavLink></li>
                            <li> <NavLink to="about">About us</NavLink> </li>
                            <li><NavLink to='contact'>Contact us</NavLink > </li>
                        </ul>
                        <div className="footer__contacts footer-content">
                            <p className="footer__contacts-mail">
                                <i class="fa-solid fa-envelope" /> :- sindhutaisapkalfoundation@gmail.com
                            </p>
                            <p className="footer__contacts-no">
                                <div className="no1"><i class="fa-solid fa-phone"></i> :- <a rel="stylesheet" href="tel:+919767929394">9767929394</a>  /  <a rel="stylesheet" href="tel:+919422232044" >9422232044</a></div>
                            </p>
                            <p className="footer__contacts-address"><i class="fa-solid fa-location-dot"> </i> :- Savitribai Fule mulinche vastigruh lal bunglow near Sipna Collage Upper Plato Chikhaldara, Dist. Amravati Maharashtra India Pin- 444807</p>
                        </div>
                    </div>
                </div>
                <div className="footer__lower">


                </div>
            </footer>
        </>
    )
}

export default Footer
