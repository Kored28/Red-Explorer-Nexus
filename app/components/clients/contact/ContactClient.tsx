import CTA from "../call-to-action/CTA"
import ContactBody from "./ContactBody"
import ContactHeroSection from "./ContactHeroSection"


const ContactClient = () => {
  const images = [
    {
      url: "/images/insta/insta-8.jpg",
      alt: "Instagram photo",
    },
    {
      url: "/images/insta/insta-9.jpg",
      alt: "Instagram photo",
    },
    {
      url: "/images/insta/insta-10.jpg",
      alt: "Instagram photo",
    },
    {
      url: "/images/insta/insta-11.jpg",
      alt: "Instagram photo",
    },
    {
      url: "/images/insta/insta-12.jpg",
      alt: "Instagram photo",
    },
    {
      url: "/images/insta/insta-13.jpg",
      alt: "Instagram photo",
    },
    {
      url: "/images/insta/insta-14.jpg",
      alt: "Instagram photo",
    },
  ]
  return (
    <div>
      <ContactHeroSection />
      <ContactBody />
      <CTA 
        images={images}
        hideButton
      />
    </div>
  )
}

export default ContactClient