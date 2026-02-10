import { NextResponse } from "next/server";
import slugify from "slugify";

import { prisma } from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

interface PostRequestProps {
    name: string;
}

export const POST = async(req: Request) => {
    try {
        const { currentUser } = await serverAuth();
        
        if(!currentUser){
            return NextResponse.json({message: "Unauthorized"}, {status: 401})
        }

        const body: PostRequestProps = await req.json();
        
        const { name } = body;

        if(!name){
            NextResponse.json({ message: "These fields are required" }, {status: 400});
        }

        const slug = slugify(name, {
            lower: true,
            strict: true
        });

        const existingSlug = await prisma.category.findUnique({
            where: {
                slug
            }
        })

        if(!existingSlug ){
            NextResponse.json({ message: "category already exist" }, {status: 400});
        }

        const category = await prisma.category.create({
           data: {
            name,
            slug,
           } 
        })

        return NextResponse.json(category, {status: 201})
    } catch {
        NextResponse.json({ message: "Something went wrong" }, {status: 500})
    }
}
