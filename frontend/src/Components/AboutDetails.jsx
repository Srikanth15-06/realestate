import React from 'react'

const AboutDetails = () => {
    return (
        <div className=''>
        <div className='flex flex-wrap justify-center gap-10 p-20 '>
            <div className='flex flex-col w-full md:w-[30%] p-2  hover:bg-gray-200 hover:scale-120'>
                <span className='font-bold pb-3 text-[1.5em]'>Our Mission</span>
                <span className='flex flex-wrap'>Our mission is to make buying, selling, and investing in real estate simple, transparent, and stress-free. We connect our clients with the right properties while providing reliable information, personalized guidance, and dedicated support throughout their property journey.</span>
            </div>
            <div className='flex flex-col w-full md:w-[30%] p-2 hover:bg-gray-200 hover:scale-120'>
                <span className='font-bold pb-3 text-[1.5em]'>Our Vision</span>
                <span className='flex flex-wrap'> Our vision is to become a trusted real-estate platform known for transparency, professionalism, and customer satisfaction. We aim to help individuals and families find properties that match their needs, goals, and future aspirations.</span>
            </div>
            <div className='flex flex-col w-full md:w-[30%] p-2 hover:bg-gray-200 hover:scale-120 '>
                <span className='font-bold pb-3 text-[1.5em]'>Our Values</span>
                <span className='flex flex-wrap'>We believe in trust, transparency, integrity, and customer-first service. Every property and every client matters to us. We are committed to providing honest guidance, maintaining clear communication, and building long-term relationships with our customers.</span>
            </div>
        </div>
        </div>
    )
}

export default AboutDetails
