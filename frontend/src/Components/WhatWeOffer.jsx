import React, { useContext } from "react";
import { context } from "../Context/Context";
const WhatWeOffer = () => {
    const {whatWeOfferData} = useContext(context)
    return (
        <div>
            <div className="flex flex-col justify-center items-center pb-20"> 
                <div className="text-[gold]">------WHAT WE OFFER------</div>
                <div className="font-bold text-[1.8em]"> Exclusive Offer For You</div>
                <div className="flex flex-wrap justify-center items-center gap-10 pt-5">
                    {whatWeOfferData?.slice(0,6).map((plot) => (
                        <div key={plot.plot_name} className="group bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" >
                            <img className="h-50 w-80 object-cover" src={plot.plot_image} alt={plot.plot_name} />
                            <div className="p-3">
                                <div> <span className="font-bold"> ₹ {plot.plot_price_per_sqft} </span>{" "} per sqft </div>
                                <div> <span className="font-bold"> 🔻 {plot.plot_name} </span> </div>
                                <div> <span className="font-bold"> 📍 {plot.plot_address} </span> </div>
                                <div> <span className="font-bold"> 📐 {plot.plot_size} </span>{" "} sqft </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;