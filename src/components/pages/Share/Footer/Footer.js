import React from 'react';
import { faMapMarkerAlt, faEnvelope, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer_div mt-5'>
            <div className='row m-2 pt-5'>
                
                <div className='col-12 col-md-4 col-lg-3'>
                    <div>
                        <h5>ABOUT THE SCHOOL</h5>
                        <small>Please input an email address down below. <br /> address down blew school. Please input an email. Beloow and school</small>
                        
                    </div>
                </div>
                <div className='col-12 col-md-4 col-lg-3'>
                    <div>
                        <h5>OUR LINKS</h5>
                        <div>
                        <a href="#" > Classroom</a> <br />
                        <a href="#" > Events</a> <br />
                        <a href="#" > News</a> <br />
                        <a href="#" > Instragram</a> <br />
                        </div>
                        
                    </div>
                </div>
                <div className='col-12 col-md-4 col-lg-3'>
                    <div>
                        <h5>OUR SCHOOL</h5>
                        <a href="#" > Open houses</a> <br />
                        <a href="#" > Enrollment</a> <br />
                        <a href="#" > Preschool</a> <br />
                        <a href="#" > Kindergarten</a> <br />
                        <a href="#" > Handbook</a> <br />
                        <a href="#" > Elementary</a> <br />
                        <a href="#" > Extended care</a> <br />
                        
                    </div>
                </div>
                <div className='col-12 col-md-4 col-lg-3'>
                    <div className='row'>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <h5 className='text-center'>GET IN TOUCH</h5>
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon  icon={faMapMarkerAlt} className='fs-4'/>
                            <div className='ms-3'>
                                <small>PO Box 97845 State  st. 557.Los Angles, California US</small>
                            </div>
                        </div>
                        <div className='d-flex align-items-center mt-2'>
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <small className='ms-3'>contact.ideasworth@spreading.com</small>
                        </div>
                        <div className='d-flex align-items-center mt-2'>
                            <FontAwesomeIcon icon={faLocationArrow}/>
                            <small className='ms-3'>apply@ed.com</small>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <h5>SOCIAL MEDIA</h5>
                        <div>
                            <FontAwesomeIcon className='me-2 social_icon' icon={faFacebook}/>
                            <FontAwesomeIcon className='me-2 social_icon' icon={faInstagram}/>
                            <FontAwesomeIcon className='me-2 social_icon' icon={faLinkedin}/>
                            <FontAwesomeIcon className='me-2 social_icon' icon={faTwitter}/>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
            <small>© 2021 Ideas worth spreading. All Rights Reserved.</small>
        </div>
    );
};

export default Footer;