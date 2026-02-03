"use client"

const ContactHeroSection = () => {
  return (
    <div>
        <div 
        className="relative bg-contact-hero h-88 bg-center bg-cover z-0">
            <div className="absolute inset-0 bg-black/88"></div>

            <div className="relative flex flex-row h-88 items-center justify-center z-20">
                <h1 
                className={`
                    text-white font-lato font-extrabold text-4xl sm:text-[64px]
                    text-center leading-10 sm:leading-22.25
                `}
                >
                    Contact
                </h1>
            
            </div>
        </div>
    </div>
  )
}

export default ContactHeroSection