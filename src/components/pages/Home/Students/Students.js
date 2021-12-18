import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        fetch('https://afternoon-sands-44312.herokuapp.com/students')
        .then(res=>res.json())
        .then(data => {
            const slice = data.slice(0, 4);
            setStudents(slice)
        });
    },[])
    return (
        <div className=' row my-5 container mx-auto '>
            <h4 className='my-5'>Students List <Link style={{textDecoration:'none'}} to ='/all_students'>See all <FontAwesomeIcon icon={faArrowRight}/> </Link> </h4>
            
                {
                    students.map(({_id, img, studentName}) => <div
                    key={_id} 
                    className='col-12 col-md-4 col-lg-2 shadow-sm mx-auto'
                    style={{width:'18rem'}}>
                        <div>
                            <img src={img} width='100%' style={{borderRadius:'5px'}} alt="" />
                            <p className='text-center mt-2'><b>{studentName}</b></p>
                            
                        </div>
                    </div>)
                }
           
        </div>
    );
};

export default Students;