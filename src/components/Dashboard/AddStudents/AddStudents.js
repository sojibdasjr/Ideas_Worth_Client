import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import './AddStudents.css'

const AddStudent = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('http://localhost:5000/students', data)
    .then(res=> {
        if(res.data.insertedId){
            alert('Added Successfully');
            reset();
        }
    });
  }

    return (
        <div className='add_students'>
            <Dashboard/>
            
            <h5 className='text-center'>Add Studens</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input required placeholder='Student Name' {...register("studentName", { required: true, maxLength: 20 })} />
            <input required placeholder='Class' {...register("Class", { required: true, maxLength: 20 })} />
            <input required placeholder='Class Roll' {...register("roll", { required: true, maxLength: 20 })} />
            <input required placeholder='Group Name' {...register("group", { required: true, maxLength: 20 })} />
            <input required placeholder='img URL Link' {...register("img")} />
            <input  type="submit" />
            <Link to='/events'><Button>Go Back</Button></Link>
        </form>
        
        </div>
    );
};

export default AddStudent;