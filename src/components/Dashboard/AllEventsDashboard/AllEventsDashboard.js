import React , { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const AllEventsDashboard = () => {
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        fetch('https://afternoon-sands-44312.herokuapp.com/events')
        .then(res=> res.json())
        .then(data => setEvents(data))
    },[]);

    const handleDeleteStudent = id => {
        const procced = window.confirm('Are you sure, you want to delete ?');
        if(procced){
            const url = `https://afternoon-sands-44312.herokuapp.com/events/${id}`;
        fetch(url, {
            method:'delete'
        })
        .then(res=> res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Deleted Successfully');
                const remainingStudent = events.filter(student => student._id !== id);
                setEvents(remainingStudent);
            }
        })
        }
    }
    return (
        <>
            <Container>
                <h1 className='text-center mt-5 text-uppercase'>Events Analysis</h1>
                <h2>Total Events : {events.length}</h2>
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Photo</th>
                    <th>Event Name</th>
                    <th>Event Description</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        events.map(({_id, image, eventName, eventDes })=> <tr key={_id}>
                            <td><img width="80px" height="50px" src={image} alt="" /></td>
                            <td>{eventName}</td>
                            <td>{eventDes}</td>
                            <td><button style={{backgroundColor:"red" , border:"none", padding:'5px 10px', color:"white", borderRadius:"5px"}} onClick={()=> handleDeleteStudent(_id)}>Delete</button></td>
                            
                        </tr> )
                    }
                </tbody>

                </Table>
            </Container>
            </>
    );
};

export default AllEventsDashboard;