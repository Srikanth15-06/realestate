import React from "react";

const WhyChooseUs = () => {
    return (
        <section className="relative w-full overflow-hidden py-10 ">
            <div className="absolute  right-0 top-[0px] h-[9100px] w-[75%] bg-yellow-100" />

            <div className="relative z-1 mx-auto w-[90%] max-w-7xl">

                <div className="mb-8 w-full z-0 text-center">
                    <span className="text-sm font-semibold uppercase tracking-[4px] text-gray-500"> ----- Find Properties -----</span>
                    <h2 className="mt-3 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">Find Properties In Your City </h2>
                </div>

                <div className="flex flex-col items-center gap-12 lg:flex-row">

                    <div className="w-full z-1 lg:w-1/2">
                        <img className="h-[500px] w-full object-cover shadow-xl" src="https://img.jamesedition.com/listing_images/2024/11/05/16/15/26/8083cfaa-1b81-43a5-a81a-558a8bc8104c/je/1100xxs.jpg" alt="Luxury property" />
                    </div>

                    <div className="w-full lg:w-1/2 lg:pl-10">
                        <div className="mb-8">
                            <span className="text-sm font-semibold uppercase tracking-[3px] text-gray-500"> Why Choose Us? </span>
                            <h3 className="mt-2 text-3xl font-bold text-gray-900"> Your Trusted Real Estate Partner </h3>
                            <p className="mt-4 leading-7 text-gray-600"> We make buying and selling property simple, transparent, and stress-free. From finding the right opportunity to closing the deal, our team is here to guide you every step of the way. </p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">Flexible Financing</h4>
                                <p className="mt-1 leading-6 text-gray-600"> Explore property opportunities with flexible financing solutions designed to make your investment journey easier and more accessible. </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-gray-900"> Competitive Cash Offers</h4>
                                <p className="mt-1 leading-6 text-gray-600"> Get straightforward, competitive cash offers with a smooth and hassle-free process, helping you move forward with confidence. </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-gray-900"> Expert Guidance </h4>
                                <p className="mt-1 leading-6 text-gray-600"> Our experienced property professionals provide personalized advice and market insights to help you make informed real-estate decisions. </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-gray-900"> Transparent Pricing </h4>
                                <p className="mt-1 leading-6 text-gray-600"> No hidden surprises. We believe in clear, upfront pricing so you know exactly what you're getting from the beginning.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;