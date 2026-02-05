import { getServerSession } from "next-auth";

import { authOptions } from "@/libs/authOptions";
import prisma from "@/libs/prismadb";
import toast from "react-hot-toast";

export const getSession = async() => {
    return await getServerSession(authOptions)
}

const getCurrentUser = async() => {
    try {
        const session = await getSession();

        if(!session?.user?.email){
            return toast.error("User Session has expired");
        }

        const currentUser  = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        });

        if(!currentUser){
            return toast.error("unauthorized");
        }

        return currentUser;
    } catch (error) {
        return toast.error("Something went wrong please try again")
    }
} 

export default getCurrentUser