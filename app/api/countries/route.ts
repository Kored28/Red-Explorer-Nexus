import { NextResponse } from "next/server";

import { prisma } from "@/libs/prismadb";
import { Continent } from "@prisma/client";

interface PostRequestProps {
    name: string;
    continent: Continent;
}

export const POST = async(req: Request) => {
    try {
        const body: PostRequestProps = await req.json();
        const { name, continent } = body;

        if(!name || !continent){
            NextResponse.json({ message: "These fields are required" }, {status: 400});
        }

        const country = await prisma.country.create({
           data: {
            name,
            continent
           } 
        });

        return NextResponse.json(country, {status: 201});
    } catch {
        NextResponse.json({ message: "Something went wrong" }, {status: 500})
    }
}


export const GET = async() => {
    try {
        const country = await prisma.country.findMany({})

        return NextResponse.json(country, {status: 200});
    } catch {
        NextResponse.json({ message: "Something went wrong" }, {status: 500})
    }
}