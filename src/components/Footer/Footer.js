import React from 'react'
import './footer.css'
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
                            <li>Home</li>
                            <li>Gallary</li>
                            <li>Our Donars</li>
                            <li>About us</li>
                            <li>contact us</li>
                        </ul>
                        <div className="footer__contacts footer-content">
                            <p className="footer__contacts-mail">
                                sindhutaisapkalfoundation@gmail.com
                            </p>
                            <p className="footer__contacts-no">
                                <div className="no1">no - <span>9767929394 / 9422232044</span></div>
                            </p>
                            <p className="footer__contacts-address">
                                Savitribai Fule mulinche vastigruh lal bunglow near Sipna Collage Upper Plato Chikhaldara, Dist. Amravati Maharashtra India Pin- 444807</p>
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
