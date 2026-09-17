import React, { useContext, useRef } from "react";
import "../index.css";
import {context} from "../Context/Context"

const Reviews = () => {
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

  const {reviews} = useContext(context)
 
  return (
    <section className="bg-gray-200 px-4 py-12 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-[13px] font-medium tracking-wider text-yellow-500 sm:text-[15px]">
            -------- TESTIMONIAL --------
          </div>

          <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-[35px]">
            Happy Clients
          </h2>
        </div>

        {/* Slider */}
        <div className="relative mt-8">

          {/* Left Button */}
          <button onClick={scrollLeft} className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gray-700 text-white shadow-md transition hover:bg-gray-900 sm:h-11 sm:w-11"> ←
          </button>
          {/* Cards */}
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 py-2 scrollbar-hide hide-scrollbar">
            {reviews.map((review, index) => (
              <div key={index} className=" flex flex-col justify-around h-60 w-[85%] min-w-[85%] snap-start bg-white p-5 shadow-sm sm:w-[48%] sm:min-w-[48%] md:w-[32%] md:min-w-[32%]" >
               
                <p className="text-sm leading-6 text-gray-600 sm:text-base">{review.comment}  </p>

                <div className="mt-5 flex items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center  text-xs text-white sm:h-14 sm:w-14">
                    <img className="rounded-[20px]" src ={review.image}/>
                  </div>

                  <div className="pl-3">
                    <div className="font-semibold text-gray-800"> {review.name}</div>
                    <div className="text-sm text-gray-500"> {review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button onClick={scrollRight} className="absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gray-700 text-white shadow-md transition hover:bg-gray-900 sm:h-11 sm:w-11" >  → </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;