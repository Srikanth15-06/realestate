import React from 'react'
import AboutUsInNumbers from './AboutUsInNumbers'

const AboutInDetail = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-8 px-6 md:px-20 pt-20 ">
                <div className='bg-red-400 lg:w-750'>
                    <img className="h-[30em] w-full object-cover rounded-[20px]" src='https://img.freepik.com/premium-photo/real-estate-agents-collaborating-modern-office-environment_1315237-14952.jpg' />
                </div>
                <div className="flex flex-col pl-5">
                    <span className='font-bold text-[2em]'>
                    Welcome to Findstate – Your Trusted Real Estate Agency
                    </span>

                    <span className='p-2'>
                    Findstate is a modern real estate agency dedicated to helping you find the right property with confidence. Whether you are looking to buy, sell, rent, or invest, we provide reliable property listings and professional guidance to make your real estate journey simple and stress-free.
                    Our goal is to connect people with properties that match their needs, lifestyle, and budget. From residential plots and apartments to villas and commercial properties, we offer a wide range of options in desirable locations.
                    With a focus on trust, transparency, and customer satisfaction, Findstate works to make every property transaction smooth and rewarding.
                    </span>

                    <span className='font-bold text-[2em] pt-2'>
                    Why Choose Findstate?
                    </span>

                    <span className='p-2'>
                    We understand that finding the right property is an important decision. Our team provides updated listings, useful property information, and personalized assistance so you can make informed choices.
                    </span>


                </div>
            </div>
           <AboutUsInNumbers/>
        </div>
    )
}

export default AboutInDetail
