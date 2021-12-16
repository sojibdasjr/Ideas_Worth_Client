import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Addevents.css'

const AddEvents = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('http://localhost:5000/events', data)
    .then(res=> {
        if(res.data.insertedId){
            alert('Added Successfully');
            reset();
        }
    });
  }

    return (
        <div className='add_events'>
            <h5 className='text-center'>Add Teacher</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input required placeholder='Event Name' {...register("eventName", { required: true, maxLength: 20 })} />
            <textarea required placeholder='Event Description' {...register("eventDes")} />
            <input required placeholder='img URL Link' {...register("image")} />
            <input  type="submit" />
            <Link to='/events'><Button>Go Back</Button></Link>
        </form>
        
        </div>
    );
};

export default AddEvents;