import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";

interface RegisterBodyProps {
    name: string;
    username: string;
    email: string;
    password: string;
}


export const POST = async(req: Request) => {
    try {
        const body: RegisterBodyProps = await req.json()
        const {name, username, email, password } = body;

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = await prisma?.user.create({
            data: {
                name,
                username,
                email,
                hashedPassword
            }
        })

        return NextResponse.json(user, {status: 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Failed to create account"}, {status: 400})
    }
}