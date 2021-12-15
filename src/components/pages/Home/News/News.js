import React from 'react';
import { Button } from 'react-bootstrap';
import { newsData } from '../../../../data/data';
import './News.css'

const News = () => {
    return (
        <div className='container g-5'>
            <div className='row '>
                {
                    newsData.map(({_id, img, des, title})=> <div className='col-12 col-md-4 col-lg-4 my-2'
                    key={_id}
                    
                    >
                        <img 
                        width='100%'
                        style={{
                            borderRadius:'5px'
                        }}
                        src={img}  sty alt="" />
                        <h3 style={{textAlign:'center', fontWeight:'700'}}>{title}</h3>
                        <h6>{des}</h6>
                        <Button>Read More</Button>
                        
                    </div>)
                }
            </div>
        </div>
    );
};

export default News;