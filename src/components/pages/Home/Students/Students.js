import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/students')
        .then(res=>res.json())
        .then(data => {
            const slice = data.slice(0, 6);
            setStudents(slice)
        });
    },[])
    return (
        <Container className='my-5'>
            <h2 className='text-center my-5'>Students List <Link style={{textDecoration:'none'}} to ='/students'>Sell all <FontAwesomeIcon icon={faArrowRight}/> </Link> </h2>
            <div className='row'>
                {
                    students.map(student => <div
                    key={student._id} 
                    className='col-12 col-md-4 col-lg-2'>
                    <img style={{width:'100%', borderRadius:'50%'}} src={student.img} alt="" />
                    <p className='text-center fw-bold'>{student.studentName}</p>
                    <p className='text-center'>Class: {student.class}</p>
                    </div>)
                }
            </div>
        </Container>
    );
};

export default Students;