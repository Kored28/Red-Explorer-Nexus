import CTA from "../call-to-action/CTA"
import DestinationBody from "./DestinationBody"
import DestinationHeroSection from "./DestinationHeroSection"


const DestinationClient = () => {
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
      <DestinationHeroSection />
      <DestinationBody />
      <CTA 
        images={images}
        hideButton
      />
    </div>
  )
}

export default DestinationClient