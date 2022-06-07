import React from 'react';
import clocke from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from '../InfoCard/InfoCard';

const Info = () => {
    return (
        <div  class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary"
            img={clocke}  ></InfoCard>
            <InfoCard
           cardTitle="Visit Our Locations" bgClass="bg-accent" img={marker}
            
            ></InfoCard>
            <InfoCard
            img={phone} cardTitle="Contact Us Now" bgClass="bg-gradient-to-r from-secondary to-primary"
            
            ></InfoCard>
            
            
        </div>
    );
};

export default Info;