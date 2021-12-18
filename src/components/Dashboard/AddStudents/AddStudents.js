import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import DashboardNavigation from '../Dashboard/DashboardNavigation';
import './AddStudents.css'

const AddStudent = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('https://afternoon-sands-44312.herokuapp.com/students', data)
    .then(res=> {
        if(res.data.insertedId){
            alert('Added Successfully');
            reset();
        }
    });
  }

    return (
        <div className='add_students'>
            <DashboardNavigation/>
            <h5 className='text-center mt-5 pt-5'>Add Studens</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input required placeholder='Student Name' {...register("studentName", { required: true, maxLength: 20 })} />
            <input required placeholder='Class' {...register("Class", { required: true, maxLength: 20 })} />
            <input required placeholder='Class Roll' {...register("roll", { required: true, maxLength: 20 })} />
            <input required placeholder='Group Name' {...register("group", { required: true, maxLength: 20 })} />
            <input required placeholder='img URL Link' {...register("img")} />
            <input  type="submit" />
            <Link to='/deshboard_home'><Button>Go Back</Button></Link>
            
        </form>
        
        </div>
    );
};

export default AddStudent;