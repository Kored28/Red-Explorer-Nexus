

const TravelHeroSection = () => {
  return (
    <div>
        <div 
        className="relative bg-travel-hero h-105.5 bg-center bg-cover z-0">
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative flex flex-row h-105.5 items-center justify-center z-20">
                <h1 
                className={`
                    text-white font-lato font-extrabold text-4xl sm:text-[64px]
                    text-center leading-10 sm:leading-22.25
                `}
                >
                    Travel Tips 
                </h1>
            
            </div>
        </div>
    </div>
  )
}

export default TravelHeroSection