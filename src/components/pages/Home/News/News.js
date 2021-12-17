import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './News.css'

const News = () => {

   const [events, setEvents] = useState([]);
   useEffect(()=>{
       fetch('http://localhost:5000/events')
       .then(res=>res.json())
       .then(data => {
           const slice = data.slice(0,4);
           setEvents(slice);
       })
   },[])

    return (
            <div className='row container mx-auto  my-5'>
            <h4>Our Events Heare <Link style={{textDecoration:'none'}} to='/events'> See all  <FontAwesomeIcon icon={faArrowRight}/></Link> </h4>
                {
                    events.map(({_id, image, eventName, eventDes})=> <div 
                    style={{width:'18rem'}}
                    className='col-12 col-md-4 col-lg-4 my-2 shadow-sm mx-auto'
                    key={_id}
                    
                    >
                        <img 
                        width='100%'
                        style={{
                            borderRadius:'5px'
                        }}
                        src={image}  sty alt="" />
                        <h3 style={{textAlign:'center', fontWeight:'700'}}>{eventName}</h3>
                        <p>{eventDes}</p>
                        
                        
                    </div>)
                }
            </div>
      
    );
};

export default News;