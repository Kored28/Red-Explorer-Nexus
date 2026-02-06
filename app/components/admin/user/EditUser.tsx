"use client";

import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";

import useUser from "@/hooks/useUser";
import { User } from "@prisma/client";
import axios from "axios";
import Input from "../inputs/Input";
import AdminHeader from "../AdminHeader";
import Button from "../Button";
import ImageUpload from "../inputs/ImageUpload";
import Textarea from "../inputs/Textarea";

interface EditUserProps {
    currentUser?: User | null
}

const EditUser: React.FC<EditUserProps> = ({ currentUser }) => {
    if(!currentUser) {
        toast.error("Unauthorized");
        redirect("/login");
    }
    const { mutate: mutateFetchedUser } = useUser(currentUser?.id);

    const [profileImage, setProfileImage] = useState<string | null>('');
    const [name, setName] = useState<string | null>('');
    const [username, setUsername] = useState<string | null>('');
    const [bio, setBio] = useState<string | null>('');

    useEffect(() => {
      setProfileImage(currentUser?.profileImage)
      setName(currentUser?.name);
      setUsername(currentUser?.username)
      setBio(currentUser?.bio)
    }, [
        currentUser?.profileImage,
        currentUser?.name,
        currentUser?.username,
        currentUser?.bio,
    ])

    const router = useRouter()
    
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(async() => {
        try {
            setIsLoading(true);

            await axios.patch('/api/edit', {
                name,
                username,
                bio,
                profileImage
            })

            mutateFetchedUser();

            toast.success('Updated');

            router.back()
        } catch  {
            toast.error("Something went wrong")
        } finally {
            setIsLoading(false);
        }
    }, [bio, name, username, profileImage, mutateFetchedUser, router]);

  return (
    <div className="flex flex-col gap-10">
        <AdminHeader title="Edit Profile"/>

        <div className="flex flex-col gap-7 w-71 lg:w-[40%]">
            <ImageUpload 
                value={profileImage ? profileImage : ""}
                disabled={isLoading}
                onChange={(image) => setProfileImage(image)}
                label="Upload profile image"
            />

            <Input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name ? name : ""}
                type="text"
                disabled={isLoading}
            />
            <Input
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username ? username : ""}
                type="text"
                disabled={isLoading}
            />
            <Textarea
                placeholder="Bio"
                onChange={(e) => setBio(e.target.value)}
                value={bio ? bio : ""}
                disabled={isLoading}
            />
        </div>

        <div className="w-71 lg:w-[40%]">
            <Button 
            label="Save"
            onClick={onSubmit}
            disabled={isLoading}
            disabledText="Saving"
            />
        </div>
    </div>
  )
}

export default EditUser