"use client";

import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import useDestinations from "@/hooks/useDestinations";
import { Skeleton } from "@/components/ui/skeleton";
import useTravelTips from "@/hooks/useTravelTips";
import useRelatedDestinations from "@/hooks/useRelatedDestinations";
import useRelatedTravelTips from "@/hooks/useRelatedTravelTips";
import PostCard from "../../PostCard";

interface Post {
  id: string;
  title: string;
  featuredImage: string;
  excerpt?: string;
  country: {
    id: string;
    name: string
  }
  createdAt: string;
}


const PostRight = () => {
  const { main, related, isLoading } = useRelatedDestinations();
  const { main: travelMain, related: travelRelated, isLoading: travelLoading } = useRelatedTravelTips();

  
  return (
    <div className='w-full md:w-198.5 flex flex-col gap-13.75'>
      {/* Destinations */}
      {!main || isLoading ? (
        <Skeleton className="aspect-video w-full" />
        ) :
        (
          <PostCard 
            key={main.id}
            title={main.title}
            featuredImage={main.featuredImage}
            excerpt={main.excerpt}
            country={main.country}
            post="Destination"
            createdAt={main.createdAt}
          />
        )
      }

      
      {!related || isLoading ? (
        <Skeleton className="aspect-video w-full" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
        
          {related?.map((post: Post) => (
            <PostCard 
              key={post.id} 
              title={post.title}
              featuredImage={post.featuredImage}
              country={post.country}
              createdAt={post.createdAt}
              post="Destination"
              double
            />
          ))}
        </div>
      )}
        
      {/* Travel Tips */}

      {!travelMain || travelLoading ? (
        <Skeleton className="aspect-video w-full" />
        ) :
        (
          <PostCard 
            key={travelMain.id}
            title={travelMain.title}
            featuredImage={travelMain.featuredImage}
            excerpt={travelMain.excerpt}
            country={travelMain.country}
            post="Tips & Tricks"
            createdAt={travelMain.createdAt}
          />
        )
      }

      {!travelRelated || isLoading ? (
        <Skeleton className="aspect-video w-full" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
        
          {travelRelated?.map((post: Post) => (
            <PostCard
              key={post.id} 
              title={post.title}
              featuredImage={post.featuredImage}
              country={post.country}
              createdAt={post.createdAt}
              post="Tips & Tricks"
              double
            />
          ))}
        </div>
      )}
      
    </div>
  )
}

export default PostRight