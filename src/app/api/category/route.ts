import { client } from "@/app/lib/sanityClient";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    const res = await client.fetch(`*[_type=="category"]`);
    return NextResponse.json({data:res})  ;
}