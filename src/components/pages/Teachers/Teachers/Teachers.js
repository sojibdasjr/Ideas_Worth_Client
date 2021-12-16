import React, { useEffect, useState } from 'react';
import Navigation from '../../Share/Navigation/Navigation';
import Teacher from '../Teahcer/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/teachers')
        .then(res=> res.json())
        .then(data => setTeachers(data))
    }, [])
    return (
        <div>
            <Navigation/>
            <div className='mt-5 pt-4 container'>
                <h2 className='ms-5'>Our All Teachers</h2>
                <div className='row'>
                    {
                        teachers.map(teacher => <Teacher
                        key={teacher._id}
                        teacher={teacher}
                        ></Teacher>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Teachers;