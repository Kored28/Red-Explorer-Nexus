"use client";

import Image from "next/image";
import TravelImg from "@/public/images/Travel-ft-img.jpg"
import { FaLocationDot } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";


const PostRight = () => {
  return (
    <div className='w-full sm:w-198.5 flex flex-col'>
      <div 
      className={`bg-white flex flex-col gap-2
        shadow-inner-[0_2px_6px_0_rgba(0,0,0,0.197)] shadow-[0_6px_14px_0_rgba(0,0,0,0.283)]
      `}
      >
        <Image
          src={TravelImg}
          alt="Featured Image"
          className="w-full h-113.25 object-cover pb-3"
        />

        {/* Body */}

        <div
          className={`flex flex-col gap-2.25 pb-8`}
        >
          <p 
            className={`
              font-lato font-medium text-lg leading-[33.81px]
              border-l-6 border-[#FFA500] px-4.5 mb-2
            `}
          >
            July, 15, 2021 - Tips and Tricks 
          </p>

          <div className={`flex flex-col gap-1 px-6`}>
            <h2
              className={`
                font-lato font-semibold text-[31.64px] leading-[46.98px]
              `}
            >
              A traveler’s guide to Penang, Malaysia - Where to
              Eat, Drink, Sleep and Explore 
            </h2>
            <p
              className={`
                font-lato font-medium text-2xl leading-10
              `}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.
            </p>
          </div>

          <div 
            className={`
              flex flex-row justify-between px-6 pt-2
            `}
          >
            <div
              className={`
                flex flex-row gap-3 items-center
              `}
            >
              <FaLocationDot
                size={25}
                color="#FFA500"
              />
              <p
                className={`
                  font-lato font-medium text-lg leading-10
                `}
              >
                Penang, Malaysia 
              </p>
            </div>
            
            <div
              className={`
                flex flex-row gap-3 items-center
              `}
            >
              <FaComments
                size={25}
                color="#FFA500"
              />
              <p
                className={`
                  font-lato font-medium text-lg leading-10
                `}
              >
                Comment (52)
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default PostRight