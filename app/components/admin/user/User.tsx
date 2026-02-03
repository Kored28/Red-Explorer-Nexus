'use client';

import Image from "next/image";
import useUser from "@/hooks/useUser";
import { ClipLoader } from "react-spinners";
import { useParams, useRouter } from "next/navigation";

import Button from "../Button";
import Placeholder from "@/public/images/user.png"
import AdminHeader from "../AdminHeader";


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
                        <ClipLoader color="blue" size={80}/>
                    </div>
                ): (
                    <div className="flex flex-col gap-4">
                        {fetchedUser.profileImage ? (
                            <Image
                                src={fetchedUser.profileImage}
                                alt="Profile Image"
                                width={150}
                                height={150}
                                className="rounded-full"
                            />
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