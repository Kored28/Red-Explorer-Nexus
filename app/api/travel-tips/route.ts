import serverAuth from "@/libs/serverAuth";
import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb"

interface PostRequestProps {
    title: string;
    content: string;
    featuredImage: string;
    excerpt?: string;
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

        const TravelTips = await prisma.travelTips.create({
            data: {
                title,
                content,
                featuredImage,
                excerpt,
                authorId: currentUser.id,
                countryId
            }
        })

        return NextResponse.json(TravelTips, { status: 201 })

    } catch (error) {
        return NextResponse.json({message: "Something went wrong"}, {status: 500})
    }
}


export const GET = async () => {
    try {
        const TravelTips = await prisma.travelTips.findMany({
            orderBy: {
                createdAt: "desc"
            },
            include:{
                country: true
            }
        });

        return NextResponse.json(TravelTips, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Something went wrong"}, {status: 500})
    }
}