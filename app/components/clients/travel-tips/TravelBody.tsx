"use client";

import Image from "next/image";
import { FaComments, FaStar } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";
import useTravelTips from "@/hooks/useTravelTips";
import { Spinner } from "@/components/ui/spinner";

interface Post {
  id: string;
  title: string;
  content: string;
  featuredImage: string;
  excerpt?: string;
  country: {
    id: string;
    name: string
  }
  createdAt: string;
}

const TravelBody = () => {
    const { data: fetchedTravelTips, isLoading } = useTravelTips();

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        });
    };

    return (
        <div
            className={`
                flex flex-col items-center gap-15 lg:gap-22 sm:gap-15
                pt-16 pb-28.75
            `}
        >
            {/* Where do Section */}
            <div 
                className='max-w-360'
            >
                <div
                    className={`
                        flex flex-col sm:flex-row gap-18 sm:gap-30.75 w-full px-5 lg:px-17.75
                    `}
                >
                    <h2
                        className={`
                            font-roboto font-bold text-[64px] text-black w-full sm:w-[45%]                           
                        `}
                    >
                        Maintaining your&nbsp;
                        <span className='text-[#FFA500] underline'>privacy</span> during travels. 
                    </h2>
    
                    <p
                        className={`
                            w-full sm:w-[55%] font-roboto font-medium text-lg leading-10 text-justify px-5 
                            sm:px-0
                        `}
                    >
                        Molestie aliquam sit lacus, sem vulputate sed magnis eu. 
                        Non nec at lobortis enim, feugiat fermentum lobortis gravida in. 
                        Tellus tincidunt amet, egestas sit. Feugiat faucibus eu magna dolor, turpis dignissim. 
                        Facilisis purus nibh vitae arcu. In tellus in amet nulla. 
                        Rutrum orci purus neque blandit cursus volutpat nisl morbi egestas. 
                        Adipiscing porta quis turpis ut nulla morbi. Varius id tempor, ipsum leo. <br/>
                        vivamus rhoncus, augue risus. Ornare posuere scelerisque a at. 
                        Ut nunc neque at commodo nulla egestas eros. 
                        Ullamcorper a eu nulla diam nec pulvinar sit dui nec. 
                        Mauris sed vestibulum vitae massa. Ac morbi ut velit ac suscipit id. 
                        Venenatis scelerisque ut nam ultrices tortor integer. Odio ullamcorper rutrum  read more
                    </p>
                </div>
            </div>


            {/* Destination Posts */}
            <div
                className="grid grid-cols-1 md:grid-cols-3 max-w-360 gap-21.75 px-5 lg:px-17.75"
            >
                {!fetchedTravelTips || isLoading ? (
                    <div className="col-span-3 flex flex-row justify-center">
                        <Spinner color="blue" className="size-20" />
                    </div>
                ) : (
                    fetchedTravelTips.map((post: Post) => (
                        <div 
                        key={post.id}
                            className={`flex flex-col w-full sm:w-93.5 rounded-[30px]
                                shadow-inner-[0_2px_6px_0_rgba(0,0,0,0.197)] shadow-[0_6px_14px_0_rgba(0,0,0,0.283)]  
                            `}
                        >
                            <div className="relative h-55.25">
                                <Image
                                    src={post.featuredImage}
                                    alt="Featured Image"
                                    fill
                                    className="object-cover rounded-t-[30px]"
                                />
                            </div>

                            {/* Body */} 
                            <div
                                className={`
                                    bg-white flex flex-col gap-2 pt-5 pb-6.75 rounded-b-[30px]
                                    
                                `}
                            >
                                <p 
                                className={`
                                    font-lato font-bold text-lg text-[#6E7191] leading-[33.81px]
                                    px-4
                                `}
                                >
                                    {formatDate(post.createdAt)} - Tips and Tricks 
                                </p>
                    
                                <div className={`flex flex-col px-4 pt-2.25 pb-6.5 bg-[#0336FF]`}>
                                    <h2
                                        className={`
                                            font-lato font-black text-[34px] text-white
                                        `}
                                    >
                                        {post.title.length > 25 ? post.title.slice(0, 25) + "..." : post.title}
                                    </h2>
                                </div>
                    
                                <div 
                                className={`
                                    flex flex-row justify-between pt-5 pr-8
                                `}
                                >
                                    <div
                                        className={`
                                            flex flex-row gap-0.5 items-center
                                        `}
                                    >
                                        <FaLocationDot
                                            size={37}
                                            color="#14142B"
                                        />
                                        <p
                                        className={`
                                            font-lato font-semibold text-sm text[#14142B]
                                        `}
                                        >
                                            {post.country.name}
                                        </p>
                                    </div>
                                    
                                    <div
                                        className={`
                                            flex flex-row gap-0.5 items-center
                                        `}
                                    >
                                        <FaComments
                                            size={37}
                                            color="#14142B"
                                        />
                                        <p
                                        className={`
                                            font-lato font-semibold text-sm text[#14142B]
                                        `}
                                        >
                                        Comment (52)
                                        </p>
                                    </div>

                                    <div
                                        className={`
                                            flex flex-row gap-0.5 items-center
                                        `}
                                    >
                                        <FaStar 
                                            size={37}
                                            color="#14142B"
                                        />
                                        <p
                                        className={`
                                            font-lato font-semibold text-sm text[#14142B]
                                        `}
                                        >
                                            4.8 of 5
                                        </p>
                                    </div>
                    
                                </div>
                    
                            </div>
                        </div>
                    ))
                )}

            </div>

        </div>
    )
}

export default TravelBody