"use client";

import Image from "next/image";
import TravelImg from "@/public/images/Travel-ft-img.jpg"
import { FaLocationDot } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";


const DestinationBody = () => {
    return (
        <div
            className={`
              flex flex-col items-center gap-15 lg:gap-27 sm:gap-15
              pt-16 pb-28.75
            `}
        >
            {/* Where do Section */}
            <div 
                className='max-w-360'
            >
                <div
                    className={`
                        flex flex-col sm:flex-row gap-18 sm:gap-46.5 w-full pr-5 sm:pr-14
                    `}
                >
                    <h2
                        className={`
                            font-lato font-bold text-[64px] text-black w-full sm:w-[60%]
                            pl-5 sm:pl-17.75 pr-9.5 py-8 bg-dotted
                        `}
                    >
                        <span className='text-[#FFA500] underline'>Where do</span> you want to
                        go? 
                    </h2>
    
                    <p
                        className={`
                            w-full sm:w-[40%] font-lato font-bold text-lg leading-10 text-justify px-5 
                            sm:px-0
                        `}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac. 
                        Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. 
                        Nec tortor ut cursus ornare nibh vivamus. 
                        Quam elementum at velit viverra mattis.
                    </p>
                </div>
            </div>

            {/* Continent Filter */}
            <div 
                className='grid grid-cols-5 max-w-360 mt-8.25 px-5 lg:px-0'
            >
                <div 
                    className={`
                        border-2 border-[#C4C4C4] py-7.5 w-64.75
                    `}
                >
                    <h2
                        className={`
                            font-lato font-bold text-2xl text-center
                        `}
                    >
                        South America
                    </h2>
                </div>
                
                <div 
                    className={`
                        border-2 border-[#C4C4C4] py-7.5 w-64.75
                    `}
                >
                    <h2
                        className={`
                            font-lato font-bold text-2xl text-center
                        `}
                    >
                        North America
                    </h2>
                </div>

                <div 
                    className={`
                        border-2 border-[#C4C4C4] bg-[#0336FF] text-white py-7.5 w-64.75
                    `}
                >
                    <h2
                        className={`
                            font-lato font-bold text-2xl text-center
                        `}
                    >
                        Europe
                    </h2>
                </div>

                <div 
                    className={`
                        border-2 border-[#C4C4C4] py-7.5 w-64.75
                    `}
                >
                    <h2
                        className={`
                            font-lato font-bold text-2xl text-center
                        `}
                    >
                        Africa
                    </h2>
                </div>

                <div 
                    className={`
                        border-2 border-[#C4C4C4] py-7.5 w-64.75
                    `}
                >
                    <h2
                        className={`
                            font-lato font-bold text-2xl text-center
                        `}
                    >
                        Asia
                    </h2>
                </div>

                
            </div>

            {/* Destination Posts */}
            <div
                className="grid grid-cols-3 max-w-360 gap-21.75 px-5 lg:px-17.75"
            >
                <div 
                    className={`flex flex-col`}
                >
                    <div className="w-95.75">
                        <Image
                        src={TravelImg}
                        alt="Featured Image"
                        className=" h-90 object-cover"
                        />
                    </div>

                    {/* Body */}
            
                    <div
                        className={`
                            bg-white flex flex-col gap-2 w-88 pt-11.25 pb-6.25 -mt-20
                            shadow-inner-[0_2px_6px_0_rgba(0,0,0,0.197)] shadow-[0_6px_14px_0_rgba(0,0,0,0.283)]    
                        `}
                    >
                        <p 
                        className={`
                            font-lato font-bold text-lg text-[#FFA500] leading-[33.81px]
                            border-l-6 border-[#FFA500] px-4.5 mb-2
                        `}
                        >
                            July, 15, 2021 - Tips and Tricks 
                        </p>
            
                        <div className={`flex flex-col px-6 pb-6`}>
                            <h2
                                className={`
                                font-lato font-semibold text-2xl
                                `}
                            >
                                Finding Love & Home
                                In Tbilisi, Georgia
                            </h2>
                        </div>
            
                        <div 
                        className={`
                            flex flex-row justify-between mx-6 pt-8 border-t border-t-[#C4C4C4]
                        `}
                        >
                            <div
                                className={`
                                    flex flex-row gap-3 items-center
                                `}
                            >
                                <FaLocationDot
                                size={20}
                                color="#FFA500"
                                />
                                <p
                                className={`
                                    font-lato font-medium text-lg 
                                `}
                                >
                                    Penang
                                </p>
                            </div>
                            
                            <div
                                className={`
                                    flex flex-row gap-3 items-center
                                `}
                            >
                                <FaComments
                                size={20}
                                color="#FFA500"
                                />
                                <p
                                className={`
                                    font-lato font-medium text-lg 
                                `}
                                >
                                Comment (52)
                                </p>
                            </div>
            
                        </div>
            
                    </div>
            
                </div>
            </div>
  
        </div>
    )
}

export default DestinationBody