import React from 'react'
import '../index.css'

const HomeSearch = () => {
    return (
        <div>
            <div className="flex  flex-wrap justify-center items-center gap-4 py-25 px-10 msearch tsearch">
                <div className="flex flex-col tSearchSection">
                    <span className='text-[1.2rem] font-bold py-1 '>Location</span>
                    <input className='border-[1px] rounded-[10px] pl-2 py-3' type='text' placeholder='City/Locality Name' />
                </div>
                <div className="flex flex-col tSearchSection">
                    <span className='text-[1.2em] font-bold py-1'>Property Type</span>
                    <select className='border-[1px] rounded-[10px] pl-2 py-3' type='text' placeholder='City/Locality Name'>
                        <option value="">Property type</option>
                        <option value="residential plots">Residential Plots</option>
                        <option value="Commercial Plots">Commercial plots</option>
                        <option value="Agriculture Plots">Agriculture plots</option>
                        <option value="industrial Plots">industrial Plots</option>
                        <option value="Mixed-Use Plots">Mixed-use Plots</option>
                    </select>
                </div>
                <div className="flex flex-col tSearchSection">
                    <span className='text-[1.2em] font-bold py-1'>Property Status</span>
                    <select className='border-[1px] rounded-[10px] pl-2 py-3' type='text' placeholder='City/Locality Name' >
                        <option value="">property status</option>
                        <option value="red">plot</option>
                        <option value="blue">flats</option>
                        <option value="green">under construction</option>
                    </select>
                </div>
                <div className="flex flex-col tSearchSection">
                    <span className='text-[1.2em] font-bold py-1'>Price Limit</span>
                    <select className='border-[1px] rounded-[10px] pl-2 py-3' type='text' placeholder='City/Locality Name' >
                        <option value="">prictSearchSectione Limit</option>
                        <option value="red">below 10 lakhs</option>
                        <option value="blue">10-50 lakhs</option>
                        <option value="green">50-75 lakhs</option>
                        <option value="red">75-100 lakhs</option>
                        <option value="blue">1-2 crores</option>
                        <option value="redf">2-5 crores</option>
                        <option value="green">above 5 crores</option>
                    </select>
                </div>
                <button className='bg-[gold] px-5 py-3 mt-6 rounded-[1em] border-[2px] border-[red]'>Search Property</button>

            </div>
        </div>
    )
}

export default HomeSearch
