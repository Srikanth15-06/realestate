import React from 'react'

const HomeBG = () => {
    return (
        <div>
            <div className="relative bg-[url('https://wallpapers.com/images/hd/real-estate-tropical-mansion-20c9os156eqcqd4j.jpg')] h-[600px] bg-cover bg-center">
                <div className="h-[600px] absolute inset-0 bg-[linear-gradient(to_bottom,transparent_1%,transparent_85%,white_100%)] font-bold text-[2.5em] flex justify-center items-center flex-col text-[white]   [text-shadow:2px_4px_0_red]">
                    <span>
                        Find your property
                    </span>
                    <span>
                        That makes your money
                    </span>

                    <button className='text-[0.5em] rounded-[20px] bg-[gold] px-4 py-2 m-5'>Search Properties</button>
                </div>



            </div>
        </div>
    )
}

export default HomeBG
