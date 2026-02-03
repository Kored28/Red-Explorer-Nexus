import serverAuth from "@/libs/serverAuth";
import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";

interface RequestBodyProps {
    name: string;
    username: string;
    bio: string;
    profileImage: string;
}

export const PATCH = async (req: Request) => {
    try {
        const { currentUser } = await serverAuth();

        const body: RequestBodyProps = await req.json();

        const { name, username, bio, profileImage} = body;

        if(!name || !username){
            NextResponse.json({message: "Missing fields"}, { status: 400 })
        }

        const updatedUser = await prisma.user.update({
            where: {
                id: currentUser.id,
            },
            data: {
                name,
                username,
                bio,
                profileImage
            }
        })

        return NextResponse.json(updatedUser, {status: 201})

    } catch (error) {
        console.log(error);
        NextResponse.json({message: "Failed to edit Profile"}, { status: 400 })
    }
}