import CTA from '../call-to-action/CTA'
import AboutBody from './AboutBody'
import AboutHeroSection from './AboutHeroSection'

const AboutClient = () => {
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
      <AboutHeroSection/>
      <AboutBody />
      <CTA 
        images={images}
      />
    </div>
  )
}

export default AboutClient