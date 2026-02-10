"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Button from "../Button";
import AdminHeader from "../AdminHeader";
import useDestinations from "@/hooks/useDestinations";
import { Spinner } from "@/components/ui/spinner";

interface Post {
    id: string
    title: string;
    content: string;
    featuredImage: string;
    excerpt?: string;
    country: {
        id: string;
        name: string;
    }
}



const DestinationAdmin = () => {
  const router = useRouter();
        
    const { data: fetchedPost, isLoading } = useDestinations();
    console.log(fetchedPost)


  return (
        <div>
            <div className="flex flex-col gap-10 h-full">
                <div className="flex flex-row justify-between ">
                    <AdminHeader title="Destinations" />

                    <div className="w-40">
                        <Button 
                        label="Add new Destination"
                        small
                        outline
                        href="/admin/destinations/new"
                        />
                    </div>
                </div>
                <div className="w-full">
                    {isLoading || !fetchedPost  ? (
                        <div>
                            <Spinner color="blue" className="size-14"/>
                        </div>
                    ): (
                        <div className="flex flex-col gap-7">
                            {fetchedPost.map((post: Post) => (
                                
                                <div 
                                    key={post.id}
                                    className={`
                                        grid md:grid-cols-3 md:items-center justify-between bg-amber-50 shadow-sm px-5
                                        py-6 gap-5 md:gap=0
                                    `}
                                >
                                    <div className="relative h-25 w-35">
                                        <Image 
                                        src={post.featuredImage}
                                        alt="Featured Image"
                                        fill
                                        className="object-cover"
                                        />
                                    </div>
                                    <h2 className="text-lg font-semibold text-black">
                                        {post.title}
                                    </h2>
                                    <h2 className="text-base font-semibold text-black md:text-center">
                                        {post.country.name}
                                    </h2>
                                    
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DestinationAdmin