import React from 'react'

const AboutUsInNumbers = () => {
    return (
        <div className="flex flex-wrap justify-center gap-[5%] px-[10%] pt-10">
            <div className="flex">
                <span className=' flex text-[gold] text-[2.8em]'>305+</span>
                <span className='pt-2'>Areas <br></br>Covered</span>
            </div>
            <div className="flex">
                <span className='text-[gold] text-[2.8em]'>1090+</span>
                <span className='pt-2'>Properties <br></br> Listed</span>
            </div>
            <div className="flex">
                <span className='text-[gold] text-[2.8em]'>209+</span>
                <span className='pt-2'>Happy Home<br></br> Buyers</span>
            </div>
            <div className="flex">
                <span className='text-[gold] text-[2.8em]'>67+</span>
                <span className='pt-2'>Trusted <br></br> Locations</span>
            </div>
        </div>
    )
}

export default AboutUsInNumbers
