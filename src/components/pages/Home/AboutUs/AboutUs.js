import React from 'react';
import { Container } from 'react-bootstrap';
import teacherImg from '../../../../images/Teacher/testim-circle.png'
import teacherImg2 from '../../../../images/Teacher/testim-circle02.png'
import './Aboutus.css'

const AboutUs = () => {
    return (
        <Container>
            <h1 className='my-5 text-center fw-bold about_us'>About us</h1>
            <div className='row'>
                <div className='col-12 col-md-4 col-lg-4'>
                    <h2 className='mt-5 fw-bold'>Alumni</h2>
                    <h5 className='mb-5 fst-italic'>STUDENTS TESTIMONALS</h5>
                    <div className='d-flex teacher_bg'>
                        <img src={teacherImg}  alt="" />
                        <div className='ms-2'>
                            <h5 className='text-center fw-bold'>Alen Parker</h5>
                            <h6 className='text-center'>SCIENTIST</h6>
                            <p>As a ED student, I can say a great environment for international students.</p>
                        </div>
                    </div>

                    <div className='d-flex mt-2 teacher_bg'>
                        <img src={teacherImg2}  alt="" />
                        <div className='ms-2'>
                            <h5 className='text-center fw-bold'>Parker</h5>
                            <h6 className='text-center'>PEDIATRIST</h6>
                            <p>As a ED student, I can say a great environment for international students.</p>
                        </div>
                    </div>
                </div>
                
                <div className='col-12 col-md-4 col-lg-4'>
                    <h2 className='mt-5 fw-bold'>Why Choose us</h2>
                    <p className='mb-5 fst-italic'>OUR LEARN BASED PROGRAM</p>
                    <div>
                        <p>- Curriculum & instruction start</p>
                        <p>- Student support services</p>
                        <p>- Human resourecess ED center</p>
                        <p>- Auditorium with stage</p>
                        <p>-Ed middle school</p>
                        <p>- Personal teachin</p>
                        <p>- Three athletic fields</p>
                        <p>- all about our school is available</p>
                    </div>
                </div>

                <div className='col-12 col-md-4 col-lg-4'>
                <div className='mt-5 shadow pb-5 p-2 '>
                    <h2 className=' fw-bold border-bottom text-center pb-2'>Working Hours</h2>
                    <div className='d-flex justify-content-between border-bottom'>
                        <h5>Mon-Wed</h5>
                        <h5 className=''>8:00 - 8:40</h5>
                    </div>
                    <div className='d-flex justify-content-between border-bottom'>
                        <h5>Thu-Fri</h5>
                        <h5 className=''>8:45 - 9:30</h5>
                    </div>
                    <div className='d-flex justify-content-between border-bottom'>
                        <h5>Set</h5>
                        <h5 className=''>8:00 - 8:40</h5>
                    </div>
                    <div className='d-flex justify-content-between border-bottom'>
                        <h5>Holiday</h5>
                        <h5 className=''>8:00 - 8:40</h5>
                    </div>
                    <div className=' working_pragraph'>
                        <p className='ms-2'>- Provides opportuniities for the child to explore elementary school</p>
                    </div>
                </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutUs;