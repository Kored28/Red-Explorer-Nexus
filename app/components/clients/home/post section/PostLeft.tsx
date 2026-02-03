"use client";

import Image from "next/image";

import ClientButton from "../../ClientButton";
import Placeholder from "@/public/images/about-pic-2.png";
import Apple from "@/public/images/Apple mackbook.png";
import Iphone from "@/public/images/Iphone x case.png";
import Band from "@/public/images/Master watch.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const PostLeft = () => {
  return (
    <div className="flex flex-col gap-10.5 w-[30%] sm:w-109.5">
      {/* About Me */}
      <div
        className={`bg-white px-8 flex flex-col gap-2 pb-4.5
          shadow-inner-[0_2px_6px_0_rgba(0,0,0,0.197)] shadow-[0_6px_14px_0_rgba(0,0,0,0.283)]
        `}
      >
        <h2 className="font-lato font-bold text-3xl text-center leading-[51.39px]">
          About Me
        </h2>
        <Image
          src={Placeholder}
          alt="About Me Pic"
          className="w-90.75 h-73.25 bg-center object-cover"
        />
        <p className="font-lato font-medium sm:w-90.75 leading-[20.64px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Cum in vel massa donec sit. Mi ut risus sem malesuada ornare. 
          Ac eu erat eget et lorem est arcu. Gravida hendrerit sit blandit semper lacus. 
          Nulla amet suscipit sit lectus tortor. Dolor non eget suspendisse leo scelerisque sed d.
        </p>

        <div className="flex flex-col items-center pt-2">
          <ClientButton
            label="Read More"
            onClick={() => {}}
          />
        </div>
      </div>

      {/* Categories */}
      <div
        className={`bg-white px-9 flex flex-col gap-16 pb-4.5 pt-4
          shadow-inner-[0_2px_6px_0_rgba(0,0,0,0.197)] shadow-[0_6px_14px_0_rgba(0,0,0,0.283)]
        `}
      >
        <h2 className="font-lato font-bold text-3xl text-center leading-[51.39px]">
          Categories
        </h2>
        
        <div className="flex flex-row justify-between items-center">
          <h4 className="font-lato font-medium text-2xl text-center leading-10">
            Europe
          </h4>
          <p className="font-lato font-medium text-2xl text-center leading-10">
            (11)
          </p>
        </div>
      </div>

      {/* Popular Post */}
      <div className="flex flex-col gap-9">
        <div
          className={`bg-white px-9 flex flex-col gap-16 py-8
            shadow-inner-[0_2px_6px_0_rgba(0,0,0,0.197)] shadow-[0_6px_14px_0_rgba(0,0,0,0.283)]
          `}
        >
          <h2 className="font-lato font-bold text-3xl text-center leading-[46.98px]">
            Popular Post
          </h2>
        </div>

      </div>

      {/* Recent Post */}
      <div className="flex flex-col gap-9">
        <div
          className={`bg-white px-9 flex flex-col gap-16 py-8
            shadow-inner-[0_2px_6px_0_rgba(0,0,0,0.197)] shadow-[0_6px_14px_0_rgba(0,0,0,0.283)]
          `}
        >
          <h2 className="font-lato font-bold text-3xl text-center leading-[46.98px]">
            Recent Post
          </h2>
        </div>

      </div>

      {/* Gear I Use */}
      <div
        className={`bg-white px-8 flex flex-col items-center gap-2 pb-4.5
          shadow-inner-[0_2px_6px_0_rgba(0,0,0,0.197)] shadow-[0_6px_14px_0_rgba(0,0,0,0.283)]
        `}
      >
        <h2 
          className={`font-lato font-bold text-3xl text-center 
          leading-[51.39px] pb-6
          `}
        >
          Gear I Use
        </h2>

        <h2 className="font-lato font-bold text-3xl text-center leading-[51.39px]">
          What’s in My Bag??
        </h2>
        
        <p 
          className={`font-lato font-normal text-2xl text-center w-84 leading-[33.81px]
          text-[#0B0A0A]
          `}
          >
          Unfortunately, there is no 
          “one-size-fits-all” when it comes to travel packing lists.
        </p>

        <div className="flex flex-col items-center pt-2">
          <ClientButton
            label="View Details"
            onClick={() => {}}
          />
        </div>
      </div>
      
      {/* Product That I Have */}
      <div className="flex flex-col gap-9">
        <div
          className={`bg-white px-9 flex flex-col gap-16 py-8
            shadow-inner-[0_2px_6px_0_rgba(0,0,0,0.197)] shadow-[0_6px_14px_0_rgba(0,0,0,0.283)]
          `}
        >
          <h2 className="font-lato font-bold text-3xl text-center leading-[46.98px]">
            Product That I Have
          </h2>
        </div>
          {/* Product Cards */}
        <div className="flex flex-col gap-7">
          <div className="flex flex-row items-center gap-3.5">
            <Image
              src={Apple}
              alt="Product Image"
              className="w-26.5 h-20"
            />

            <div className="flex flex-col">
              <h4 className="font-lato font-semibold text-2xl leading-7.5">
                Apple MacBook Air  MJV2ELL/A 13-inch Laptop 
              </h4>

              <p className="font-lato font-semibold text-2xl leading-7.5 text-[#0336FF]">
                $514
              </p>
            </div>
          </div>
          
          <div className="flex flex-row items-center gap-3.5">
            <Image
              src={Iphone}
              alt="Product Image"
              className="w-26.5 h-20"
            />

            <div className="flex flex-col">
              <h4 className="font-lato font-semibold text-2xl leading-7.5">
                Iphone Xs case, Iphone X case, SUPCASE
              </h4>

              <p className="font-lato font-semibold text-2xl leading-7.5 text-[#0336FF]">
                $267
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-3.5">
            <Image
              src={Band}
              alt="Product Image"
              className="w-39 h-23 object-cover"
            />

            <div className="flex flex-col">
              <h4 className="font-lato font-semibold text-2xl leading-7.5">
                AMaster Sport band for Apple wrist watch
              </h4>

              <p className="font-lato font-semibold text-2xl leading-7.5 text-[#0336FF]">
                $378
              </p>
            </div>
          </div>

        </div>
        
      </div>

      {/* Get In Touch */}
      <div className="flex flex-col gap-9">
        <div
          className={`bg-white px-9 flex flex-col gap-16 py-8
            shadow-inner-[0_2px_6px_0_rgba(0,0,0,0.197)] shadow-[0_6px_14px_0_rgba(0,0,0,0.283)]
          `}
        >
          <h2 className="font-lato font-bold text-3xl text-center leading-[46.98px]">
            Product That I Have
          </h2>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-2 gap-7 px-7">
          <div 
            className={`flex flex-row items-center gap-4
              bg-[#4056AC] rounded-lg text-white w-45 px-7 py-6
            `}
          >
            <FaFacebookF
              size={30}
            />

            <div className="flex flex-col">
              <h4 className="font-lato font-bold text-base leading-4">
                65.5K
              </h4>

              <p className="font-lato font-bold text-base leading-4">
                Likes
              </p>
            </div>
          </div>

          <div 
            className={`flex flex-row items-center gap-4
              bg-[#60B7FE] rounded-lg text-white w-45 px-7 py-6
            `}
          >
            <FaTwitter
              size={30}
            />

            <div className="flex flex-col">
              <h4 className="font-lato font-bold text-base leading-4">
                105 k
              </h4>

              <p className="font-lato font-bold text-base leading-4">
                Followers
              </p>
            </div>
          </div>

          <div 
            className={`flex flex-row items-center gap-4
              bg-[#FE2C3C] rounded-lg text-white w-45 px-7 py-6
            `}
          >
            <FaYoutube
              size={30}
            />

            <div className="flex flex-col">
              <h4 className="font-lato font-semibold text-base leading-4">
                1.5 M
              </h4>

              <p className="font-lato font-semibold text-base leading-4">
                Subscribers
              </p>
            </div>
          </div>

          <div 
            className={`flex flex-row items-center gap-4
              bg-[#E14D93] rounded-lg text-white w-45 px-7 py-6
            `}
          >
            <FaInstagram
              size={30}
            />

            <div className="flex flex-col">
              <h4 className="font-lato font-semibold text-base leading-4">
                85 k
              </h4>

              <p className="font-lato font-semibold text-base leading-4">
                Followers
              </p>
            </div>
          </div>


        </div>

      </div>


    </div>
  )
}

export default PostLeft