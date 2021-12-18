import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import DashboardNavigation from '../Dashboard/DashboardNavigation';
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
            <DashboardNavigation/>
            <h5 className='text-center mt-5'>Add Studens</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input required placeholder='Student Name' {...register("studentName", { required: true, maxLength: 20 })} />
            <input required placeholder='Class' {...register("Class", { required: true, maxLength: 20 })} />
            <input required placeholder='Class Roll' {...register("roll", { required: true, maxLength: 20 })} />
            <input required placeholder='Group Name' {...register("group", { required: true, maxLength: 20 })} />
            <input required placeholder='img URL Link' {...register("img")} />
            <input  type="submit" />
            
        </form>
        
        </div>
    );
};

export default AddStudent;