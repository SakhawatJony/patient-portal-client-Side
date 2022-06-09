import { toHaveAccessibleName } from '@testing-library/jest-dom/dist/matchers';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const AvailableAppointment = ({date}) => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data =>setServices(data))
        

    } ,[])
    return (
        <div className=''>
            <div><p className='text-secondary text-xl font-bold text-center'>Available Services on {format(date, 'PP')}</p></div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-4'>
                {services.map(service=><Service
                key={service._id}
                service={service}
                
                ></Service>)}
            </div>
        </div>
    );
};

export default AvailableAppointment;