"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { FaAngleDown, FaLocationDot } from "react-icons/fa6";

import ClientButton from "../ClientButton";
import Location from "@/public/location.svg"


const HeroSection = () => {
    const router = useRouter()
    const handleClick = () => {
        router.push("/about-us")
    };

  return (
    <div>
        <div 
        className="relative bg-home-hero h-110.5 sm:h-146.75 bg-center bg-cover z-0">
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative flex flex-col items-center gap-5 sm:gap-7.5 pt-25 sm:pt-31 z-20">
                <motion.div className="flex flex-col items-center gap-4">
                    <div className="flex gap-2">
                        <h3 className="text-white font-lato font-bold text-2xl sm:text-3xl">
                            THE COUNTER:
                        </h3>

                        <div className="flex gap-2 font-lato font-bold text-2xl sm:text-3xl">
                            <span className="text-[#FFA500]">
                                70
                            </span>
                            <h3 className="text-white">
                                Countries 
                            </h3>
                        </div>

                        <div className="flex gap-2 font-lato font-bold text-2xl sm:text-3xl">
                            <span className="text-[#FFA500]">
                                1036
                            </span>
                            <h3 className="text-white">
                                Cities 
                            </h3>
                        </div>
                    </div>

                    <h1 
                    className={`
                      text-white font-lato font-extrabold text-4xl sm:text-[64px]
                        w-full sm:w-190 text-center leading-10 sm:leading-22.25
                    `}
                    >
                        Leave your mark on all over the world  
                    </h1>
                </motion.div>

                <ClientButton 
                    label="Read More"
                    onClick={handleClick}
                />

                <div className="flex flex-col items-center">
                    <p className="text-white text-2xl font-roboto font-medium leading-[47.7px]">
                       Scroll Down to Continue 
                    </p>

                    <div className="bg-white w-8 h-8 flex items-center justify-center rounded-full">
                        <FaAngleDown 
                            size={17}
                            color="#0336FF"
                        />
                    </div>
                </div>

                <Image 
                    src={Location}
                    alt="Location Marker"
                    width={70}
                    height={70}
                    color="#0336FF"
                    className="absolute right-18 bottom-4 hidden sm:block"
                />
            </div>
        </div>
    </div>
  )
}

export default HeroSection