"use client";

import CTA from "../call-to-action/CTA";
import HeroSection from "./HeroSection";
import HomePostSection from "./HomePostSection";


const HomeClient = () => {

  const images = [
    {
      url: "/images/insta/insta-1.jpg",
      alt: "Instagram photo",
    },
    {
      url: "/images/insta/insta-2.jpg",
      alt: "Instagram photo",
    },
    {
      url: "/images/insta/insta-3.jpg",
      alt: "Instagram photo",
    },
    {
      url: "/images/insta/insta-4.jpg",
      alt: "Instagram photo",
    },
    {
      url: "/images/insta/insta-5.jpg",
      alt: "Instagram photo",
    },
    {
      url: "/images/insta/insta-6.jpg",
      alt: "Instagram photo",
    },
    {
      url: "/images/insta/insta-7.jpg",
      alt: "Instagram photo",
    },
  ]

  return (
    <div>
      <HeroSection />
      <HomePostSection />
      <CTA 
        images={images}
      />
    </div>
  )
}

export default HomeClient