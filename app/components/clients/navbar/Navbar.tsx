"use client";

import { useEffect, useState } from "react";

import Logo from "./Logo";
import Container from "../Container";
import MainNav from "./MainNav";


const Navbar = () => {
    const [nav, setNav] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setNav(window.scrollY > 16);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    
  return (
    <div 
        className={`fixed w-full top-0 left-0 z-99
            ${nav ? "bg-white shadow-sm" : "bg-transparent"}
        `}
    >
        <div className="py-4">
            <Container>
                <div 
                    className={`
                        flex flex-row justify-between items-center z-10
                    `}
                >
                    <Logo/>
                    <MainNav/>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Navbar