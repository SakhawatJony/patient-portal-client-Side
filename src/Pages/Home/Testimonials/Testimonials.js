import React from 'react';
import qute from '../../../assets/icons/quote.svg'
import people1 from "../../../assets/images/people1.png"
import people2 from "../../../assets/images/people2.png"
import people3 from "../../../assets/images/people3.png"
import Review from '../Review/Review';

const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people1
        },
        {
            _id:2,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people2
        },
        {
            _id:3,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people3
        },
    ];
    return (
        <section className='my-24'>
            <div className='flex justify-between '>
                <div>
                    <h4 className='text-primary text-xl font-bold'>Testimonial</h4>
                    <p className='text-3xl'>What Our Patients Says</p>

                </div>
                <div>
                    <img src={qute} className=" w-24 lg:w-48" alt="" />

                </div>
        

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                reviews.map(review=><Review
                key={review._id}
                review={review}

                
                
                ></Review>)
            }

            </div>

            
        </section>
    );
};

export default Testimonials;