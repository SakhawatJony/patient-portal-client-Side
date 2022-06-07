import React from 'react';
import Banner from './Banner/Banner';
import MakeAppointment from './Banner/MakeAppointment';
import DentalCare from './DentalCare/DentalCare';
import Info from './Info/Info';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;