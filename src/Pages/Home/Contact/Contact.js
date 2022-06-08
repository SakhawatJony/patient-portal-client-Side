import React from 'react';
import ContactBg from "../../../assets/images/appointment.png"

const Contact = () => {
    return (
        <section  className='flex justify-center items-center'
        style={{background:`url(${ContactBg})`}}>
     
               
       
           <div className='my-6'>
          <div >
          <h3 className='text-primary text-2xl font-bold text-center'>Contact Us</h3>
               <p className='text-center text-1xl font-bold text-white'>Stay connected with us</p>
          </div>
           <form className='my-3'>
               <input type="text" placeholder="Email Address" class="input input-bordered w-full my-2" />
               <input type="text" placeholder="Subject" class="input input-bordered w-full my-2" />
               <textarea class="textarea textarea-bordered my-5 w-full" placeholder="Your Message"></textarea>
               <button type='submit' class="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary font-bold">Submit</button>
               </form>
           </div>
            
        </section>
    );
};

export default Contact;