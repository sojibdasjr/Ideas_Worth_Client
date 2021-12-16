import React from 'react';
const Teacher = ({teacher}) => {
    const {name, img, age, from, about, subject } = teacher;
    
    return (
        <div className='col-12 col-md-6 col-lg-3 my-1'>
            <div className="card" style={{width:'18rem'}}>
                <img style={{width:'90%', margin:'15px', borderRadius:'10px'}} src={img} className="card-img-top"  alt="..."/>
                <div className="card-body">
                    <h5 className="card-text text-center">{name}</h5>
                    <small>From: {from}</small> <br />
                    <b>Subject: {subject}</b> <br />
                    <small>Age: {age}</small> <br />
                    <small>About Teacher: {about}</small> <br />
            </div>
            
            </div>
            
        </div>
    );
};

export default Teacher;