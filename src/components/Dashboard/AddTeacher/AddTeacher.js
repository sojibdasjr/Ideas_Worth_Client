import axios from 'axios';
import React from 'react';
import { Button} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import DashboardNavigation from '../Dashboard/DashboardNavigation';
import './AddTeacher.css'

const AddTeacher = () => {

    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('http://localhost:5000/teachers', data)
    .then(res=> {
        if(res.data.insertedId){
            
            alert('Added Successfully');
            reset();
        }
    });
  }

    return (
        <div className='add_teacher'>
            <DashboardNavigation/>
            <h5 className='text-center mt-5'>Add Teacher</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input required placeholder='Teacher Name' {...register("name", { required: true, maxLength: 20 })} />
            <input required placeholder='Tehacher Age' type="number" {...register("age", { min: 18, max: 99 })} />
            <input required placeholder='Teacher University' {...register("from")} />
            <textarea required placeholder='About Teacher' {...register("about")} />
            <input required placeholder='Subject' {...register("subject")} />
            <input required placeholder='img URL Link' {...register("img")} />
            <input  type="submit" />
            <Link to='/teachers'><Button>Go Back</Button></Link>
        </form>
        
        </div>
    );
};

export default AddTeacher;