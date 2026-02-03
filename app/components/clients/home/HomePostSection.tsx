import PostLeft from "./post section/PostLeft"
import PostRight from "./post section/PostRight"


const HomePostSection = () => {
  return (
    <div 
      className={`flex flex-row gap-2 lg:gap-19 sm:gap-10
        py-14 sm:py-25 px-5 lg:px-17 justify-center
      `}
    >
      {/* Left */}
      <PostLeft />
      <PostRight />
    </div>
  )
}

export default HomePostSection