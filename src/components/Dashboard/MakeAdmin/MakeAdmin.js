import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import DashboardNavigation from '../Dashboard/DashboardNavigation';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlure = e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e  =>{
        const user = {email};
        fetch('https://afternoon-sands-44312.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true);
                setEmail('')
                console.log(data);
            }
           
        })
        e.preventDefault()
    }
    return (
        <>
            <DashboardNavigation/>
            <Container className='mt-5 pt-5'>
            <h2>Make An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input style={{width:'100%'}} 
                type="email"
                placeholder='Email'
                onBlur={handleOnBlure}
                />
                <Button type='submit'>Make Admin</Button>
            </form>
            {success && <div className="alert alert-success" role="alert">
                Made Admin Successfully
                </div> }
            </Container>
            
        </>
    );
};

export default MakeAdmin;