import React, { useEffect, useState } from 'react';
import Navigation from '../../Share/Navigation/Navigation';
import './Event.css'

const Event = () => {
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        fetch('https://afternoon-sands-44312.herokuapp.com/events')
        .then(res=> res.json())
        .then(data => setEvents(data))
    },[]);
    return (
        <div>
            <Navigation/>
            
                <div className='row container mx-auto gx-2 mt-5 pt-5'>
                    {
                        events.map(event=><div 
                        key={event._id}
                        className='col-12 col-md-6 col-lg-3 shadow-sm mx-auto my-2 p-2'
                        style={{width:'18rem'}}
                        >
                        <img src={event.image} width='100%' style={{borderRadius:'5px'}} alt="" />
                        <h5>{event.eventName}</h5>
                        <p>{event.eventDes}</p>
                        </div>)
                    }
                </div>
            </div>
            
        
    );
};

export default Event;