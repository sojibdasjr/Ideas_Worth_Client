import React from 'react';
import coverImg from '../../../../images/cover/cover 1.png'


import './HomeCover.css'

const HomeCover = () => {
    return (
        <div>
            <div>
                <img style={{marginTop:'4rem'}} src={coverImg} width='100%' alt="" />
                <div className='programs '>
                <div className='row container'>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className='program_item d-flex align-items-center'>
                        <img src="https://cdn-icons-png.flaticon.com/512/868/868786.png" width='40%' alt="" />
                        <div style={{marginLeft:'1rem'}}>
                        <h3>PROGRAMS</h3>
                        <h6>Develop fine and gross skills and more</h6>
                        </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className='program_item d-flex align-items-center'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1827/1827422.png" width='40%' alt="" />
                        <div style={{marginLeft:'1rem'}}>
                        <h3>ONLINE ED</h3>
                        <h6>Processes and all main lorem ispum</h6>
                        </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className='program_item d-flex align-items-center'>
                        <img src="https://cdn-icons.flaticon.com/png/512/518/premium/518654.png?token=exp=1639541985~hmac=3ba9449373d811d1ab59e0489221a1d8" width='40%' alt="" />
                        <div style={{marginLeft:'1rem'}}>
                        <h3>AWARDS</h3>
                        <h6>Develop fine and gross skills and more</h6>
                        </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className='program_item d-flex align-items-center'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1754/1754171.png" width='40%' alt="" />
                        <div style={{marginLeft:'1rem'}}>
                        <h3>DISCOVER</h3>
                        <h6>Discover your education lorem  </h6>
                        </div>
                        </div>
                    </div>
                    
                    
                </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCover;