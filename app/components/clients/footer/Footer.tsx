
import Image from "next/image"

import Logo from "../navbar/Logo";
import SideLogo from "@/public/images/Sidehustle.png"
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col border-t-2 border-[#C4C4C4] mt-8.5"
    >
        {/* Upper */}
        <div
            className={`
               hidden md:grid grid-cols-5 items-center 
                md:px-10 sm:px-4 pt-13.25 pb-4 max-w-5xl w-full mx-auto md:gap-10
            `}
        >
            <div 
                className={
                    `col-span-2`
                }
            >

                <Logo/>
            </div>

            {/* <div
                className={`
                    flex flex-row gap-50
                `}
            > */}
                <h2
                    className={`
                        font-roboto font-bold text-base
                    `}
                >
                    Body
                </h2>
                <h2
                    className={`
                        font-roboto font-bold text-base
                    `}
                >
                    Travel
                </h2>
                <h2
                    className={`
                        font-roboto font-bold text-base
                    `}
                >
                    Account
                </h2>
            {/* </div> */}
        </div>


        {/* Lower */}
        <div
            className={`
                bg-black/67 flex flex-col items-center pt-10 pb-24.25 
            `}
        >
            {/* Upper */}
            <div
                className={`
                    grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1  gap-12.75 text-white md:px-10 px-4
                    font-roboto text-base leading-6.75 pb-34.75  max-w-5xl w-full mx-auto md:gap-10
                `}
            >
                <div 
                    className={`
                        flex flex-col gap-5 text-justify md:col-span-2
                    `}
                >
                    <div 
                        className={`
                            flex md:hidden
                        `}
                    >
                        <Logo/>
                    </div>
                    <p>
                        We are location independent bloggers, digital influencers, small group tour organizers and 
                        world travelers with a serious passion for the sun, the sea and adventure.
                    </p>
                    <p>
                        Eight years and 60-something countries later and we are still on the road.
                    </p>
                </div>

                
                <div
                    className="space-y-5"
                >
                    <h2
                        className={`
                            font-roboto font-bold text-2xl flex md:hidden
                        `}
                    >
                        Body
                    </h2>
                    <ul className="flex flex-col gap-5.5 ">
                        <li>
                            Add: 221B John hope 
                            Street, Lekki, Lagos,
                            Nigeria.
                        </li>
                        <li>
                            T: +234 706 507 8544
                        </li>
                        <li>
                            E: info@redexplorers.com
                        </li>
                        <li>
                            W: www. redexplorers.com
                        </li>
                    </ul>
                </div>    
                    
                {/* Travel */}

                <div
                    className="space-y-5"
                >
                    <h2
                        className={`
                            font-roboto font-bold text-2xl flex md:hidden
                        `}
                    >
                        Travel
                    </h2>
                    <ul className="flex flex-col gap-5.5 ">
                        <li>
                            My List
                        </li>
                        <li>
                            My Requests
                        </li>
                        <li>
                            My Credits
                        </li>
                        <li>
                            My Info
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>
                    
                    {/* Account */}

                <div
                    className="space-y-5"
                >
                    <h2
                        className={`
                            font-roboto font-bold text-2xl flex md:hidden
                        `}
                    >
                        Account
                    </h2>
                    <ul className="flex flex-col gap-5.5 ">
                        <li>
                            Travel
                        </li>
                        <li>
                            Why Travel
                        </li>
                        <li>
                            Become a Traveler
                        </li>
                        <li>
                            How Its Works
                        </li>
                        <li>
                            Traveling FAQs
                        </li>
                    </ul>
                </div>
                

            </div>
            

            {/* Lower */}
            <div
                className={`
                    border-t border-t-[#EEEEEE] w-full
                `}
            >
                <div
                    className={`
                        flex flex-col md:flex-row justify-center md:items-center gap-20.75 text-white
                        font-roboto text-base leading-6.75 px-4 md:px-0
                        py-6.75
                    `}
                >
                    <Image 
                        src={SideLogo}
                        alt="SideHustle Logo"
                        className="w-47.25 h-8.25 object-cover"
                    />

                    <div
                        className="grid grid-cols-4  space-x-3.5"
                    >
                        <FaFacebookF 
                            size={20}
                        />

                        <FaTwitter 
                            size={21}
                        />

                        <FaGooglePlusG 
                            size={26}
                        />

                        <FaLinkedinIn
                            size={20}
                        />
                    </div>

                    <div>
                        <p>
                            © 2021 RedExplorers. All rights reserved   |   Terms   |   Privacy   |   Site Map
                        </p>
                    </div>

                    
                </div>
            </div>

        </div>

    </div>
  )
}

export default Footer