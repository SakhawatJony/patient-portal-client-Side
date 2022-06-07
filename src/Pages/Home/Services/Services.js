import React from 'react';
import Fluoride from '../../../assets/images/fluoride.png'
import Cavity  from '../../../assets/images/cavity.png'
import  Whitening from '../../../assets/images/whitening.png'
import Service from './Service/Service';

const Services = () => {
    const services = [
        {_id:1,name:'Fluoride Treatment',description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. A, recusandae.",img:Fluoride},
        {_id:2,name:'Cavity Filling',description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. A, recusandae.",img:Cavity},
        {_id:3,name:'Teeth Whitening',description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. A, recusandae.",img:Whitening},


    ]
    return (
        <div className='mt-10'>
            <div className='text-center'>
                <h1 className='text-primary text-xl font-bold'>Our Services</h1>
                <p className='text-4xl'>Services We Provide</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10'>
                {
                    services.map(service=><Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
         
            </div>
            
        </div>
    );
};

export default Services;