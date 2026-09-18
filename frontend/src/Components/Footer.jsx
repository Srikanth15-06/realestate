import React from "react";
import "../index.css";
const Footer = () => {
    return (
        <footer className="bg-[#b1b93f] text-white px-6 py-10">
           
            <div className=" max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 py-16 " >
                
                <div>
                    <h1 className="font-bold text-[20px] pb-3"> FindState </h1>
                    <p className="leading-6"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor eaque aut deleniti eum voluptatem harum. </p>
                </div>
                
                <div>
                    <h1 className="font-bold text-[20px] pb-3"> Community </h1>
                    <p>→ Search Properties</p>
                    <p>→ For Agents</p>
                    <p>→ Reviews</p>
                    <p>→ FAQs</p>
                </div>
                
                <div>
                    <h1 className="font-bold text-[20px] pb-3"> About Us </h1>
                    <p>→ Our Story</p>
                    <p>→ Meet the Team</p>
                    <p>→ Careers</p>
                </div>
                
                <div>
                    <h1 className="font-bold text-[20px] pb-3"> Company </h1>
                    <p>→ About Us</p>
                    <p>→ Press</p>
                    <p>→ Contact</p>
                    <p>→ Careers</p>
                </div>
                
                <div>
                    <h1 className="font-bold text-[20px] pb-3"> Have a Question? </h1>
                    <p>203 Fake St, Mountain, Hyderabad</p>
                    <p>+91 9502993964</p>
                    <p>info@yourdomain.com</p>
                    <p>www.website.com</p>
                </div>
            </div>
           
            <div className="border-t border-white/30 pt-6 text-center"> Copyright © 2026 All Rights Reserved </div>
        </footer>
    );
};

export default Footer;