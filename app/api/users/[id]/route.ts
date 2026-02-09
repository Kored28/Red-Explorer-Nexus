import { NextResponse } from "next/server"
import { prisma } from "@/libs/prismadb"


export const GET = async(
    req: Request,
    { params }: { params : Promise<{ id: string }> }
) => {
    try {
        const { id } = await params;
        if(!id || typeof id !== "string" ){
            return NextResponse.json({ message: "Invalid user id" }, { status: 400 })
        }

        const existingUser = await prisma.user.findUnique({
            where: {
                id
            }
        })

        if(!existingUser){
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
       
        return NextResponse.json(existingUser, { status: 200 })
    } catch  {
       return NextResponse.json({message: "Something went wrong"}, { status: 500 })
    }
}