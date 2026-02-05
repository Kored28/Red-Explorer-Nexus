"use client";


const AboutHeroSection = () => {
    
  return (
    <div>
        <div 
        className="relative bg-about-hero h-110.5 sm:h-146.75 bg-center bg-cover z-0">
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative flex flex-row h-110.5 sm:h-146.75 items-center justify-center z-20">
                <h1 
                className={`
                    text-white font-lato font-extrabold text-4xl sm:text-[64px]
                    text-center leading-10 sm:leading-22.25
                `}
                >
                    About us
                </h1>
            
            </div>
        </div>
    </div>
  )
}

export default AboutHeroSection