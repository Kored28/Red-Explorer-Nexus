'use client';

import Image from "next/image";
import useUser from "@/hooks/useUser";
import { useParams, useRouter } from "next/navigation";

import Button from "../Button";
import Placeholder from "@/public/images/user.png"
import AdminHeader from "../AdminHeader";
import { Spinner } from "@/components/ui/spinner";


const User = () => {
    const params = useParams<{id: string}>();
    const router = useRouter();
    
    const { data: fetchedUser, isLoading } = useUser(params.id);

    const handleClick = () => {
        router.push(`/admin/users/${params.id}/edit`)
    };

    return (
        <div className="flex flex-col gap-10 h-full">
            <div className="flex flex-row justify-between ">
                <AdminHeader title="Profile" />

                <div className="w-25">
                    <Button 
                    label="Edit User"
                    small
                    outline
                    onClick={handleClick}
                    />
                </div>
            </div>
            <div className="w-full">
                {isLoading || !fetchedUser  ? (
                    <div
                        className="flex flex-row  "
                    >
                        <Spinner color="blue" className="size-14"/>
                    </div>
                ): (
                    <div className="flex flex-col gap-4">
                        {fetchedUser.profileImage ? (
                           <div className="relative w-37.5 h-37.5 ">
                             <Image
                                src={fetchedUser.profileImage}
                                alt="Profile Image"
                                fill
                                className="rounded-full object-cover"
                            />
                           </div>
                        ):(
                            <Image
                                src={Placeholder}
                                alt="Profile Image"
                                width={100}
                                height={100}
                                className="rounded-full"
                            />
                        )}

                        <div className="flex flex-row gap-2 items-center">
                            <p className="text-lg font-bold">
                                Name:
                            </p>
                            <h2 className="text-lg font-medium">
                                {fetchedUser.name}
                            </h2>
                        </div>

                        <div className="flex flex-row gap-2 items-center">
                            <p className="text-lg font-bold">
                                Username:
                            </p>
                            <h2 className="text-lg font-medium">
                                {fetchedUser.username}
                            </h2>
                        </div>
                        
                        <div className="flex flex-row gap-2 items-center">
                            <p className="text-lg font-bold">
                                Bio:
                            </p>
                            <p className="text-lg font-medium w-[50%]">
                                {fetchedUser.bio ? fetchedUser.bio : "Empty"}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default User