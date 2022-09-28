import React from 'react';
import './About.css';
import man from '../../images/Roy.png';
const About = () => {
    return (
        <div>
            <div className='about-container'>
                <div className='pt-4 d-flex align-items-center gap-3'>
                    <img className='img-fluid man-img' src={man} alt="" />
                   <div>
                   <h2 className='name'>Zahid Hossain</h2>
                    <p className='location mb-0'>Sydney, Australia</p>
                   </div>
                </div>
               <div className='mt-4'>
               <div className='weight'>
                    <div>
                        <span className='d-block fw-bold fs-5'>75 <sub>kg</sub></span>
                        <p className='mb-0 weight-ds'>Weight</p>
                    </div>
                    <div>
                        <span className='d-block text-center fw-bold fs-5'>6.5</span>
                        <p className='mb-0 weight-ds'>Height</p>
                    </div>
                    <div>
                        <span className='d-block fw-bold fs-5'>25 <sub>yrs</sub></span>
                        <p className='mb-0 weight-ds'>Age</p>
                    </div>
                </div>
               </div>

                <div className='mb-5'>
                    <p className='break'>Add A Break</p>
                    <div className='time-break'>
                        <div>
                            <button className='timers'>10s</button>
                        </div>
                        <div>
                            <button className='timers2'>20s</button>
                        </div>
                        <div>
                            <button className='timers'>30s</button>
                        </div>
                        <div>
                            <button className='timers'>40s</button>
                        </div>
                        <div>
                            <button className='timers'>50s</button>
                        </div>
                    </div>
                </div>
                
                <div>
                <p className='break'>Exercise Details</p>
                <div className='exercise-time mb-3'>
                    <p className='mb-0 fw-bold'>Exercise time</p>
                    <p className='mb-0 seconds'>200 seconds</p>
                </div>
                <div className='exercise-time mb-5'>
                    <p className='mb-0 fw-bold'>Break time</p>
                    <p className='mb-0 seconds'>15 seconds</p>
                </div>
                <button className='btn btn-primary w-100'>Activity Completed</button>
                </div>

               
            </div>
        </div>
    );
};

export default About;