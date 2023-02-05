import React from 'react'
import './about.css'

function About() {
    return (
        <>
            <section className='about__section'>
                <div className="about__section-card">
                    <div className="about__section-container">
                        <div className="about__section-image">
                            <img src={require('../../assests/about-image.png')} alt="loading..." />
                        </div>
                        <div className="about__section-info">
                            <h1>सौ सिंधुताई सपकाळ जनविकास सामाजिक बहुउद्देशीय फाऊंडेशन.</h1>
                            <p>The Sindhutai Sapkal Foundation aims to improve the lives of underprivileged children and families in the Melghat region by providing them with education, healthcare, and other facilities for their overall development.</p>
                            <button >Discover More</button>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default About
