import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Service', path: '/services' },
        { name: 'Agent', path: '/agent' },
        { name: 'Listing', path: '/listing' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ]
 
    return (
        <div className='sticky top-0 z-10 bg-gray-100 shadow'>
            <div className="flex h-15 font-bold text-[15px] bg-gray-100 p-2  justify-between md:px-8 sm:px-8 w-100%">
                <div className="text-[2em]">
                    <span className="text-[red] ">Sri</span>Xplore
                </div>
                <nav className="hidden md:flex sm:flex items-center text-[15px] gap-10">
                    {navItems.map((item)=>(
                        <NavLink key={item.path} to={item.path} className={({isActive})=>isActive?'active':""}>
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className='text-3xl md:hidden' aria-label='toggle memu'>
                    {isMenuOpen? '':"="}
                </button>

                {isMenuOpen && (
                    <nav className='border-t border-gray-300 bg-gray-100 px-6 py-4 md:hidden sm:hidden'>
                        <div className='flex  flex-col gap-4 font-bold bg-gray-100 p-5'>
                            {navItems.map((item)=>(
                                <NavLink key={item.path} to={item.path} onClick={()=>setIsMenuOpen(false)}
                                className={({isActive})=>isActive?"activesm":""}> 
                                {item.name}

                                </NavLink>
                            ))}

                        </div>
                    </nav>
    
                )}
            </div>

        </div>
    )
}

export default Header
