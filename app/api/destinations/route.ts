import serverAuth from "@/libs/serverAuth";
import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb"

interface PostRequestProps {
    title: string;
    content: string;
    featuredImage: string;
    excerpt?:string;
    countryId: string;
}

export const POST = async(req: Request) => {
    try {
        const { currentUser } = await serverAuth();
        if(!currentUser){
            return NextResponse.json({message: "Unauthorized"}, {status: 401})
        }

        const body: PostRequestProps = await req.json();
        const { title, content, featuredImage, excerpt, countryId } = body;

        if(!title || !content || !featuredImage || !countryId ){
            return NextResponse.json({message: "Missing fields"}, {status: 400})
        }

        const destination = await prisma.destination.create({
            data: {
                title,
                content,
                featuredImage,
                excerpt,
                authorId: currentUser.id,
                countryId
            }
        })

        return NextResponse.json(destination, { status: 201 })

    } catch {
        return NextResponse.json({message: "Something went wrong"}, {status: 500})
    }
}


export const GET = async () => {
    try {
        const destination = await prisma.destination.findMany({
            orderBy: {
                createdAt: "desc"
            },
            include: {
                country: true
            }
        });

        return NextResponse.json(destination, {status: 200})
    } catch {
        return NextResponse.json({message: "Something went wrong"}, {status: 500})
    }
}