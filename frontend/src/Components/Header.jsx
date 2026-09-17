import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'



const Header = () => {
    

    return (
        <div className='sticky top-0 z-10'>
            <div className="flex h-15 font-bold text-[15px] bg-gray-100 p-2 items-center justify-around w-100%">
                <div className="text-[2em] ">
                    <span className="text-[red] ">Sri</span>Xplore
                </div>
                <div className="flex  items-center justify-around  gap-10">
                    <NavLink className={(e)=>{return e.isActive?"active":""}} to="/">Home</NavLink>
                    <NavLink className={(e)=>{return e.isActive?"active":""}} to="/about">About</NavLink>
                    <NavLink className={(e)=>{return e.isActive?"active":""}} to="/services">Service</NavLink>
                    <NavLink className={(e)=>{return e.isActive?"active":""}} to="/agent">Agent</NavLink>
                    <NavLink className={(e)=>{return e.isActive?"active":""}} to="/listing">Listing</NavLink>
                    <NavLink className={(e)=>{return e.isActive?"active":""}} to="/blog">Blog</NavLink>
                    <NavLink className={(e)=>{return e.isActive?"active":""}} to="/contact">Contact</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Header
