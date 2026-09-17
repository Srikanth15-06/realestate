import React, { useContext, useRef } from 'react'
import { context } from '../Context/Context';

const RecentBlog = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({
            left: -350,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({
            left: 350,
            behavior: "smooth",
        });
    };

    const {blogData} = useContext(context)

    return (
        <div>
            <div className=" relative pt-5 bg-gray-100 flex flex-col justify-center items-center">
                <div className="text-[gold] ">------BLOG------</div>
                <div className="font-bold text-[1.8em]">Recent Blog</div>

                <button onClick={scrollLeft} className="absolute left-[5%] top-[63%] z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gray-700 text-white shadow-md transition hover:bg-gray-900 sm:h-11 sm:w-11"> ←</button>
                <div ref={scrollRef} className="w-[90%] flex justify-center gap-5 p-5 mt-8 pb-5 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide hide-scrollbar">
                    {blogData?.map((blog,index)=>(
                        <div key={index} className=''>
                            <div className=" group border-5px w-80 rounded-lg shadow-[5px] transition duration-300 hover:scale-105 hover:shadow-[20] hover:sadow-red-100">
                                <div className=""><img className="rounded-[15px] h-50 w-80 grow-1" src={blog.blog_image}/></div>
                                <div className="font-bold">{blog.blog_title}</div>
                                <div className='px-1 flex felx-wrap'>{blog.blog_subject}......</div>
                                <span className='px-5 text-[0.7em]'>🙎🏻 {blog.posted_by}</span>
                                <div className='flex justify-between px-5 text-[0.7em]'>
                                    <span>⌛{blog.blog_created_at}</span>
                                    <span>📝 {blog.comments}</span>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                <button onClick={scrollRight} className="absolute right-[5%] top-[63%] z-10 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gray-700 text-white shadow-md transition hover:bg-gray-900 sm:h-11 sm:w-11" >  → </button>
            </div>
        </div>
    )
}

export default RecentBlog
