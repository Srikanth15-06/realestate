import React from 'react'

const ContactReviewSection = () => {
    return (
        <div>
            <div className="flex justify-center p-5">
                <div className="  bg-gray-100 w-[30em] p-10">
                    <div className="bg-white flex flex-col justify  h-[100%] ">
                        <input className='h-10 border-1 p-1 mb-1' type='text' placeholder='name'/>
                        <input className='h-10 border-1 p-1 mb-1' type="email" placeholder='Email'/>
                        <input className='h-10 border-1 p-1 mb-1' type='text' placeholder='Subject'/>
                        <textarea className=' border-1 p-1 mb-1' rows="5" placeholder='message..'></textarea>
                        <button className='bg-red-200 p-2 '>Send Message</button>
                    </div>
                </div>
                <div className=" bg-red-100 p-10">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60903.13979693829!2d78.4329266!3d17.4383433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a10f20aa741%3A0xd48f418e13ee9ec5!2sTaj%20Mahal%20Hotel!5e0!3m2!1sen!2sin!4v1788079073949!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactReviewSection
