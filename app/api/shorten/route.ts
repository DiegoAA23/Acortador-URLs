import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import prisma from "@/lib/dbt";

export async function POST(request: NextRequest){
    const {url} = await request.json();

    const shortUrl = nanoid(6);
    const shortenedUrl = await prisma.url.create({
        data: {
            originalUrl: url,
            shortUrl: shortUrl
        }
    })

    return NextResponse.json({shortCode: shortenedUrl.shortUrl})
}