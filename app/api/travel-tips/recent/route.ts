import { NextResponse } from "next/server";

import { prisma } from "@/libs/prismadb";

export const GET = async () => {
    try {
        const destinations = await prisma.travelTips.findMany({
            orderBy: { 
                createdAt: "desc" 
            },
            take: 3,
            include: {
                country: true,
            },
        });

        const [main, ...related] = destinations;

        return NextResponse.json({
            main,
            related,
        }, {status: 200});
    } catch  {
        return NextResponse.json({Message:"Error fetching destinations"}, { status: 500 });
    }
}