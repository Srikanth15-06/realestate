import React, { useState } from 'react'
import { useContext } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import BlogBg from '../Components/BlogBg'
import { context } from '../Context/Context'

const Blog = () => {
  const { blogData } = useContext(context)
  
  const [currentPage, setCurrentPage] = useState(1)

  const cardsPerPage = 3;

  const totalPages = Math.ceil(blogData.length/cardsPerPage);

  const startIndex = (currentPage -1) * cardsPerPage;
  const currentBlogs = blogData.slice(startIndex,startIndex+cardsPerPage);

  return (
    <div>
      <Header/>
      <BlogBg/>

      <div className="pt-10 h-[500px] flex flex-wrap justify-center gap-5 p-5 mt-8 pb-5 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide hide-scrollbar">
        {currentBlogs?.map((blog, index) => (
          <div key={index} className=''>
            <div className=" group border-5px w-90 rounded-lg shadow-[5px] transition duration-300 hover:scale-110 hover:shadow-[20] hover:sadow-red-100">
              <div className=""><img className="rounded-[15px] h-60 w-90 grow-1" src={blog.blog_image} alt='unable to get the image currently' /></div>
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
      <div className='flex justify-center items-center gap-2 py-8'>
        <button onClick={()=>setCurrentPage((prev)=>Math.max(prev-1,1))} disabled={currentPage===1} className='px-4 py-2 rounded bg-gray-700 text-white disabled:bg-gray-300'>  ← </button>

        {Array.from({length:totalPages},(_,index)=>(
          <button key={index} onClick ={()=> setCurrentPage(index+1)}
          className={`h-10 w-10 rounded ${currentPage===index+1?"bg-yellow-500 text-white":"bg-gray-200 hover:bg-gray-300"}`}>{index+1}</button>
        ))}

        <button onClick={()=>setCurrentPage((prev)=>Math.min(prev+1,totalPages))} disabled={currentPage===totalPages} className='px-4 py-2 rounded bg-gray-700 text-white disabled:bg-gray-300'> →</button>
      </div>
      <Footer />
    </div>
  )
}

export default Blog
