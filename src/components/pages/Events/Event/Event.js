import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../../Share/Navigation/Navigation';
import './Event.css'

const Event = () => {
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/events')
        .then(res=> res.json())
        .then(data => setEvents(data))
    },[]);
    return (
        <div>
            <Navigation/>
            <Container className='mt-5'>
                <div className='row mt-5 pt-5'>
                    {
                        events.map(event=><div 
                        key={event._id}
                        className='col-12 col-md-6 col-lg-3'>
                        <img src={event.image} width='100%' alt="" />
                        <h5>{event.eventName}</h5>
                        <p>{event.eventDes}</p>
                        </div>)
                    }
                </div>
            </Container>
            
        </div>
    );
};

export default Event;