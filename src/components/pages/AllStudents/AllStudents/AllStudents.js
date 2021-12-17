import React, { useEffect, useState } from 'react';
import Navigation from '../../Share/Navigation/Navigation';


const AllStudents = () => {
    const [AllStudents, setAllStudents] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/students')
        .then(res=>res.json())
        .then(data=> setAllStudents(data))
    }, []);

    // delete student

    const handleDeleteStudent = id => {
        const procced = window.confirm('Are you sure, you want to delete ?');
        if(procced){
            const url = `http://localhost:5000/students/${id}`;
        fetch(url, {
            method:'delete'
        })
        .then(res=> res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Deleted Successfully');
                const remainingStudent = AllStudents.filter(student => student._id !== id);
                setAllStudents(remainingStudent);
            }
        })
        }
    }

    return (
        <>
            <Navigation/>
            <div className='container mt-5 p-5'>
            <h1 className='text-center'>All Students</h1>
            <div className='row'>
                {
                    AllStudents.map(({_id, studentName, Class, group, roll,img })=><div
                    className='col-12 col-md-6 col-lg-3'
                    key={_id}>
                        <div className="card mb-3" style={{maxWidth: '540px'}}>
                                <div className="row g-0 align-items-center">
                                    <div className="col-md-4">
                                    <img src={img} className="img-fluid rounded-start ms-1" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <small className="card-title">Name: <b>{studentName}</b> </small> <br />
                                        <small className="card-text">Class: {Class}</small> <br />
                                        <small className="card-text">Class Roll: {roll}</small> <br />
                                        <small className="card-text">Group: {group}</small>
                                        <button onClick={()=> handleDeleteStudent(_id)} type="button" className="btn btn-danger">Danger</button>
                                        
                                        
                                    </div>
                                    
                                    </div>
                                </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
        </>
        
    );
};

export default AllStudents;