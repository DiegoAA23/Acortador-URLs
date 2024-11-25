import prisma from "@/lib/dbt";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const urls = await prisma.url.findMany({
            orderBy: {createdAt: 'desc'},
            take: 5
        })
        return NextResponse.json(urls);
    }catch(e){
        console.error('Error GET: ' + e);
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
    }
}