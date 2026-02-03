import serverAuth from "@/libs/serverAuth";
import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb"

interface PostRequestProps {
    title: string;
    content: string;
    featuredImage: string;
    countryId: string;
}

export const POST = async(req: Request) => {
    try {
        const { currentUser } = await serverAuth();
        const body: PostRequestProps = await req.json();

        const { title, content, featuredImage, countryId } = body;

        const destination = await prisma.destination.create({
            data: {
                title,
                content,
                featuredImage,
                authorId: currentUser.id,
                countryId
            }
        })

        return NextResponse.json(destination, { status: 200 })

    } catch (error) {
        console.log(error);
        NextResponse.json({message: "Something went wrong"}, {status: 500})
    }
}