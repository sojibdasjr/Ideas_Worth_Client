import React, { useEffect, useState } from 'react';
import Navigation from '../../Share/Navigation/Navigation';
import Teacher from '../Teahcer/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(()=>{
        fetch('https://afternoon-sands-44312.herokuapp.com/teachers')
        .then(res=> res.json())
        .then(data => setTeachers(data))
    }, [])
    return (
        <div>
            <Navigation/>
            <div className='mt-5 pt-4 container'>
                <h2 className='ms-5'>Our All Teachers</h2>
                <div className='row mx-auto'>
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