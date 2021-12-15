import React from 'react';
import { Container } from 'react-bootstrap';
import './VisitInfo.css'

const VisitInfo = () => {
    return (
       <>
            <h6 className='container my-5'>Please input an email down beloow and hit subscribe now in order to get the latest news or <a  href="#">Request a quote</a></h6>
        <div className='visit_container'>
            
            <Container>
                
                <div className='row'>
                    <div className='col-12 col-md-4 col-lg-4 my-3'>
                        <div className='d-flex align-items-center  box_vist'>
                            <img src="https://cdn-icons-png.flaticon.com/512/905/905806.png" width='22%' alt="" />
                            <div className='ms-2 text-white '>
                                <h4>VISIT SCHOOL</h4>
                                <h6>We employed only the best  of the best</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4 my-3 '>
                        <div className='d-flex align-items-center box_vist'>
                            <img src="https://cdn-icons.flaticon.com/png/512/2058/premium/2058148.png?token=exp=1639541556~hmac=003414a50fb6d0f602c798dfa387a561" width='22%' alt="" />
                            <div className='ms-2 text-white '>
                                <h4>INQUIRE</h4>
                                <h6>75 Mapleton Road Princeton</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4 my-3 '>
                        <div className='d-flex align-items-center box_vist'>
                            <img src="https://cdn-icons.flaticon.com/png/512/2099/premium/2099125.png?token=exp=1639541645~hmac=01068ce4609e159f57fd4ce5b8ee86a5" width='22%' alt="" />
                            <div className='ms-2 text-white '>
                                <h4>ONLINE APPLICATION</h4>
                                <h6>Insipred, confident and ready</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
       </>
    );
};

export default VisitInfo;