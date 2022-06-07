import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import doctorBg from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section  className='flex justify-center items-center'
        style={{background:`url(${doctorBg})`}}>
            <div className='flex-1'>
                <img style={{marginTop:'-115px'}} src={doctor} alt="" />

            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold py-2'>Appointment</h3>
                <h2 className='text-3xl  text-white py-3'>Make an appointment Today</h2>
                <p className='text-white py-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button class="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary font-bold">Get Started</button>

            </div>
            
        </section>
    );
};

export default MakeAppointment;