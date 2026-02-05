"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";


const MainNav = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = useCallback(() => {
        setToggle((toggle) => !toggle);
    },[]);

    const pathname = usePathname();
    const routes = [
        {
            href: '/',
            label: 'Home',
            active: pathname === '/'
        },
        {
            href: '/about-us',
            label: 'About us',
            active: pathname === '/about-us'
        },
        {
            href: '/destination',
            label: 'Destination',
            active: pathname === '/destination'
        },
        {
            href: '/travel-tips',
            label: 'Tips',
            active: pathname === '/travel-tips'
        },
        {
            href: '/contact',
            label: 'Contact',
            active: pathname === '/contact'
        }
    ]
  return (
    <div>
        <div className="hidden lg:flex items-center gap-18.5">
            {
                routes.map((route, index) => (
                    <Link
                        key={index}
                        href={route.href}
                        className={
                           route.active ? "bg-[#0336FF] font-roboto font-semibold rounded-lg px-[40.5px] py-[6.8px] text-white" 
                           : 
                           "text-base text-[#FFA500] font-roboto rounded-lg font-semibold hover:bg-[#0336FF] hover:px-[40.5px] hover:py-[6.8px] hover:text-white"
                        }
                    >
                        {route.label}
                    </Link>
                ))
            }
        </div>
        <div className="flex lg:hidden">
            <FaBars 
            size={20}
            onClick={handleClick}
            className="text-[#0336FF]"
            />

            {toggle && (
                <div 
                className="w-full h-screen absolute top-0 right-0 bg-black opacity-80
                "
                >
                    <div className="flex flex-col items-center gap-18.5 bg-white
                        w-[50%] opacity-100 h-screen py-10 z-99 
                    ">
                        {
                            routes.map((route, index) => (
                                <Link
                                    key={index}
                                    href={route.href}
                                    className={
                                    route.active ? "bg-[#0336FF] rounded-lg px-[40.5px] py-[6.8px] text-white font-roboto font-semibold" 
                                    : "text-base text-[#FFA500] font-roboto font-semibold"
                                    }
                                >
                                    {route.label}
                                </Link>
                            ))
                        }
                    </div>
                    <IoMdClose 
                    size={28}
                    onClick={handleClick}
                    className="absolute top-5 right-5 text-white z-99"
                    />
                </div>
            )}
        </div>
    </div>
  )
}

export default MainNav