"use client";

import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";

interface PostCardProps {
  title: string;
  featuredImage: string;
  excerpt?: string;
  country: {
    id: string;
    name: string
  }
  createdAt: string;
  post: string;
  double?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
    title,
    featuredImage,
    excerpt,
    country,
    createdAt,
    post,
    double
}) => {
    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };
  return (
    <div 
        className={`bg-white flex flex-col gap-2
            shadow-inner-[0_2px_6px_0_rgba(0,0,0,0.197)] shadow-[0_6px_14px_0_rgba(0,0,0,0.283)]
        `}
    >
        <div className={`relative w-full ${double ? "h-67" : "h-113.25"} `}>
            <Image
            src={featuredImage}
            alt="Featured Image"
            fill
            className="object-cover pb-3"
            />
        </div>
        {/* Body */}

        <div
            className={`flex flex-col ${double ? "gap-18" : "gap-2.25"} pb-8`}
        >
            <p 
            className={`
                font-lato font-medium text-lg leading-[33.81px]
                border-l-6 border-[#FFA500] px-4.5 mb-2
            `}
            >
            {formatDate(createdAt)} - {post} 
            </p>

            <div className={`flex flex-col gap-1 px-6 ${double ? "pb-12" : "pb-0"}`}>
                <h2
                    className={`
                    font-lato font-semibold text-[31.64px] leading-[46.98px]
                    `}
                >
                    {title}
                </h2>
                <p
                    className={`
                    font-lato font-medium text-2xl leading-10
                    `}
                >
                    {excerpt}
                </p>
            </div>

            {/* Footer */}
            <div 
            className={`
                flex flex-row justify-between px-6 pt-2
            `}
            >
            <div
                className={`
                flex flex-row gap-3 items-center
                `}
            >
                <FaLocationDot
                size={25}
                color="#FFA500"
                />
                <p
                className={`
                    font-lato font-medium text-lg leading-10
                `}
                >
                {country.name}
                </p>
            </div>
            
            <div
                className={`
                flex flex-row gap-3 items-center
                `}
            >
                <FaComments
                size={25}
                color="#FFA500"
                />
                <p
                className={`
                    font-lato font-medium text-lg leading-10
                `}
                >
                Comment (52)
                </p>
            </div>

            </div>

        </div>

    </div>
  )
}

export default PostCard