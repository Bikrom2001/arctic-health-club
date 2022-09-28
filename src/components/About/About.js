import React from 'react';
import './About.css';
import man from '../../images/Roy.png';
const About = () => {
    return (
        <div>
            <div className='about-container'>
                <div className='pt-4 d-flex'>
                    <img className='img-fluid man-img' src={man} alt="" />
                   <div>
                   <h2 className='name'>Zahid Hossain</h2>
                    <p className='location'>Sydney, Australia</p>
                   </div>
                </div>
               <div>
               <div className='weight'>
                    <div>
                        <span className='d-block'>75 <sub>kg</sub></span>
                        <p className='mb-0'>Weight</p>
                    </div>
                    <div>
                        <span className='d-block text-center'>6.5</span>
                        <p className='mb-0'>Height</p>
                    </div>
                    <div>
                        <span className='d-block'>25 <sub>yrs</sub></span>
                        <p className='mb-0'>Age</p>
                    </div>
                </div>
               </div>
               
            </div>
        </div>
    );
};

export default About;