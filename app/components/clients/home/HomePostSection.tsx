import PostLeft from "./post section/PostLeft"
import PostRight from "./post section/PostRight"


const HomePostSection = () => {
  return (
    <div 
      id="postSection"
      className={`flex flex-col-reverse md:flex-row gap-20 md:gap-19
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